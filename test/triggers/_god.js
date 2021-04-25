module.exports = [
    {
        name: "Бог указан без первой заглавной буквы",
        words: [
            {is_god: true, firstUpper: false}
        ],
        strict_word_sequence: false,
        strict_word_direction: false,
        check_scope: 'all',
        markers: [3]
    },
    {
        name: "Присутсвие мата в предложении с упоминанием Бога",
        words: [
            {is_god: true},
            {is_swear: true}
        ],
        strict_word_sequence: false,
        strict_word_direction: false,
        check_scope: 'sentences',
        markers: [3]
    },
    {
        name: "Отрицание бога",
        words: [
            {is_god: true},
            {text: ["нет", "нету", "мёртв"]}
        ],
        strict_word_sequence: true,
        strict_word_direction: false,
        check_scope: 'sentences',
        markers: [3]
    },
    {
        name: "Отрицание бога",
        words: [
            {is_god: true},
            {text: "не"},
            {text: ["существует", "настоящий"]}
        ],
        strict_word_sequence: true,
        strict_word_direction: false,
        check_scope: 'sentences',
        markers: [3]
    },
    {
        name: "Упоминание патриарха",
        words: [
            {text: "патриарх"}
        ],
        markers: [3,8,1]
    },
    {
        name: "Упоминание патриарха",
        words: [
            {text: "патреарх"}
        ],
        markers: [3,8,1]
    }
]