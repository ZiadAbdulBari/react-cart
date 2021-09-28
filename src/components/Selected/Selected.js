import React from 'react';
import './selected.css'
const Selected = (props) => {
    const {selectedMobiles,cost}=props;
    return (
        <div>
            <div className="item_cost">
                <p>Total Item: {selectedMobiles.length}</p>
                <p className='cost'>Total Cost: {cost}</p>
            </div>
            <h4>Selected items:</h4>
            
            {selectedMobiles.map(mobile=><p className='selected_mobiles'>{mobile}</p>)}
            
        </div>
    );
};

export default Selected;