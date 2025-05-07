export const requiredField = value => {
    if (value) return undefined;
    return 'Поле обязательное';
};

export const minLengthCreator = (minLength) => (value) => {
    if (value && value.length < minLength) {
        return `Минимальная длина: ${minLength} символов`;
    }
    return undefined;
};

export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length < maxLength) {
        return `Максимальная длина: ${maxLength} символов`;
    }
    return undefined;
};

export const minValue = value => {
    if (value && value <= 0) {
        return 'Манимальное значение: 1';
    }
    return undefined;
};

export const correctPassword = value => {
    let passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (passwordRegex.test(value)) {
        return undefined;
    }
    else {
        return 'Пароль должен содержать 1 цифру, 1 строчную и 1 заглавную латинскую букву, а также специальный символ из набора "#?!@$%^&*-"';
    }
};
