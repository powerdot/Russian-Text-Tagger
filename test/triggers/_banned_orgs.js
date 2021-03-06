let array = [
    {
        name: "Упоминание экстримиской организации",
        words: [
            {
                text: [
                    "ауе", // организация ликвидирована или запрещена на территории Российской Федерации
                    "игил", // организация ликвидирована или запрещена на территории Российской Федерации
                    "аль-каида", // организация ликвидирована или запрещена на территории Российской Федерации
                    "алькаида", // организация ликвидирована или запрещена на территории Российской Федерации
                    "братья-мусульмане", // организация ликвидирована или запрещена на территории Российской Федерации
                    "талибан", // организация ликвидирована или запрещена на территории Российской Федерации
                    "талебан", // организация ликвидирована или запрещена на территории Российской Федерации
                    "аль-джихад", // организация ликвидирована или запрещена на территории Российской Федерации
                    "алджихад", // организация ликвидирована или запрещена на территории Российской Федерации
                    "муджахеды", // организация ликвидирована или запрещена на территории Российской Федерации
                    "муджахед", // организация ликвидирована или запрещена на территории Российской Федерации
                    "синрике", // организация ликвидирована или запрещена на территории Российской Федерации
                    "фбк", // организация ликвидирована или запрещена на территории Российской Федерации
                    "национал-большевистская", // организация ликвидирована или запрещена на территории Российской Федерации
                    "формат-18", // организация ликвидирована или запрещена на территории Российской Федерации
                    "формат18", // организация ликвидирована или запрещена на территории Российской Федерации
                    "bandh", // организация ликвидирована или запрещена на территории Российской Федерации
                    "тойс", // организация ликвидирована или запрещена на территории Российской Федерации
                    "ревтатпод", // организация ликвидирована или запрещена на территории Российской Федерации
                    "втоц", // организация ликвидирована или запрещена на территории Российской Федерации
                ]
            }
        ],
        check_scope: 'all',
        markers: [10]
    },
    {
        name: "Упоминание экстримиской организации",
        words: [
            {text: "братья"},
            {text: "мусульмане"}
        ],
        strict_word_sequence: true,
        check_scope: 'all',
        markers: [10]
    },
    {
        name: "Упоминание экстримиской организации",
        words: [
            {text: "аль"},
            {text: "каида"}
        ],
        strict_word_sequence: true,
        check_scope: 'all',
        markers: [10]
    },
    {
        name: "Упоминание экстримиской организации",
        words: [
            {text: "исламское"},
            {text: "государство"}
        ],
        strict_word_sequence: true,
        check_scope: 'all',
        markers: [10]
    },
    {
        name: "Упоминание экстримиской организации",
        words: [
            {text: "имарат"},
            {text: "кавказ"}
        ],
        strict_word_sequence: true,
        check_scope: 'all',
        markers: [10]
    },
    {
        name: "Упоминание экстримиской организации",
        words: [
            {text: "правый"},
            {text: "сектор"}
        ],
        strict_word_sequence: true,
        check_scope: 'all',
        markers: [10]
    },
    {
        name: "Упоминание экстримиской организации",
        words: [
            {text: "фонд"},
            {text: "борьбы"},
            {text: "коррупцией"}
        ],
        strict_word_sequence: true,
        check_scope: 'all',
        markers: [10]
    },
    {
        name: "Упоминание экстримиской организации",
        words: [
            {text: "украинская"},
            {text: "повстанческая"},
            {text: "армия"}
        ],
        strict_word_sequence: true,
        check_scope: 'all',
        markers: [10]
    },
    {
        name: "Упоминание экстримиской организации",
        words: [
            {text: "благородный"},
            {text: "орден"},
            {text: "дьявола"}
        ],
        strict_word_sequence: true,
        check_scope: 'all',
        markers: [10]
    },
    {
        name: "Упоминание экстримиской организации",
        words: [
            {text: "кровь"},
            {text: "и"},
            {text: "честь"}
        ],
        strict_word_sequence: true,
        check_scope: 'all',
        markers: [10]
    },
    {
        name: "Упоминание экстримиской организации",
        words: [
            {text: "свидетели"},
            {text: "иеговы"}
        ],
        strict_word_sequence: true,
        check_scope: 'all',
        markers: [10]
    },
    {
        name: "Упоминание экстримиской организации",
        words: [
            {text: "misanthropic"},
            {text: "division"}
        ],
        strict_word_sequence: true,
        check_scope: 'all',
        markers: [10]
    },
    {
        name: "Упоминание экстримиской организации",
        words: [
            {text: "мизантропик"},
            {text: "дивижн"}
        ],
        strict_word_sequence: true,
        check_scope: 'all',
        markers: [10]
    },
    {
        name: "Упоминание экстримиской организации",
        words: [
            {text: "мечеть"},
            {text: "мирмамеда"}
        ],
        strict_word_sequence: true,
        check_scope: 'all',
        markers: [10]
    },
    {
        name: "Упоминание экстримиской организации",
        words: [
            {text: "таблиги"},
            {text: "джамаат"}
        ],
        strict_word_sequence: true,
        check_scope: 'all',
        markers: [10]
    },
    {
        name: "Упоминание экстримиской организации",
        words: [
            {text: "ал"},
            {text: "джихад"}
        ],
        strict_word_sequence: true,
        check_scope: 'all',
        markers: [10]
    },
    {
        name: "Опасная формулировка",
        words: [
            {text: ["это", "просто"]},
            {text: ["бомба", "взрыв"]}
        ],
        strict_word_direction: true,
        check_scope: 'sentences',
        markers: [14]
    },
    {
        name: "Опасная формулировка",
        words: [
            {text: "взрыв"},
            {text: ["мозга"]}
        ],
        strict_word_direction: true,
        check_scope: 'sentences',
        markers: [14]
    },
    {
        name: "Очень опасная формулировка",
        words: [
            {text: ["обожаю", "люблю", "лайкаю", "лайкать", "поддерживаю", "пдерживаю"]},
            {text: ["террор", "терроризм", "террористов", "террориста","терраризм", "терраристов", "террариста", "терор", "тероризм", "терористов", "терориста"]}
        ],
        strict_word_direction: true,
        check_scope: 'sentences',
        markers: [14, 17, 6]
    },
    {
        name: "Есть солово - взорвем",
        words: [
            {text: ["взорву", "взорвем"]}
        ],
        strict_word_direction: true,
        check_scope: 'sentences',
        markers: [14]
    }
];

module.exports = array;