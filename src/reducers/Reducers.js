import { combineReducers } from 'redux';
import { listProduct } from '../actions/Actions';
import ListProduct from './ListProduct';

const Reducers = combineReducers({
    ListProduct
});

export default Reducers;