import * as types from '../constants/ActionTypes'

const initialState =  [];


var index = -1;

const MyReducer = (state=initialState, action) =>{
    switch (action.type) {
        case types.FETCH_CATEGORIES:
            state = action.payload;

            return [...state];
        case types.SAVE_CATEGORY:
            index = findIndex(state,action.payload.id_category);
            // console.log(action.payload);
            // console.log(index);
            if (index === -1) {
                state.push(action.payload);
            }else{
                state[index] = action.payload;
            }

            return [...state] 
        case types.UPDATE_STATUS_CATEGORY:
            index = findIndex(state,action.payload);
            if (index !== -1 ) {
                state[index] = {
                    ...state[index],
                    status: (state[index].status*1===1)?0:1
                }
            }

            return [...state]
        case types.DELETE_CATEGORY:
            index = findIndex(state, action.payload);
            
            state.splice(index,1);

            return [...state];
        default:
            return state;
    }
}

function findIndex(state, id) {
    var result= -1;
    state.forEach((item, index) => {

        if (item.id_category*1 === id*1) {
            result = index; 
        };
    });
    return result;
}

export default MyReducer;