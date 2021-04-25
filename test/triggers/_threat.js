module.exports = [
    {
        name: "Угроза убийства",
        words: [
            {text: ["тебя", "вас", "её", "его"]},
            {normalized: ["убить", "сжечь", "взорвать", "зарезать", "пристрелить"]},
        ],
        check_scope: 'sentences',
        markers: [6]
    },
    {
        name: "Угроза вреда",
        words: [
            {text: ["тебя", "вас", "её", "его"]},
            {normalized: ["изнасиловать", "зарезать", "резать", "колоть", "найти"]},
        ],
        check_scope: 'sentences',
        markers: [6]
    },
]

// strict_word_sequence: false,
// strict_word_direction: true,