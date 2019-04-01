import React from 'react'


export default function Display(props){
    const mappedCurrentProfile = props.currentProfile.map(profile => {
        return (
            <div key={profile.image} className="profile-container-1">
                <div><img src={profile.image} alt=""/></div>
                <div>
                    <h1>{profile.name}</h1>
                    <h2>{profile.age}</h2>
                    <h2>{profile.breed}</h2>
                </div>
                <div onClick={()=>props.add(profile)} className="pawpals" ></div>
            </div>
        )
    })
    return <div>{mappedCurrentProfile}</div>
   

}

