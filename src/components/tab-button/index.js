import React from 'react';
import PropTypes from 'prop-types';

import './tab-button.css';

class TabButton extends React.Component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
      };
    
      onClick = () => {
        const { label, onClick } = this.props;
        onClick(label);
      }

      render() {
          const isActive = this.props.activeTab === this.props.label;

          return (
            <div class={`tab-div${isActive ? " active" : ""}`} onClick={this.onClick}>
              <a class={`tab-item${isActive ? " active" : ""}`} label={this.props.label}>{this.props.label}</a>
            </div>
          );
      }
}

export default TabButton;