import { combineReducers } from 'redux';
import ListProduct from './ListProduct';
import ListNew from './ListNew';
import ListAccount from './ListAccount';

const Reducers = combineReducers({
    ListProduct,
    ListNew,
    ListAccount
});

export default Reducers;