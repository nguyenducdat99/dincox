import * as types from '../constands/ActionTypes'

let tasks = JSON.parse(localStorage.getItem('accountStore'));
const initialState = tasks ? tasks : [];

function s4() { 
    return Math.floor((1 + Math.random()) * 0x100000).toString(16).substring(1); 
  } 
function s16() { 
    return s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() ;
} 

function findIndex(state, id) {
    let result= -1;
    state.forEach((item, index) => {
        if (item.id_account === id) {
            result = index;
        };
    });
    return result;
}

var index;
var AccountReducer = (state=initialState, action) =>{
    switch (action.type) {
        case types.FECTH_ACCOUNT: 
            console.log(action.payload);
            
            return state;
        case types.LIST_ACCOUNT:

            return state;
        case types.SAVE_ACCOUNT:
            if (action.payload.id_account==='') {
                action.payload.id_account = s16();
                state.push(action.payload);
            }else{
                index = findIndex(state, action.payload.id_account);
                state[index] = action.payload;
            }
            
            localStorage.setItem('accountStore',JSON.stringify(state));

            return [...state];
        case types.UPDATE_STATUS_ACCOUNT:
            index = findIndex(state,action.payload);
            
            state[index] = {
                ...state[index],
                status: !state[index].status
            }
            localStorage.setItem('accountStore', JSON.stringify(state));

            return [...state];
        case types.DELETE_ACCOUNT:
            index = findIndex(state,action.payload);

            state.splice(index, 1);
            localStorage.setItem('accountStore', JSON.stringify(state));

            return [...state];
        default:
            return state;
    }
}

export default AccountReducer;