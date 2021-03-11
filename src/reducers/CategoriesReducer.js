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

var index = -1;
var MyReducer = (state=initialState, action) =>{
    switch (action.type) {
        case types.FETCH_CATEGORIES:
            state = action.payload;
            
            return state;
        default:
            return state;
    }
}

export default MyReducer;