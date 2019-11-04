import React from 'react';
import './App.css';
import Header from './components/header/index';
import ContentController from './ContentController';
import Footer from './components/footer/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'Home'
    };
    this.handleTabState = this.handleTabState.bind(this);
  }

  handleTabState(data) {
    this.setState({activeTab: data});
  }

  render(){
    return (
      <div>
        <Header updateTab={this.handleTabState} />
        <ContentController activeTab={this.state.activeTab} />
        <Footer />
      </div>
    );
  }
}

export default App;
