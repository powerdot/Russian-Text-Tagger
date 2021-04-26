module.exports = [
    {
        name: "Предательство Российской Федерации",
        words: [
            {text: ["рашку", "рф", "россию", "расию", "рассию"]},
            {normalized: ["предать"]},
        ],
        check_scope: 'sentences',
        strict_word_direction: true,
        markers: [16]
    },
    {
        name: "Закручивание гаек невозможно в демократическом обществе - Клевета!",
        words: [
            {normalized: ["гайка"]},
            {normalized: ["закручивать"]},
        ],
        check_scope: 'sentences',
        strict_word_direction: true,
        markers: [8]
    },
    {
        name: "Что значит героям слава?!",
        words: [
            {normalized: ["герой"]},
            {normalized: ["слава"]},
        ],
        check_scope: 'sentences',
        strict_word_sequence: true,
        markers: [16, 17, 10]
    }
]

// strict_word_sequence: false,
// strict_word_direction: true,