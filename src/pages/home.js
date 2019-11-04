import React from 'react';
import './home.css';

class Home extends React.Component {
    render() {
        if(this.props.activeTab == "Home")
            return (
                <div class="construction">
                    <div class="text">
                            <h1>Hi! I'm Noah</h1>
                            <p>Welcome to my website! We're currently in a construction phase.</p>
                    </div>
            
                    <div class="wrap-img">
                        <img src={require('../assets/pingu_brick_wall.png')} class="pingu" />
                    </div>
                </div>

                /*<div class="home">

                </div>*/
            );
        else return null;
    }
}

export default Home;