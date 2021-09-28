import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './mobile_card.css'

const MobileCard = (props) => {
    const {brand,model,resolution,ram,processor,img,price}=props.mbl
    return (
        <div className="card_wrapper">
            <div className="mobile_img">
                <img src={img} alt="" />
            </div>
            <div className="card_body">
                <p>Brand Name: {brand}</p>
                <p>Model: {model}</p>
                <p>Resolution: {resolution}</p>
                <p>Ram: {ram}</p>
                <p>Processor: {processor}</p>
                <p>Price: {price}</p>
            </div>
            <button className='cart-btn' onClick={()=>props.handleAdd(model,price)}>
                <FontAwesomeIcon icon={faCartPlus} /> Add to cart
            </button>
        </div>
    );
};

export default MobileCard;