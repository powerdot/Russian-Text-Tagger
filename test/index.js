const triggers = require("./triggers");
let Analysis = require("../index")({triggers, uniq_markers: true});

const laws = require("./laws");

(async ()=>{
    console.time("Analysis");
    let results = await Analysis("я убью тебя");
    console.timeEnd("Analysis")

    console.log('results:', results);

    let law_collection = [];
    for(let marker of results.markers){
        law_collection.push( laws.find(x=>x.id==marker) );
    }
    let sum_days = sum(law_collection, 'days');
    let sum_penalty = sum(law_collection, 'penalty');
    let result_heading = "";
    let result_body = "";
    let result_numbers = "";
    let result_laws = "";

    // Добавить другие варианты формирования справки
    if(law_collection.length == 0){
        result_heading += "Похоже, вы никого не обидели и не являетесь террористом, хулиганом и безбожником. Вы смело можете отправлять свой комментарий."
    }else{
        result_heading += "Будьте осторожны, вам могут предложить"
        if(sum_days[1] && sum_penalty[1]){
            result_heading += " как присесть, так и заплатить штраф."
            result_body += "Оставляя комментарий такого рода, независимые эксперты могут обнаружить в нём ";
            for(let i =0;i<=law_collection.length-1; i++){
                let l = law_collection[i];
                result_body += l.name_desc + (i<=law_collection.length-3?", ":(i==law_collection.length-1?".":" и "));
                result_laws += `- ${l.codex}${i==law_collection.length-1?'.':';\n'}`;
            }
            result_numbers += 'Вам может грозить штраф до '+penalty_format(sum_penalty[1])+' и срок до '+days_format(sum_days[1])+'.'
        }
        if(!sum_days[1] && sum_penalty[1]){
            result_heading += " заплатить штраф."
            result_body += "Оставляя комментарий такого рода, независимые эксперты могут обнаружить в нём ";
            for(let i =0;i<=law_collection.length-1; i++){
                let l = law_collection[i];
                result_body += l.name_desc + (i<=law_collection.length-3?", ":(i==law_collection.length-1?".":" и "));
                result_laws += `- ${l.codex}${i==law_collection.length-1?'.':';\n'}`;
            }
            result_numbers += 'Вам может грозить штраф до '+penalty_format(sum_penalty[1])+'.'
        }
        if(sum_days[1] && !sum_penalty[1]){
            result_heading += " присесть."
            result_body += "Оставляя комментарий такого рода, независимые эксперты могут обнаружить в нём ";
            for(let i =0;i<=law_collection.length-1; i++){
                let l = law_collection[i];
                result_body += l.name_desc + (i<=law_collection.length-3?", ":(i==law_collection.length-1?".":" и "));
                result_laws += `- ${l.codex}${i==law_collection.length-1?'.':';\n'}`;
            }
            result_numbers += 'Вам может грозить срок до '+days_format(sum_days[1])+'.'
        }
    }

    console.log(result_heading);
    console.log(result_body);
    console.log(result_laws);
    console.log(result_numbers);
})();


    

function sum(array, key){
    let result = [0, 0];
    for(let item of array){
        if(!item[key]) continue;
        result[0] += item[key][0];
        result[1] += item[key][1];
    }
    return result;
}

function days_format(days){
    let years_amount = Math.ceil(days/365);
    if(years_amount>=1) return years_amount + ' ' + declOfNum(years_amount, ['года', 'лет', 'лет']);
    return days + declOfNum(days, ['суток', 'суток', 'суток'])
}

function penalty_format(p){
    return p.toLocaleString('RU-ru')+" "+declOfNum(p, ['рубль', 'рубля', 'рублей'])
}

function declOfNum(number, titles) {  
    let cases = [2, 0, 1, 1, 1, 2];  
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
}