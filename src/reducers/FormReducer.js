import * as types from '../constands/ActionTypes';
const initialState = false;

var FormReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_FORM:

            return !state;
        case types.CLOSE_FORM:
            state = false;

            return state;
        default:
            return state;
    }
}

export default FormReducer;