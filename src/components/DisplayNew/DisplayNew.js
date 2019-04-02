import React from 'react'
import './DisplayNew.css'


export default function Display(props){
     const {profile} = props
        return (
            <div key={profile.image} className="profile-container-4">
                <div><img src={profile.image} alt=""/></div>
                    <div className='info-4'>
                        <h1>{profile.name}</h1>
                    <div className="properties-4">
                        <h2>{profile.age}</h2>
                        <h2>{profile.breed}</h2>
                    </div>
                </div>
                <button onClick={props.edit}>Edit</button>
            </div>
        )
}

    
