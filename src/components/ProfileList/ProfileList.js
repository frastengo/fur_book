import React from 'react';
import Profile from '../Profile/Profile'
import './ProfileList.css';

export default function Profiles(props) {
    const {profiles} = props
    console.log(props.profiles)
    const profilesToShow = profiles.map((profile, index) => {
        return <Profile key={index} name={profile.name} image={profile.image} breed={profile.breed} age={profile.age} meet={props.meet}/>
    });

    return <div className="profiles">{profilesToShow}</div>
}