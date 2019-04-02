import React from 'react';
import './Profile.css'

export default function Profile(props){
    const {image} = props
    console.log(props);
    return (
        <div className="profile-container">
            <div className="clickimage" onClick={() => props.meet(props)}><img  src={image} alt=""/></div>
        </div>
    )
}

