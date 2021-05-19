let triggers = [
    {
        name: "Приветсвие",
        words: [{text: ["привет", "хелоу", "здарова", "хай", "прив"]}],
        markers: ['hi'],
        check_scope: 'sentences'
    },
    {
        name: "Вопрос о времени работы",
        words: [
            {normalized: ["какой"]},
            {normalized: ["время", "час", "часы"]},
            {normalized: ["работать"]},
        ],
        markers: ['working_time'],
        strict_word_sequence: false,
        strict_word_direction: true,
        check_scope: 'sentences'
    },
    {
        name: "Вопрос о времени",
        words: [
            {normalized: ["сколько", 'который', 'какой']},
            {normalized: ["время", "час"]}
        ],
        markers: ['what_time'],
        strict_word_sequence: false,
        strict_word_direction: true,
        check_scope: 'sentences'
    },
    {
        name: "Выключить свет",
        words: [
            {normalized: ["выключить"]},
            {normalized: ['свет', 'лампа', 'лампочка', 'светильник']},
        ],
        markers: ['light_off'],
        strict_word_sequence: false,
        strict_word_direction: true,
        check_scope: 'sentences'
    },
    {
        name: "Включить свет",
        words: [
            {normalized: ["включить"]},
            {normalized: ['свет', 'лампа', 'лампочка', 'светильник']},
        ],
        markers: ['light_on'],
        strict_word_sequence: false,
        strict_word_direction: true,
        check_scope: 'sentences'
    },
    {
        name: "Выключить музыку",
        words: [
            {normalized: ["выключить", 'остановить', 'пауза']},
            {normalized: ['песня', 'музыка', 'колонка', 'трек']},
        ],
        markers: ['music_off'],
        strict_word_sequence: false,
        strict_word_direction: true,
        check_scope: 'sentences'
    },
    {
        name: "Включить музыку",
        words: [
            {normalized: ["включить", 'запустить', 'возобновить']},
            {normalized: ['песня', 'музыка', 'трек']},
        ],
        markers: ['music_on'],
        strict_word_sequence: false,
        strict_word_direction: true,
        check_scope: 'sentences'
    },
];

let RTT;
Az.Morph.init('./dicts', function(){
    console.log('AZ Loaded')
    RTT = RussianTextTagger({triggers, loadedAz: Az, uniq_markers: true});
    sendMessage('Привет 👋<br>Ты можешь попросить меня включить или выключить свет, музыку или просто спросить который час!');
})