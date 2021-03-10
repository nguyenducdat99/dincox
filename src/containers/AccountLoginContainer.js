// import style library, components
import {connect} from 'react-redux';
import * as Actions from '../actions/Actions';
import Login from '../components/account/login/Login';

// code function here
function AccountLoginReducer(props){
    // declare state

    return(
        <Login 
            onLoginAccountRec={props.onLoginAccount}
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
export default connect(mapStateToProps,mapDispatchToProps)(AccountLoginReducer)