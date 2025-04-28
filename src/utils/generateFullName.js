function generateFullName(surname, name, patronymic) {
    return `${surname} ${name.at(0)}. ${patronymic && patronymic.at(0)}.`;
};

export default generateFullName;
