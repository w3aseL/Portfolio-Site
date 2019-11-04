import React from 'react';
import './socials.css';

class Socials extends React.Component {
    render() {
        if(this.props.activeTab == "Social")
            return (
                <div class="socials">
                    <p>WIP</p>
                </div>
            );
        else return null;
    }
}

export default Socials;