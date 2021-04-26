module.exports = [
    {
        name: "Вероятное мошенничество с просьбой скинуть деняк",
        words: [
            {normalized: ["деньга"]},
            {normalized: ["скинуть", "скидывать", "отправить"]},
            {normalized: ["номер"]}
        ],
        strict_word_sequence: false,
        strict_word_direction: false,
        check_scope: 'sentences',
        markers: [15]
    },
    {
        name: "Вероятное мошенничество с номером карты",
        words: [
            {normalized: ["номер"]},
            {normalized: ["карта"]}
        ],
        strict_word_sequence: false,
        strict_word_direction: false,
        check_scope: 'sentences',
        markers: [15]
    },
    {
        name: "Вероятное мошенничество с перечислением",
        words: [
            {normalized: ["отправить"]},
            {text: ["мне", "мене", "нам"]},
            {normalized: ["деньга", "рубль"]}
        ],
        strict_word_sequence: false,
        strict_word_direction: false,
        check_scope: 'sentences',
        markers: [15]
    }
]
//Витя, отправь мне деньги на мою карту