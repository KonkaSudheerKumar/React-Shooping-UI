import React from 'react'

const Second=(pro)=> {

    const{name,city,age}=pro.myCar;
    return (
        <div>
            <div>{name}</div>
            <div>{city}</div>
            <div>{age}</div>
        
        </div>
        
    )
}

export default Second
