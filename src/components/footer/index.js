import React from 'react';
import './footer.css';

const FOOTER_SOCIALS = {
    twitter: {
        href: "https://twitter.com/_w3aseL"
    },
    twitch: {
        href: "https://www.twitch.tv/w3aseL/"
    },
    youtube: {
        href: "https://www.youtube.com/user/WeaselBuilds"
    },
    github: {
        href: "https://github.com/w3aseL"
    },
    email: {
        href: "mailto:contact@noahtemplet.dev"
    }
}

class Footer extends React.Component {
    render() {
        var isMobile = window.innerWidth < 480;

        if (!isMobile) return (
            <div class="footer">
                <div class="media-footer">
                    {Object.keys(FOOTER_SOCIALS).map((key, i) => (
                        <a href={FOOTER_SOCIALS[key].href}>
                            <img class="footer-img" src={require(`../../assets/footer/${key}.png`)} />
                        </a>
                    ))}
                </div>
        
                <div class="text-footer">
                    <p class="copyright-text">{'\u00A9'} {new Date().getFullYear()} Noah Templet</p>
                </div>
            </div>
        );
        else return (
            <div class="footer-mobile">
                <div class="copyright-text">
                    <p>{'\u00A9'} {new Date().getFullYear()} Noah Templet</p>
                </div>

                <div class="media">
                    {Object.keys(FOOTER_SOCIALS).map((key, i) => (
                        <a href={FOOTER_SOCIALS[key].href}>
                            <img src={require(`../../assets/footer/${key}.png`)} />
                        </a>
                    ))}
                </div>
            </div>
        );
    }
}

export default Footer;