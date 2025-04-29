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
