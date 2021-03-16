// import style library, components
import {connect} from 'react-redux';
import * as Actions from '../actions/Actions';
import Product from '../components/admin/products/Product';
import TaskForm from '../components/admin/products/taskform/TaskForm';
import TaskList from '../components/admin/products/tasklist/TaskList';
import TaskItem from '../components/admin/products/tasklist/TaskItem';
import QuantityForm from '../components/admin/products/quantityform/QuantityForm'
import ImageForm from '../components/admin/products/imagesform/ImagesForm';
import { useEffect, useState } from 'react';

// code function here
function ProductContainer(props){
    // declare state
    const [showQuantity,setShowQuantity] = useState(false);
    const [showImage,setShowImage] = useState(false);

    // open Form Image 
    var openFormImage = () => {
        setShowImage(true);
    }

    // close Form Image
    var closeFormImage = () => {
        setShowImage(false);
    }
    
    // open form product quantity
    var openFormQuantity = () => {
        setShowQuantity(true);
    }
    
    // close form product quantity
    var closeFormQuantity = () => {
        setShowQuantity(false);
    }


    // load data
    useEffect( 
        () => {
            props.onFetchApi();
            props.onCloseForm();
            props.onFetchImage();
            // props.onOpenForm();
            // eslint-disable-next-line
        },[]
    )

    // get props
    const {items, categories, sizes, onUpdateQuantity, sizeDetails, images, onUpdateImage} = props;

    // return option category ui
    var optionCategoryUI = categories.map((element,index) => {
        return <option key={index} value={element.id_category}>{element.category_name}</option>
    })

    // return option sizes ui
    var optionSizeUI = sizes.map((element,index) => {
        return <option key={index} value={element.id_size}>{element.size_name}</option>
    })

    

    // return task form ui
    var taskForm = () =>{
        return (
            <TaskForm 
                itemEditRec={props.itemEdit}
                onClearItemEditRec={props.onClearItemEdit}
                onCloseFormRec={props.onCloseForm}
                onSaveItemRec={props.onSaveItem}
                optionCategoryUIRec={optionCategoryUI}
            />
        )
    };

    // return quantity form ui
    var quantityForm = () =>{
        return (
            <QuantityForm 
                onOpenQuantityForm={openFormQuantity}
                closeFormQuantityRec={closeFormQuantity}
                optionSizeUIRec={optionSizeUI}
                itemEditRec={props.itemEdit}
                onUpdateQuantityRec={onUpdateQuantity}
                sizeDetailsRec={sizeDetails}
            />
        )
    };

    // return image form ui
    var imageForm = () =>{
        return (
            <ImageForm 
                closeFormImageRec={closeFormImage}
                itemEditRec={props.itemEdit}
                onUpdateImageRec={onUpdateImage}
            />
        )
    };

    // return list item in cart
    var listIndex = items.map((item, index) => {
        return (
            <TaskItem 
                key={index}
                index={index+1} 
                itemRec={item}
                categoriesRec={categories}
                onDeleteItemRec={props.onDeleteItem}
                onCloseFormRec={props.onCloseForm}
                onSelectItemEditRec={props.onSelectItemEdit}
                onOpenFormRec={props.onOpenForm}
                onUpdateStatusRec={props.onUpdateStatus}
                onUpdateSaleRec={props.onUpdateSale}
                openFormQuantityRec={openFormQuantity}
                openFormImageRec={openFormImage}
                imagesRec={images}
            />
        )
    });// use for taskList

    // return list item in cart
    var taskList = () => {
        return (
            <TaskList
                listItem={listIndex}
            />
        )
    }// use for categories

    return(
        <Product
            isDisplayFormRec={props.isDisplayForm}
            onSelectItemEditRec={props.onSelectItemEdit}
            itemEditRec={props.itemEdit}
            onToggleFormRec={props.onToggleForm}
            taskFormRec={taskForm}
            taskListRec={taskList}
            onClearItemEditRec={props.onClearItemEdit}
            showQuantityRec={showQuantity}
            quantityFormRec={quantityForm}
            showImageRec={showImage}
            imageFormRec={imageForm}
        />
    );
}

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
export default connect(mapStateToProps,mapDispatchToProps)(ProductContainer)