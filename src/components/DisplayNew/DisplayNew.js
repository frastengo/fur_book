import React from 'react'
import './DisplayNew.css'


export default function Display(props){
    const mappedCurrentProfile = props.currentProfile.map(profile => {
        return (
            <div key={profile.image} className="profile-container-4">
                <img src={profile.image} alt=""/>
                <div>
                    <h1>{profile.name}</h1>
                    <h2>{profile.age}</h2>
                    <h2>{profile.breed}</h2>
                </div>
                {/* <button onClick={()=>props.edit(profile)}>Edit</button> */}
            </div>
        )
    })
    return <div>{mappedCurrentProfile}</div>
    
}