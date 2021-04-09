// import style library, components
import {connect} from 'react-redux';
import * as Actions from '../actions/Actions';
import Register from '../components/account/register/Register';
import PropTypes from 'prop-types';


// code function here
function AccountRegisterContainer(props){
    // get props
    const {
        onRegisterAccount,
        loginedAccount
    } = props;

    // return login ui
    return(
        <Register 
            onRegisterAccount={onRegisterAccount}
            loginedAccount={loginedAccount}
        />
    );
}

AccountRegisterContainer.propTypes = {
    onRegisterAccount: PropTypes.func,
    loginedAccount: PropTypes.object
}


const mapStateToProps = state => {
    return {
        loginedAccount: state.loginedAccount
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onRegisterAccount: data => {
            dispatch(Actions.registerAccountRequest(data))
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(AccountRegisterContainer)