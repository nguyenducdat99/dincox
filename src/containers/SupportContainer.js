// import style library, components
import {connect} from 'react-redux';
import Support from '../components/support/Support';

// code function here
function SupportContainer(props){
 
    // get props
    var { liveAccount,isActiveScroll } = props;

    return(
        <Support 
            liveAccountRec={liveAccount}  
            isActiveScroll={isActiveScroll}
        />
    );
}


const mapStateToProps = state => {
    return {
        liveAccount: state.loginedAccount
    }
};
const mapDispatchToProps = (dispatch,props) => {
    return {
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(SupportContainer)