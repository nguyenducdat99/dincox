import * as types from '../constands/ActionTypes'

let tasks = JSON.parse(localStorage.getItem('tasks'));

const initialState = tasks ? tasks : [];

var ListAccount = (status=initialState, action) =>{
    switch (action.type) {
        case types.LIST_ACCOUNT:
            return status;
        default:
            return status;
    }
}

export default ListAccount;