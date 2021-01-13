import React from 'react';
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";


export default function index() {
    return (
        <div className="social">
            <a href="#"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
        </div>
    )
}
