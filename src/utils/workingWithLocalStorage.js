const FAVORITY = 'favority';
const BIN = 'bin';

export function getFavorityProducts() {
    return JSON.parse(localStorage.getItem(FAVORITY)) || [];
};

export function getBinProducts() {
    return JSON.parse(localStorage.getItem(BIN)) || [];
};

export function setFavorityProducts(products) {
    localStorage.setItem(FAVORITY, JSON.stringify(products));
};

export function setBinProducts(products) {
    localStorage.setItem(BIN, JSON.stringify(products));
};
