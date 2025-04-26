const initialState = {
    products: [
        { id: 1, title: 'title 1', price: 1470, count: 5 },
        { id: 2, title: 'title 2', price: 1470, count: 5 },
        { id: 3, title: 'title 3', price: 1470, count: 5 },
        { id: 4, title: 'title 4', price: 1470, count: 5 },
        { id: 5, title: 'title 5', price: 1470, count: 5 },
        { id: 6, title: 'title 6', price: 1470, count: 5 },
        { id: 7, title: 'title 7', price: 1470, count: 5 }
    ]
};

const binReducer = (state = initialState, action) => {
    switch(action.type) {
    default:
        return state;
    }
};

export default binReducer;
