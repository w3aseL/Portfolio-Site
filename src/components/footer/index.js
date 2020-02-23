import React from 'react';
import './footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div class="footer">
                <div class="media-footer">
                    <a href="https://twitter.com/_w3aseL">
                        <img class="footer-img" src={require('../../assets/footer/twitter.png')} />
                    </a>
        
                    <a href="https://www.twitch.tv/w3aseL/">
                        <img class="footer-img" src={require('../../assets/footer/twitch.png')} />
                    </a>
        
                    <a href="https://www.youtube.com/user/WeaselBuilds">
                        <img class="footer-img" src={require('../../assets/footer/youtube.png')} />
                    </a>
        
                    <a href="https://github.com/w3aseL">
                        <img class="footer-img" src={require('../../assets/footer/github.png')} />
                    </a>
        
                    <a href="mailto:contact@noahtemplet.dev">
                        <img class="footer-img" src={require('../../assets/footer/email.png')} />
                    </a>
                </div>
        
                <div class="text-footer">
                    <p class="copyright-text">{'\u00A9'} {new Date().getFullYear()} Noah Templet</p>
                </div>
            </div>
        );
    }
}

export default Footer;