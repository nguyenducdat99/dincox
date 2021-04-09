// import style library, components
import {connect} from 'react-redux';
import App from '../App';
import PropTypes from 'prop-types';

// code function here
function AppContainer(props){
    // get props
    const { 
        loginedAccount
    } = props;

    // return login ui
    return(
        <App 
            loginedAccount={loginedAccount}
        />
    );
}

AppContainer.propTypes = {
    loginedAccount: PropTypes.object
}

const mapStateToProps = state => {
    return {
        loginedAccount: state.loginedAccount
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(AppContainer)