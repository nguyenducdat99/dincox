import * as types from "../constants/ActionTypes";
const initialState = [];



var myReducer = (state=initialState, action) => {
    const payload = action.payload;

    switch (action.type) {
        case types.FETCH_SALES:

            state = [...payload]

            return [...state];
		case types.SAVE_SALE:
            const index = findIndex(state,payload.id_sale);
            
            if (index === -1) {
                state.push(payload);
            }
            if(index !== - 1) {
                state[index] = {
                    ...state[index],
                    sale_name: payload.sale_name,
                    start_at: payload.start_at,
                    end_at: payload.end_at,
                    status: payload.status
                }
            }

            
            return [...state];
        default:
            return state;
    }
}

const findIndex = (array, id) => {
    let result = -1;
    array.forEach((element, index) => {
        if (element.id_sale*1===id*1) result = index;
    });

    return result;
}

export default myReducer;