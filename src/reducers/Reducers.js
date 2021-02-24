import { combineReducers } from 'redux';
import ListProduct from './ListProduct';
import ListNew from './ListNew';

const Reducers = combineReducers({
    ListProduct,
    ListNew
});

export default Reducers;