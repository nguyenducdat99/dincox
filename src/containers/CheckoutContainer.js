// import style library, components
import {connect} from 'react-redux';
import Checkout from '../components/checkout/Checkout';
import * as Actions from '../actions/Actions';

function findSizeName(items, id_size) {
    let result = "";
    items.forEach(element => {
        if (element.id_size===id_size) result = element.size_name
    });

    return result;
}

function findImages(items,id) {
    let result = [];

    items.sort(function(a, b){return b.id_image - a.id_image})

    items.forEach(element => {
        if (element.id_product*1 === id*1) result.push(element.path);
    });

    return result;
}

function totalAmount(cart){
    let result = 0;
    cart.forEach((item, index) => {
        const discount = 25;
        const factor = ((100-discount)/100);
        if (item.product.is_sale) {
            result += item.product.price*item.quantity*factor;
        }else{
            result += item.product.price*item.quantity;
        } 
    });   
    
    return result;
}

// code function here
function CheckoutContainer(props){
 
    // get props
    var { onAddInfoCheckout, info, cart, images, sizes, onAddCheckout, sizeDetails, loginedAccount} = props;

    // return list item ui
    var listItem = cart.map(
        (element, index) => {
            // get size name
            let sizeName= findSizeName(sizes, element.size);
            
            // get path
            let path = findImages(images, element.product.id_product);
            
            // convert path
            path = 'http://localhost:8080' + path[0];
            

            // get discount
            const discount = 25;

            // get factor
            const factor = element.product.is_sale?((100-discount)/100):1
        

            return <tr key={index}>
                <td>
                    <div className="item">
                        <div className="item__item-image">
                            <img src={path} alt={ element.product.product_name } />
                            <div className='item__quantity'>
                                {element.quantity}
                            </div>
                        </div>
                        <div className="item__item-info">
                            <p>{element.product.product_name}</p>
                            <p>size: {sizeName}</p>
                        </div>
                    </div>
                </td>
                <td>
                    <p> {element.product.price*factor*element.quantity} đ</p>
                </td>
            </tr>
        }
    )

    // get total 
    var total = totalAmount(cart);


    return(
        <Checkout 
            onAddInfoCheckoutRec={onAddInfoCheckout}
            infoRec={info}
            listItemRec={listItem}
            totalRec={total}
            cartRec={cart}
            onAddCheckoutRec={onAddCheckout}
            sizeDetailsRec={sizeDetails}
            loginedAccountRec={loginedAccount}
        />
    );
}


const mapStateToProps = state => {
    return {
        liveAccount: state.loginedAccount,
        info: state.infoCheckout,
        cart: state.cart,        
        sizes: state.listSize,
        images: state.listImages,
        sizeDetails: state.listSizeDetail,
        loginedAccount: state.loginedAccount
    }
};
const mapDispatchToProps = (dispatch,props) => {
    return {
        onAddInfoCheckout: info => {
            dispatch(Actions.addCheckout(info));
        },
        onAddCheckout: (item, newQuantity) => {
            dispatch(Actions.addCheckoutRequest(item, newQuantity));
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(CheckoutContainer)