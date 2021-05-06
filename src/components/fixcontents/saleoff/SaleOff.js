// import libary style
import { useState } from 'react';
import SmallBanner from '../smallbanner/SmallBanner';
import './SaleOff.scss';

// code function here
function SaleOff(props) {
    // get props
    const {
        listIndex
    } = props;


    return(
        <>
            <SmallBanner title="Sản phẩm khuyến mãi"/>    
            <div className="sale-off">
                <div className='wrapper'>
                    <h2>Sản phẩm đang khuyến mãi</h2>
                    <div className='sale-off__body'>
                        
                        {
                            listIndex
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
export default SaleOff;