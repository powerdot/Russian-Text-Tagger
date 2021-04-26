module.exports = [
    {
        name: "Мат",
        words: [
            {is_swear: true}
        ],
        strict_word_sequence: true,
        strict_word_direction: false,
        check_scope: 'all',
        markers: [11]
    },
    {
        name: "Оскорбление",
        words: [
            {type: "NPRO"},
            {is_swear: true}
        ],
        strict_word_sequence: true,
        strict_word_direction: false,
        check_scope: 'all',
        markers: [11, 8, 1, 13]
    },
    {
        name: "Оскорбление",
        words: [
            {text: ["ты", "вы"]},
            {normalized: ["козел", "тупорылый", "баран", "осел", "придурок","пёс", "псина", "дурила", "дурак", "шакал"]}
        ],
        strict_word_sequence: true,
        check_scope: 'all',
        markers: [11, 8, 1, 13]
    },
    {
        name: "Притянутый расизм",
        words: [
            {is_racism: true}
        ],
        strict_word_sequence: true,
        strict_word_direction: false,
        check_scope: 'all',
        markers: [13]
    },
    {
        name: "Неприкосновенность щёк человека",
        words: [
            {text: ["за"]},
            {text: ["щёку", "щеку"]}
        ],
        strict_word_sequence: true,
        strict_word_direction: false,
        check_scope: 'all',
        markers: [1, 13]
    }
]