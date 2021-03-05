import { combineReducers } from 'redux';
import ListProduct from './ProductReducer';
import ListNew from './NewReducer';
import ListAccount from './AccountReducer';
import listCategory from './CategoriesReducer';

const Reducers = combineReducers({
    ListProduct,
    ListNew,
    ListAccount,
    listCategory
});

export default Reducers;