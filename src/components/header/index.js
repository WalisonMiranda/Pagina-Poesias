import React from 'react';
import './style.css';
import Avatar from '../avatar/index';
import SocialMedia from '../social/index';

export default function index() {
    return (
        <div className="container">
            <div className="head">
                <div className="profile">
                    <Avatar />
                    <h1 className="underline">Walison Miranda</h1>
                </div>
                <SocialMedia />
            </div>
        </div>
    )
}
