import * as types from "../constands/ActionTypes";
const initialState = [];

var myReducer = (state=initialState, action) => {
    const payload = action.payload;

    switch (action.type) {
        case types.FETCH_SALES:

        state = [...payload]

            return [...payload];
		
        case types.FILTER_SALES:

            console.log(payload);
            const saleCopy = [...state];
            state = saleCopy.filter(
                element => {
                    return element.sale_name.includes(payload);
                } 
            )

            console.log(state);

        default:
            return state;
    }
}

export default myReducer;