import { combineReducers } from 'redux';
import ListProduct from './ProductReducer';
import listArticle from './ArticleReducer';
import ListAccount from './AccountReducer';
import listCategory from './CategoriesReducer';
import isDisplayForm from './FormReducer';
import accountEdit from './AccountEditReducer';
import cart from './CartReducer';
import loginedAccount from './AccountLoginReducer';
import categoryEdit from './CategoryEditReducer';
import sizeEdit from './SizeEditReducer';
import listSize from './SizesReducer';
import listSizeDetail from './SizeDetailsReducer';
import productEdit from './ProductEditReducer';
import listImages from './ImageReducer';
import infoCheckout from './CheckoutReducer';

const Reducers = combineReducers({
    ListProduct,
    listArticle,
    ListAccount,
    listCategory,
    listSize,
    isDisplayForm,
    accountEdit,
    cart,
    productEdit,
    loginedAccount,
    categoryEdit,
    sizeEdit,
    listSizeDetail,
    listImages,
    infoCheckout
});

export default Reducers;