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
            {text: ["патриарх", "патреарх"]}
        ],
        markers: [3,8,1]
    },
    {
        name: "Очень опасно",
        words: [
            {normalized: ["аллах", "аллаху"]},
            {text: ['акбар', 'окбар']}
        ],
        strict_word_direction: true,
        check_scope: 'sentences',
        markers: [3, 17, 14]
    },
    {
        name: "Очень опасно",
        words: [
            {text: ['аллахуакбар', 'аллахакбар', 'алахакбар', 'алахуакбар']}
        ],
        check_scope: 'sentences',
        markers: [3, 17, 14]
    }
]