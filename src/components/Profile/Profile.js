import React from 'react';

export default function Profile(props){
    const {name, age, breed, image} = props
    console.log(props);
    return (
        <div>
            <h1>{name}</h1>
            <h2>{age}</h2>
            <h2>{breed}</h2>
            <img src={image} alt=""/>
        </div>
    )
}

