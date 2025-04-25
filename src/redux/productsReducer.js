const initialState = {
    products: [
        { id: 1, title: 'title1', price: 1300, grade: 4, status: 'Хит продаж!', favority: true  },
        { id: 2, title: 'title2', price: 400, grade: 3, status: 'Скидка!', favority: false  },
        { id: 3, title: 'title3', price: 1500, grade: 2, status: 'Новинка!', favority: true  },
        { id: 4, title: 'title4', price: 800, grade: 5, status: '', favority: false  },
        { id: 5, title: 'title5', price: 200, grade: 1, status: '', favority: false }
    ]
};

const productsReducer = (state = initialState, action) => {
    switch(action.type) {
    default:
        return state;
    }
};

export default productsReducer;
