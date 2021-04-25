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
    }
]

// strict_word_sequence: false,
// strict_word_direction: true,