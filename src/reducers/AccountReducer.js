import * as types from '../constands/ActionTypes'

let tasks = JSON.parse(localStorage.getItem('accountStore'));
const initialState = tasks ? tasks : [];

var AccountReducer = (state=initialState, action) =>{
    switch (action.type) {
        case types.LIST_ACCOUNT:
            return state;
        case types.ADD_ACCOUNT:
            state.push(action.newAccount);
            localStorage.setItem('accountStore',JSON.stringify(state));

            return [...state];
        default:
            return state;
    }
}

export default AccountReducer;