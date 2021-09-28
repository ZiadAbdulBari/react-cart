import React, { useEffect, useState } from 'react';
import './body.css';
import MobileCard from '../MobileCard/MobileCard';
import Selected from '../Selected/Selected';
const Body = () => {
    const [mobiles,setMobiles] = useState([])
    useEffect(()=>{
        fetch('./mobile.json')
        .then((res)=>res.json())
        .then((data)=>setMobiles(data))
    },[])
    const [names,setName] = useState([])
    const [prices,setPrice] = useState(0)

    const handleAdd = (name,price)=>{
        setName([...names,name])
        setPrice(prices+parseInt(price))
    }

    return (
        <div className='body'>
            <div className="all_mobile">{mobiles.map(mobile=><MobileCard mbl={mobile} key={mobile.key} handleAdd={handleAdd}></MobileCard>)}</div>
            <div className="selected_mobile">{<Selected selectedMobiles={names} cost={prices}></Selected>}</div>
        </div>
    );
};

export default Body;