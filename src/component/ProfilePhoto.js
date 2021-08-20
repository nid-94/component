import React from 'react'
import myimg from '../nidhal.jpg';

function ProfilePhoto() {
    return (
        <div>
            <img src={myimg} alt="nidhal" style={{width:500 ,height:700}}/>
        </div>
    )
}

export default ProfilePhoto
