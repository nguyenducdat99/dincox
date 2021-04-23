import * as types from '../constants/ActionTypes'

const initialState =  [];


const MyReducer = (state=initialState, action) =>{
    const payload = action.payload;

    switch (action.type) {
        case types.FETCH_SALE_DETAILS:
            state = [...payload.data];
            
            return [...state];
        case types.SAVE_SALE_DETAIL:
            
            state = [...payload]
            
            return [...state] 
        default:
            return state;
    }
}


export default MyReducer;