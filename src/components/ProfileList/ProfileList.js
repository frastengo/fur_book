import React from 'react';
import Profile from '../Profile/Profile'
import './ProfileList.css';

export default function Profiles(props) {
    const {profiles} = props
    console.log(props.profiles)
    const profilesToShow = profiles.map(profile => {
        return <Profile key={profile.id} name={profile.name} image={profile.image} breed={profile.breed} age={profile.age} />
    });

    return <div>{profilesToShow}</div>
}