import React from 'react';
import './about.css';

class About extends React.Component {
    render() {
        if(this.props.activeTab == "About")
            return (
                <div class="about">
                    <p>WIP</p>
                </div>
            );
        else return null;
    }
}

export default About;