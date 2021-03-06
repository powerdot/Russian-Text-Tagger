let Az = require('az');
const swear = require("./dicts/swear")(true);
const drugs = require("./dicts/drugs")();
const gods = require("./dicts/gods")();
const racism = require("./dicts/racism")();

let UNIQ_MARKERS = false;
let TRIGGERS = [];
let sentence_seq = [];
let AzInitiated = false;


/**
 * Метод анализа строк
 * @param {string} sentence Строка для анализа
 * @returns {Object} Объект результатов анализа
 */
function Analysis(sentence){
    // if(!AzInitiated) return sentence_seq.push(sentence);
    if(!AzInitiated){
        return new Promise(function (resolve, reject) {
            sentence_seq.push(function(params) {
                return resolve(Analysis(sentence));
            })
        });
    }

    // Разделение текста на предложения
    let sentences = sentence.replace(/\.\.(\.*)/g, '.').replace(/([.?!\n])\s*(?=[\D])/g, "$1|").split("|");
    let sentences_tokens = [];
    for(let s of sentences) sentences_tokens.push( new Az.Tokens(s).done() );
    
    // Генерация морфем и их свойств по словам в предложениях
    let marker_collection = [];
    let triggered_collection = [];
    let sentences_morphs = [];
    for(let sentence_tokens of sentences_tokens){
        let sentence_morphs = [];
        for(let token of sentence_tokens){
            if(token.type != "WORD") {
                sentence_morphs.push(token);
                continue;
            }
            let text = token.toString().toLowerCase().replace(/\d/g, '');
            let text_non_yo = text.replace(/ё/g, 'е');
            let morph = Az.Morph(text);
            let morph_POST = "undf";
            if(morph.length != 0) morph_POST = morph[0].tag.POST;
            let normalized = morph[0]?(morph.map(x=>x.normalize(false).word)||[text, text_non_yo]):[text, text_non_yo];
            let is_drugs = false;
            let is_swear = false;
            let is_god = false;
            let is_dangerous_people = false;
            let is_racism = false;
            for(let norm of normalized){
                if(swear.includes(norm) || swear.includes(norm.replace(/ё/g, 'е'))) is_swear = true;
                if(drugs.includes(norm) || drugs.includes(norm.replace(/ё/g, 'е'))) is_drugs = true;
                if(gods.includes(norm) || gods.includes(norm.replace(/ё/g, 'е'))) is_god = true;
                if(racism.includes(norm) || racism.includes(norm.replace(/ё/g, 'е'))) is_racism = true;
            }
            let _m = {
                ...token,
                POST: morph_POST, 
                text, 
                text_non_yo, 
                normalized,
                is_drugs, 
                is_god, 
                is_swear, 
                is_dangerous_people, 
                is_racism
            };
            sentence_morphs.push( _m );
        }
        sentences_morphs.push(sentence_morphs);
    }

    let all_morphs = [].concat.apply([],sentences_morphs)

    // Обработка всех возможных тригеров
    for(let trigger of TRIGGERS){
        if(trigger.no_words_like_this) continue;
        switch (trigger.check_scope) {
            case "sentences":
                for(let sentence_morphs of sentences_morphs) {
                    let check = CheckMorphsForTriggers({sentence_morphs, trigger});
                    marker_collection.push( ...check.markers );
                    triggered_collection.push( ...check.triggered );
                }
                continue;
            default:
                let check = CheckMorphsForTriggers({sentence_morphs: all_morphs, trigger});
                marker_collection.push( ...check.markers );
                triggered_collection.push( ...check.triggered );
                continue;
        }
    }
    
    // Анализ всего текста на отсутсвие запрещенных сочитаний
    for(let trigger of TRIGGERS.filter(x=>x.no_words_like_this)){
        if(trigger.no_words_like_this){
            for(let nw of trigger.no_words_like_this){
                if(sentence.toLowerCase().includes(nw)){
                    marker_collection.push(...trigger.markers);
                }
            }
        }
    }

    if(UNIQ_MARKERS) marker_collection = marker_collection.filter((v,i,a)=>a.findIndex(t=>(t === v))===i);

    // Результат
    return {
        sentence,
        sentences,
        markers: marker_collection,
        triggered: triggered_collection,
        morphs: sentences_morphs
    }
}


/**
 * Проверка последовательности морфем на тригеры
 * @param {Object} param0
 * @param {Array} param0.sentence_morphs Массив морфем
 * @param {Object} param0.trigger Тригер для проверки
 * @param {Boolean=} param0.strict_word_sequence Проверка соблюдения последовательности морфем относительно правил в тригере
 * @returns {Object} Объект маркеров и тригеров
 */
function CheckMorphsForTriggers({sentence_morphs, trigger}){
    let markers_collection = [];
    let triggered = [];

    trigger = {
        strict_word_direction: false,
        strict_word_sequence: false,
        ...trigger
    }

    if(trigger.strict_word_sequence) trigger.strict_word_direction = true;

    let a = trigger.words;
    let b = sentence_morphs.filter(x=>x.type=="WORD");
    let m = 0;
    // let selected_morphs = [];

    if(trigger.strict_word_direction){
        for(let _b of b){
            let _a = a[m];
            
            let a_keys = Object.keys(_a);
            let b_keys = Object.keys(_b);
            for(let b_key of b_keys) a_keys = a_keys.filter(x=>x!=b_key);
            if(a_keys.length != 0) continue;
            
            let keys_to_check = Object.keys(_a);
            let valid_keys = 0;
            let need_valid_keys = keys_to_check.length;
            
            for(let key of keys_to_check){
                if(key === "text"){
                    let values = typeof _a[key] == "string"?[_a[key]]:_a[key];
                    if(values.includes(_b[key])) valid_keys++;
                    continue;
                }
                if(key === "normalized"){
                    let values = typeof _a[key] == "string"?[_a[key]]:_a[key];
                    for(let value of values){
                        if(_b[key].includes(value)) {
                            valid_keys++;
                            break;
                        }
                    }
                    continue;
                }
                if(_a[key]===_b[key]) valid_keys++;
            }
            if(valid_keys == need_valid_keys){
                m++;
                // selected_morphs.push(_b);
                if(m == a.length) break;
            }else{
                if(trigger.strict_word_sequence) {
                    // selected_morphs = [];
                    m = 0;
                }
            }
        }
        if(m == a.length) {
            // trigger.selected_morphs = selected_morphs;
            markers_collection.push(...trigger.markers)
            triggered.push(trigger);
        }
    }else{
        for(let _a of a){
            for(let _b of b){
                let keys_to_check = Object.keys(_a);
                let valid_keys = 0;
                let need_valid_keys = keys_to_check.length;
                for(let key of keys_to_check){
                    if(key === "text"){
                        let values = typeof _a[key] == "string"?[_a[key]]:_a[key];
                        if(values.includes(_b[key])) valid_keys++;
                        continue;
                    }
                    if(key === "normalized"){
                        let values = typeof _a[key] == "string"?[_a[key]]:_a[key];
                        for(let value of values){
                            if(_b[key].includes(value)) {
                                valid_keys++;
                                break;
                            }
                        }
                        continue;
                    }
                    if(_a[key]===_b[key]) valid_keys++;
                }
                if(valid_keys == need_valid_keys){
                    m++;
                }
            }
        }
        if(m == a.length) {
            // trigger.selected_morphs = selected_morphs;
            markers_collection.push(...trigger.markers)
            triggered.push(trigger);
        }
    }
    return {markers: markers_collection, triggered};
}



/**
 * Инициализация процессора обработки натурального языка
 * @param {Object} params 
 * @param {Array=} params.triggers Словарь тригеров
 * @param {Boolean=} params.uniq_markers Возвращать маркеры без повторов [1,1,1]->[1]
 * @param {any=} params.loadedAz Собственный Az с предзагруженными словарями
 * @returns {Function} Метод анализа строк
 */
let Init = function({triggers=[], uniq_markers=false, loadedAz=null}){
    TRIGGERS = triggers;
    UNIQ_MARKERS = uniq_markers;
    if(loadedAz){
        AzInitiated = true;
        Az = loadedAz;
        return Analysis;
    }
    Az.Morph.init('./node_modules/az/dicts', function(){
        AzInitiated = true;
        for(let resolveAnalysis of sentence_seq) {
            sentence_seq = sentence_seq.slice(1);
            resolveAnalysis();
        }

    });
    return Analysis;
};

module.exports = Init;