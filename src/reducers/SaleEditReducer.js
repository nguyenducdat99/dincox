import * as types from "../constants/ActionTypes";
const initialState = {
    id_sale: -1,
    sale_name: '',
    created_at: null,
    edited_at: null,
    start_at: formatDateForInput(),
    end_at: formatDateForInput(),
    status: 0
};

var myReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.SALE_EDIT:
			state = action.payload

            return {...state};
		
        default:
            return state;
    }
}


function formatDateForInput() {
    const d = new Date();
    let isoDate = d.toISOString();
    let splitDate = isoDate.split('T')
    
    return splitDate[0];
}

export default myReducer;