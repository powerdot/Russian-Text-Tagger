let triggers = [
    {
        name: "Приветсвие",
        words: [
            {
                text: ["привет"]
            }
        ],
        markers: [1]
    },
    {
        name: "Включение света",
        words: [
            {normalized: "включить"},
            {normalized: "свет"}
        ],
        strict_word_direction: true,
        markers: [2],
        check_scope: 'sentences'
    },
    {
        name: "Выключение света",
        words: [
            {normalized: "выключить"},
            {normalized: "свет"}
        ],
        strict_word_direction: true,
        markers: [21],
        check_scope: 'sentences'
    },
    {
        name: "Включение музыки",
        words: [
            {normalized: ["включить", "запустить"]},
            {normalized: "музыка"}
        ],
        strict_word_direction: true,
        markers: [3],
        check_scope: 'sentences'
    },
    {
        name: "Выключение музыки",
        words: [
            {normalized: "выключить"},
            {normalized: "музыка"}
        ],
        strict_word_direction: true,
        markers: [31],
        check_scope: 'sentences'
    },
    {
        name: "Вопрос про веру",
        words: [
            {normalized: ["вера", "верить"]},
            {is_god: true}
        ],
        strict_word_direction: true,
        markers: [4],
        check_scope: 'sentences'
    }
];

let Analysis = require("../index")({triggers});

(async ()=>{
    let results = await Analysis("привет. включи музыку! и включи свет!");

    let message = "";
    for(let m of results.markers){
        if(m==1) message+='Привет, друг!\n'
        if(m==2) message+='Включила свет!\n'
        if(m==21) message+='Выключила свет!\n'
        if(m==3) message+='Включила музыку!\n'
        if(m==31) message+='Выключила музыку!\n'
        if(m==4) message+='Я робот, я не умею верить!\n'
    }
    
    console.log(message);

})();

