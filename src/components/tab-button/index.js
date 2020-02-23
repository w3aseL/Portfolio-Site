import React from 'react';
import { Link } from 'react-router-dom'

import './tab-button.css';

class TabButton extends React.Component {
  render() {
    const isActive = this.props.location.pathname == this.props.to;

    return (
      <div class={`tab-div${isActive ? " active" : ""}`}>
        <Link className={`tab-item${isActive ? " active" : ""}`} label={this.props.label} exact={this.props.exact} to={this.props.to}>{this.props.label}</Link>
      </div>
    );
  }
}

export default TabButton;