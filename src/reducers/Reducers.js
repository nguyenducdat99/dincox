import { combineReducers } from 'redux';
import ListProduct from './ProductReducer';
import ListNew from './NewReducer';
import ListAccount from './AccountReducer';
import listCategory from './CategoriesReducer';
import isDisplayForm from './FormReducer';

const Reducers = combineReducers({
    ListProduct,
    ListNew,
    ListAccount,
    listCategory,
    isDisplayForm
});

export default Reducers;