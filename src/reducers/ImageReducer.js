import * as types from '../constants/ActionTypes'

const initialState =  [];


var MyReducer = (state=initialState, action) =>{
    const payload = action.payload;

    switch (action.type) {
        case types.FETCH_IMAGES:
            state = payload;

            return [...state];
        case types.SAVE_IMAGES:
            
            state.push(payload);

            return [...state] 
        default:
            return state;
    }
}

export default MyReducer;