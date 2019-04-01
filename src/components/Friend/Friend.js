import React from 'react'

export default function Friend(props){

    const {friend} = props
    return (
        <div className="holding-3">
            <div key={friend.id} className="profile-container-3">
                <img src={friend.image} alt=""></img>
                <h1>{friend.name}</h1>
                <div className="button-container">
                    <button onClick={()=>props.delete(props.id)}>Unfriend</button>
                </div>
            </div>
        </div>
    )
}