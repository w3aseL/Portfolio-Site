import React from 'react';
import './error.css';

import pinguImg from '../../assets/pingu_hi.png'

class Error extends React.Component {
    render() {
        var isMobile = window.innerWidth < 480;

        return (
            <div class="error">
                <div class={`error-content${(isMobile ? "-mobile" : "")}`}>
                    <img src={pinguImg} alt="Pingu Says Hi!" />
                    <h1>Page Not Found!</h1>
                    <p>
                        My good friend Pingu is here to tell you that you are accessing a page that either does not exist
                        or is not accessible at this point! <strong>Turn back now!</strong>
                    </p>
                </div>
            </div>
        );
    }
}

export default Error;