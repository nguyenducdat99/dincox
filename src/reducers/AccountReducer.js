import * as types from '../constands/ActionTypes'

const initialState =  [];


function findIndex(state, id) {
    var result= -1;
    state.forEach((item, index) => {

        if (item.id_account*1 === id*1) {
            result = index; 
        };
    });
    return result;
}

var index;
var AccountReducer = (state=initialState, action) =>{
    switch (action.type) {
        case types.FECTH_ACCOUNT: 
            state = action.payload;
            
            return state;
        case types.LIST_ACCOUNT:

            return state;
        case types.SAVE_ACCOUNT:
            index = findIndex(state,action.payload.id_account);

            if (index===-1) {
                state.push(action.payload);
            }else{
                state[index] = action.payload;
            }

            return [...state];
        case types.UPDATE_STATUS_ACCOUNT:
            index = findIndex(state,action.payload);
            
            state[index] = {
                ...state[index],
                status: !state[index].status
            }

            return [...state];
        case types.DELETE_ACCOUNT:
            index = findIndex(state,action.payload);

            state.splice(index, 1);
            return [...state];
        default:
            return state;
    }
}

export default AccountReducer;