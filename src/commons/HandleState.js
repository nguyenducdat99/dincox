// import library
import moment from 'moment';

// find discount for product from sales detail
export const findDiscountForProduct = (id_product, array) => {
    const listDiscount = array.filter(
        element => {
            return (element.id_product*1 === id_product*1) && 
            (moment()<moment(element.end_at));
        }
    )

    return listDiscount;
}