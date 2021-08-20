import React from 'react'
import myimg from '../nidhal.jpg';

function ProfilePhoto() {
    return (
        <div>
            <img src={myimg} alt="nidhal" style={{width:400 ,height:500}}/>
        </div>
    )
}

export default ProfilePhoto
