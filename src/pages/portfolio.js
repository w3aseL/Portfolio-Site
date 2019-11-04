import React from 'react';
import './portfolio.css';

class Portfolio extends React.Component {
    render() {
        if(this.props.activeTab == "Portfolio")
            return (
                <div class="portfolio">
                    <p>WIP</p>
                </div>
            );
        else return null;
    }
}

export default Portfolio;