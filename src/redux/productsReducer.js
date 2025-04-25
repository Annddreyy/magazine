const SET_FAVORITY = 'SET_FAVORITY';

const initialState = {
    products: [
        { id: 1, title: 'title1', imgSrc: null, price: 1300, grade: 4, status: 'Хит продаж!', favority: true  },
        { id: 2, title: 'title2', imgSrc: null, price: 400, grade: 3, status: 'Скидка!', favority: false  },
        { id: 3, title: 'title3', imgSrc: null, price: 1500, grade: 2, status: 'Новинка!', favority: true  },
        { id: 4, title: 'title4', imgSrc: null, price: 800, grade: 5, status: '', favority: false  },
        { id: 5, title: 'title5', imgSrc: null, price: 200, grade: 1, status: '', favority: false }
    ]
};

const productsReducer = (state = initialState, action) => {
    switch(action.type) {
    case SET_FAVORITY:
        return {
            ...state,
            products: state.products.map(product => {
                if (product.id == action.productId) {
                    product.favority = !product.favority;
                }
            })
        };
    default:
        return state;
    }
};

export const setFavorityStatus = (productId) => ({ type: SET_FAVORITY, productId });

export default productsReducer;
