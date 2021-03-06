import { combineReducers } from 'redux';
import ListProduct from './ProductReducer';
import ListNew from './NewReducer';
import ListAccount from './AccountReducer';
import listCategory from './CategoriesReducer';
import isDisplayForm from './FormReducer';
import accountEdit from './AccountEditReducer';

const Reducers = combineReducers({
    ListProduct,
    ListNew,
    ListAccount,
    listCategory,
    isDisplayForm,
    accountEdit
});

export default Reducers;