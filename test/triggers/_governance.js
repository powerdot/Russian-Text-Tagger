
let common_insults = require("./common_insults")();

let governance_people = [
    "путин",
    "путина",
    "путен",
    "кадыров",
    "собянин",
    "собякин",
    "кудрин",
    "мединский",
    "мидинский",
    "патрушев",
    "набиуллина",
    "нобиуллина",
    "набиулина",
    "нобиулина",
    "улюкаев",
    "силуанов",
    "яровая",
    "матвиенко",
    "песков",
    "писков",
    "золотов",
    "шойгу",
    "шайгу",
    "шаигу",
    "шоигу",
    "сечин",
    "сетчин",
    "чемезов",
    "чемизов",
    "рогозин",
    "рагозин"
];

let rich_people = [
    "делимханов",
    "бречалов",
    "греф",
    "миллер",
    "дерипаска",
    "дирипаска",
    "ковальчук",
    "ковальчюк",
    "кавальчук",
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
            {normalized: [...rich_people,...governance_people]},
            {POST: "VERB"}
        ],
        strict_word_direction: true,
        check_scope: 'sentences',
        markers: [8]
    },
    {
        name: "Вероятное оскорбление власти в одном предложении",
        words: [
            {normalized: governance_people},
            {is_swear: true}
        ],
        strict_word_sequence: false,
        strict_word_direction: true,
        check_scope: 'sentences',
        markers: [4]
    },
    {
        name: "Вероятное оскорбление власти в одном предложении",
        words: [
            {normalized: governance_people},
            {text: ["плохой", "дурак", "чмо", "хуй", "тупой", "идиот", "кретин", "говно", "царь", "предатель"]}
        ],
        strict_word_sequence: false,
        strict_word_direction: true,
        check_scope: 'sentences',
        markers: [4]
    },
    {
        name: "Вероятное оскорбление власти - не с заглавной буквы",
        words: [
            {normalized: governance_people, firstUpper: false},
        ],
        strict_word_sequence: false,
        strict_word_direction: true,
        check_scope: 'sentences',
        markers: [4]
    },
    {
        name: "Вероятное оскорбление власти - не с заглавной буквы",
        words: [
            {text: ['путен', 'путэн', 'собякин', 'хутин']},
        ],
        strict_word_sequence: false,
        strict_word_direction: true,
        check_scope: 'sentences',
        markers: [4]
    }
]