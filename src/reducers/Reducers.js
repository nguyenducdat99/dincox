import { combineReducers } from 'redux';
import ListProduct from './ProductReducer';
import ListNew from './NewReducer';
import ListAccount from './AccountReducer';
import listCategory from './CategoriesReducer';
import isDisplayForm from './FormReducer';
import accountEdit from './AccountEditReducer';
import cart from './CartReducer';
import loginedAccount from './AccountLoginReducer';


const Reducers = combineReducers({
    ListProduct,
    ListNew,
    ListAccount,
    listCategory,
    isDisplayForm,
    accountEdit,
    cart,
    loginedAccount
});

export default Reducers;