// import style library, components
import {connect} from 'react-redux';
import * as Actions from '../actions/Actions';
import Register from '../components/account/register/Register';

// code function here
function AccountRegisterContainer(props){
    // get props
    const {
        onRegisterAccount
    } = props;

    // return login ui
    return(
        <Register 
            onRegisterAccount={onRegisterAccount}
        />
    );
}

const mapStateToProps = state => {
    return {
        
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