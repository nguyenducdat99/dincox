import * as types from "../constands/ActionTypes";
const initialState = ""

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

var myReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.LOGIN_ACCOUNT:
            if (action.payload.token!=='') {
                state = action.payload.user_name
                setCookie('logined',action.payload.token,1);
            }

            return state;
        default:
            return state;
    }
}

export default myReducer;