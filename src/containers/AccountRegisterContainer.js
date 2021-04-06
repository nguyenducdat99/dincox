// import style library, components
import {connect} from 'react-redux';
import * as Actions from '../actions/Actions';
import Login from '../components/account/login/Login';

// code function here
function AccountRegisterContainer(props){
    // get props
    const { onLoginAccount } = props;

    // return login ui
    return(
        <Login 
            onLoginAccountRec={onLoginAccount}
        />
    );
}

const mapStateToProps = state => {
    return {
        
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onLoginAccount: account => {
            dispatch(Actions.loginAccountRequest(account));
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(AccountRegisterContainer)