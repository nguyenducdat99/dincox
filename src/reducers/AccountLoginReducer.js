import * as types from "../constands/ActionTypes";
import jwt from 'jwt-decode';

const initialState = {
    id_account: 37,
    user_name: '',
    position: -1,
    message: 'Đã Đăng xuất'
}


var myReducer = (state=initialState, action) => {
    const payload = action.payload;

    switch (action.type) {
        case types.LOGIN_ACCOUNT:
            alert(payload.message+'\nTrang web sẽ chuyển hướng sau 1s.');

            if (payload.code*1 === 200) {
                const user = jwt(payload.data.token);
                state = {
                    ...state,
                    id_account: user.id_account,
                    user_name: user.user_name,
                    position: user.position,
                    message: payload.message
                }
                localStorage.setItem('token',payload.data.token);

                setTimeout(
                    () => {
                        window.location = '/';
                    },1000
                )
            }

            return state;
        
        case types.LOGOUT_ACCOUNT:
            alert(initialState.message+'\nTrang web sẽ chuyển hướng sau 1s.');
            
            state = {...initialState};
            localStorage.setItem('token','');
            setTimeout(
                () => {
                    window.location = '/';
                },1000
            )

            return {...state}
        case types.REGISTER_ACCOUNT:
            if (payload.code*1===200) {
                alert(payload.message);
                window.location = '/account/login';
            }
            if (payload.code*1===401) alert(payload.message);

            return state;
        default:
            return state;
    }
}

export default myReducer;