import * as types from '../constands/ActionTypes';
var CategoryStore = JSON.parse(localStorage.getItem('categoryStore'));
const initialState = CategoryStore ? CategoryStore : [];

var CategoryReducer = (state=initialState,action) => {
    switch (action.type) {
        case types.LIST_CATEGORY:
            return state;
        case types.ADD_CATEGORY:
            state.push(action.payload);
            localStorage.setItem('categoryStore',JSON.stringify(state));
            return [...state];
        default:
            return state;
    }
}

export default CategoryReducer;
