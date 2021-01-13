import React from 'react';
import './style.css';

import profilePic from '../../img/profile.jpg';

export default function index() {
    return (
        <div className="avatar">
            <img src={profilePic} alt="Foto de Perfil" />
        </div>
    )
}
