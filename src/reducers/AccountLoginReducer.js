import * as types from "../constands/ActionTypes";
const initialState = {
    id_account: 37,
    user_name: '',
    position: -1,
    message: 'Đã Đăng xuất'
}


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

var myReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.LOGIN_ACCOUNT:
            alert(action.payload.message);

            if (action.payload.token!=='') {
                    
                    state = {
                        ...state,
                        id_account: action.payload.id_account,
                        user_name: action.payload.user_name,
                        position: action.payload.position
                    }
                    setCookie('logined',action.payload.token,1);
                    window.location = '/';
            }

            return state;
        default:
            return state;
    }
}

export default myReducer;