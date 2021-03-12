import { combineReducers } from 'redux';
import ListProduct from './ProductReducer';
import ListNew from './NewReducer';
import ListAccount from './AccountReducer';
import listCategory from './CategoriesReducer';
import isDisplayForm from './FormReducer';
import accountEdit from './AccountEditReducer';
import cart from './CartReducer';
import loginedAccount from './AccountLoginReducer';
import categoryEdit from './CategoryEditReducer';
import sizeEdit from './SizeEditReducer';
import listSize from './SizesReducer';

const Reducers = combineReducers({
    ListProduct,
    ListNew,
    ListAccount,
    listCategory,
    listSize,
    isDisplayForm,
    accountEdit,
    cart,
    loginedAccount,
    categoryEdit,
    sizeEdit
});

export default Reducers;