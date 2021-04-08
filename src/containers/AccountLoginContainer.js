// import style library, components
import {connect} from 'react-redux';
import * as Actions from '../actions/Actions';
import Login from '../components/account/login/Login';
import PropTypes from 'prop-types';


// code function here
function AccountLoginContainer(props){
    // get props
    const { 
        onLoginAccount,
        loginedAccount
    } = props;

    // return login ui
    return(
        <Login 
            onLoginAccountRec={onLoginAccount}
            loginedAccount={loginedAccount}
        />
    );
}

AccountLoginContainer.propTypes = {
    onLoginAccount: PropTypes.func,
    loginedAccount: PropTypes.object
}

const mapStateToProps = state => {
    return {
        loginedAccount: state.loginedAccount
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onLoginAccount: account => {
            dispatch(Actions.loginAccountRequest(account));
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(AccountLoginContainer)