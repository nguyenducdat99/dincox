import * as types from '../constands/ActionTypes';
var CategoryStore = JSON.parse(localStorage.getItem('categoryStore'));
const initialState = CategoryStore ? CategoryStore : [];

function s4() { 
    return Math.floor((1 + Math.random()) * 0x100000).toString(16).substring(1); 
} 
function s16() { 
    return s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() ;
} 

function findIndex(state, id) {
    let result= -1;
    state.forEach((item, index) => {
        if (item.id_category === id) {
            result = index;
        };
    });
    return result;
}

var CategoryReducer = (state=initialState,action) => {
    switch (action.type) {
        case types.LIST_CATEGORY:
            return state;
        case types.ADD_CATEGORY:
            if (action.payload.id_category === '') {
                action.payload.id_category = s16();
            }
            state.push(action.payload);
            localStorage.setItem('categoryStore',JSON.stringify(state));

            return [...state];
        case types.UPDATE_STATUS_CATEGORY:
            let index = findIndex(state,action.payload);
            
            state[index] = {
                ...state[index],
                status: !state[index].status
            }
            localStorage.setItem('categoryStore',JSON.stringify(state));

            return [...state];
        default:
            return state;
    }
}

export default CategoryReducer;
