
// let banned_orgs = require("../../banned_organizations")();

module.exports = [
    ...require("./_bad_words"), // Мат, оскорбления и рассизм
    ...require("./_god"), // Упоминание Бога
    ...require("./_governance"), // Упоминание власти
    ...require("./_banned_orgs"), // Упоминание плохих организаций
    ...require("./_drugs"), // Упоминание наркотиков
    ...require("./_anti_russian"), // добавить измену родине
    ...require("./_fraud"), // добавить вымогательство и мошеничество
    ...require("./_propaganda"), // пропаганда в т.ч. ЛГБТ
    // оскорбление ветеранов
    // разделение на мат и оскорбление (хуесос != дурак)
    ...require("./_threat"), // нанесение вреда и угроза убийства
];