// import style library, components
import {connect} from 'react-redux';
import * as Actions from '../actions/Actions';
import * as Types from '../constants/ActionTypes';
import PropTypes from 'prop-types';
import Product from '../components/admin/products/Product';
import TaskForm from '../components/admin/products/taskform/TaskForm';
import TaskList from '../components/admin/products/tasklist/TaskList';
import TaskItem from '../components/admin/products/tasklist/TaskItem';
import TaskControl from '../components/admin/products/taskcontrol/TaskControl';
import QuantityForm from '../components/admin/products/quantityform/QuantityForm';
import ImageForm from '../components/admin/products/imagesform/ImagesForm';
import { useEffect, useState } from 'react';

// code function here
function ProductContainer(props){
    // get props
    const {
        items, 
        categories, 
        sizes, 
        onUpdateQuantity, 
        sizeDetails, 
        images, 
        onUpdateImage,
        onFetchImage,
        onCloseForm,
        onFetchApi,
        onClearItemEdit,
        onToggleForm,
        onSelectItemEdit,
        isDisplayForm,
        onUpdateSale,
        onUpdateStatus,
        onOpenForm,
        onDeleteItem,
        onSaveItem,
        itemEdit
    } = props;

    // declare state
    const [showQuantity,setShowQuantity] = useState(false);
    const [showImage,setShowImage] = useState(false);
    const [keyword, setKeyword] = useState('');
    const [sortType, setSortType] = useState('');

    // open Form Image 
    const openFormImage = () => {
        setShowImage(true);
    }

    // close Form Image
    const closeFormImage = () => {
        setShowImage(false);
    }
    
    // open form product quantity
    const openFormQuantity = () => {
        setShowQuantity(true);
    }
    
    // close form product quantity
    const closeFormQuantity = () => {
        setShowQuantity(false);
    }


    // load data
    useEffect( 
        () => {
            onFetchApi();
            onCloseForm();
            onFetchImage();
            // onOpenForm();
            // eslint-disable-next-line
        },[]
    )


    // return option category ui
    const optionCategoryUI = categories.map((element,index) => {
        return <option key={index} value={element.id_category}>{element.category_name}</option>
    })

    // return option sizes ui
    const optionSizeUI = sizes.map((element,index) => {
        return <option key={index} value={element.id_size}>{element.size_name}</option>
    })

    

    // return task form ui
    const taskForm = () =>{
        return (
            <TaskForm 
                itemEditRec={itemEdit}
                onClearItemEditRec={onClearItemEdit}
                onCloseFormRec={onCloseForm}
                onSaveItemRec={onSaveItem}
                optionCategoryUIRec={optionCategoryUI}
            />
        )
    };

    // return quantity form ui
    const quantityForm = () =>{
        return (
            <QuantityForm 
                onOpenQuantityForm={openFormQuantity}
                closeFormQuantityRec={closeFormQuantity}
                optionSizeUIRec={optionSizeUI}
                itemEditRec={itemEdit}
                onUpdateQuantityRec={onUpdateQuantity}
                sizeDetailsRec={sizeDetails}
            />
        )
    };

    // return image form ui
    const imageForm = () =>{
        return (
            <ImageForm 
                closeFormImageRec={closeFormImage}
                itemEditRec={itemEdit}
                onUpdateImageRec={onUpdateImage}
            />
        )
    };

    // filter items with keyword
    var itemsFilter = items.filter(
        element => {
            return element.product_name.toLowerCase().includes(keyword.toLowerCase())||
            element.price.toString().includes(keyword);
        } 
    )
    switch (sortType) {
        case Types.NAME_UP:
            itemsFilter.sort(sortNameUp);
            break;
        case Types.NAME_DOWN:
            itemsFilter.sort(sortNameDown);
            break;
        case Types.STATUS_TRUE:
            itemsFilter.sort(sortStatusTrue);
            break;
        case Types.STATUS_FALSE:
            itemsFilter.sort(sortStatusFalse);
            break;
        case Types.PRICE_UP:
            itemsFilter.sort(sortPriceUp);
            break;
        case Types.PRICE_DOWN:
            itemsFilter.sort(sortPriceDown);
            break;
        case Types.SALE_TRUE:
            itemsFilter.sort(sortSaleTrue);
            break;
        case Types.SALE_FALSE:
            itemsFilter.sort(sortSaleFalse);
            break;
        case Types.CATEGORY_GROUP:
            itemsFilter.sort(sortByCategory);
            break;
        default:
            
            break;
    }
    const listIndex = itemsFilter.map((item, index) => {
        return (
            <TaskItem 
                key={index}
                index={index+1} 
                itemRec={item}
                categoriesRec={categories}
                onDeleteItemRec={onDeleteItem}
                onCloseFormRec={onCloseForm}
                onSelectItemEditRec={onSelectItemEdit}
                onOpenFormRec={onOpenForm}
                onUpdateStatusRec={onUpdateStatus}
                onUpdateSaleRec={onUpdateSale}
                openFormQuantityRec={openFormQuantity}
                openFormImageRec={openFormImage}
                imagesRec={images}
            />
        )
    });// use for taskList

    // return list item in cart
    const taskList = () => {
        return (
            <TaskList
                listItem={listIndex}
            />
        )
    }

    // return ui task control
    const taskControlUI = () => {
        return (
            <TaskControl 
                onSearch={onSearch}
                onSort={onSort}
            />
        )
    }


    // handle when input keyword
    const onSearch = keyword => {
        setKeyword(keyword);
    }

    // handle when sort
    const onSort = type => {
        switch (type) {
            case Types.NAME_UP:
                setSortType(Types.NAME_UP);
                break;
            case Types.NAME_DOWN:
                setSortType(Types.NAME_DOWN);
                break;
            case Types.STATUS_TRUE:
                setSortType(Types.STATUS_TRUE);
                break;
            case Types.STATUS_FALSE:
                setSortType(Types.STATUS_FALSE);
                break;
            case Types.PRICE_UP:
                setSortType(Types.PRICE_UP);
                break;
            case Types.PRICE_DOWN:
                setSortType(Types.PRICE_DOWN);
                break;
            case Types.SALE_TRUE:
                setSortType(Types.SALE_TRUE);
                break;
            case Types.SALE_FALSE:
                setSortType(Types.SALE_FALSE);
                break;
            case Types.CATEGORY_GROUP:
                setSortType(Types.CATEGORY_GROUP);
                break;
            default:
                
                break;
        }
    }



    return(
        <Product
            isDisplayFormRec={isDisplayForm}
            onSelectItemEditRec={onSelectItemEdit}
            itemEditRec={itemEdit}
            onToggleFormRec={onToggleForm}
            taskFormRec={taskForm}
            taskListRec={taskList}
            onClearItemEditRec={onClearItemEdit}
            showQuantityRec={showQuantity}
            quantityFormRec={quantityForm}
            showImageRec={showImage}
            imageFormRec={imageForm}
            taskControlUI={taskControlUI}
        />
    );
}

ProductContainer.propTypes = {
    itemEdit: PropTypes.object,
    onSaveItem: PropTypes.func,
    onDeleteItem: PropTypes.func,
    onOpenForm: PropTypes.func,
    onUpdateStatus: PropTypes.func,
    onUpdateSale: PropTypes.func,
    isDisplayForm: PropTypes.bool,
    onSelectItemEdit: PropTypes.func,
    onToggleForm: PropTypes.func,
    onClearItemEdit: PropTypes.func,
    onFetchApi: PropTypes.func,
    onCloseForm: PropTypes.func,
    onFetchImage: PropTypes.func,
    onUpdateImage: PropTypes.func,
    images: PropTypes.array,
    sizeDetails: PropTypes.array,
    onUpdateQuantity: PropTypes.func,
    sizes: PropTypes.array,
    categories: PropTypes.array,
    items: PropTypes.array,
};


const mapStateToProps = state => {
    return {
        items: state.ListProduct,
        categories: state.listCategory,
        isDisplayForm: state.isDisplayForm,
        itemEdit: state.productEdit,
        sizes: state.listSize,
        sizeDetails: state.listSizeDetail,
        images: state.listImages
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onFetchApi : () => {
            dispatch(Actions.fetchCategoriesRequest());
        },
        onToggleForm: () => {
            dispatch(Actions.toggleForm());
        },
        onOpenForm: () => {
            dispatch(Actions.openForm());
        },
        onCloseForm: () => {
            dispatch(Actions.closeForm())
        },
        onSelectItemEdit: id => {
            dispatch(Actions.selectProductRequest(id));
        },
        onSaveItem: item => {
            dispatch(Actions.saveProductRequest(item));
        },
        onClearItemEdit: item => {
            dispatch(Actions.selectProduct(item));
        },
        onDeleteItem: id => {
            dispatch(Actions.deleteCategoryRequest(id));
        },
        onUpdateStatus: item => {
            dispatch(Actions.updateStatusProductRequest(item));
        },
        onUpdateSale: item => {
            dispatch(Actions.updateSaleProductRequest(item));
        },
        onUpdateQuantity: (item,type) => {
            dispatch(Actions.saveSizeDetailsRequest(item,type))
        },
        onFetchImage: () => {
            dispatch(Actions.fetchImageRequest());
        },
        onUpdateImage: item => {
            dispatch(Actions.saveImageRequest(item));
        }
    }
};


// custom sort 
const sortNameUp = (a,b) => {
    if (a.product_name > b.product_name) return 1;
    if (a.product_name < b.product_name) return -1;
    return 0;
}
const sortNameDown = (a,b) => {
    if (a.product_name > b.product_name) return -1;
    if (a.product_name < b.product_name) return 1;
    return 0;
}
const sortPriceUp = (a,b) => {
    if (a.price > b.price) return 1;
    if (a.price < b.price) return -1;
    return 0;
}
const sortPriceDown = (a,b) => {
    if (a.price > b.price) return -1;
    if (a.price < b.price) return 1;
    return 0;
}
const sortStatusFalse = (a,b) => {
    if (a.status > b.status) return 1;
    if (a.status < b.status) return -1;
    return 0;
}
const sortStatusTrue = (a,b) => {
    if (a.status > b.status) return -1;
    if (a.status < b.status) return 1;
    return 0;
}
const sortSaleTrue = (a,b) => {
    if (a.is_sale > b.is_sale) return -1;
    if (a.is_sale < b.is_sale) return 1;
    return 0;
}
const sortSaleFalse = (a,b) => {
    if (a.is_sale > b.is_sale) return 1;
    if (a.is_sale < b.is_sale) return -1;
    return 0;
}
const sortByCategory = (a,b) => {
    if (a.id_category > b.id_category) return 1;
    if (a.id_category < b.id_category) return -1;
    return 0;
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductContainer)