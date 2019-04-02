import React from 'react'
import './Display.css'


export default function Display(props){
    const mappedCurrentProfile = props.currentProfile.map(profile => {
        return (
            <div key={profile.image} className="profile-container-1">
                <div><img src={profile.image} alt=""/></div>
                <div className="info">
                    <h1>{profile.name}</h1>
                    <div className="properties">
                        <h2>{profile.age}</h2>
                        <h2>{profile.breed}</h2>
                    </div>
                </div>
                <div onClick={()=>props.add(profile)} className="pawpals" ></div>
            </div>
        )
    })
    return <div>{mappedCurrentProfile}</div>
   

}

