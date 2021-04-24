
let common_insults = require("./common_insults")();

let dangerous_people = [
    "путин",
    "путина",
    "путину",
    "путине",
    "путен",
    "кадыров",
    "собянин",
    "собякин",
    "кудрин",
    "делимханов",
    "бречалов",
    "мединский",
    "мидинский",
    "набиуллина",
    "нобиуллина",
    "набиулина",
    "нобиулина",
    "улюкаев",
    "силуанов",
    "патриарх",
    "патреарх",
    "яровая",
    "матвиенко",
    "песков",
    "писков",
    "золотов",
    "шойгу",
    "шайгу",
    "шаигу",
    "шоигу",
    "патрушев",
    "греф",
    "миллер",
    "дерипаска",
    "дирипаска",
    "ковальчук",
    "ковальчюк",
    "ковальчуки",
    "кавальчук",
    "кавальчуки",
    "сечин",
    "сетчин",
    "чемезов",
    "чемизов",
    "усманов",
    "вексельберг"
];

module.exports = [
    {
        name: "Упоминание власти, необходима проверка на клевету",
        no_words_like_this: common_insults,
        markers: [4]
    },
    {
        name: "Необходима проверка на клевету с некоторыми фамилиями",
        words: [
            {normalized: dangerous_people}
        ],
        strict_word_sequence: false,
        strict_word_direction: false,
        check_scope: 'all',
        markers: [8]
    },
    {
        name: "Вероятное оскорбление власти в одном предложении",
        words: [
            {normalized: dangerous_people},
            {is_swear: true}
        ],
        strict_word_sequence: false,
        strict_word_direction: true,
        check_scope: 'sentences',
        markers: [4]
    }
]