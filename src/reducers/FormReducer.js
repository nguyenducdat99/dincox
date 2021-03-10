import * as types from '../constands/ActionTypes';
const initialState = false;

var FormReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_FORM:

            return !state;
        case types.OPEN_FORM:
            return true;
        case types.CLOSE_FORM:
            return false;
        default:
            return state;
    }
}

export default FormReducer;