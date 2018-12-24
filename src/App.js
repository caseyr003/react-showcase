import React, { Component } from 'react';
import './App.css';
import './components/Layout/Layout';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <h1>showcase</h1>
        </Layout>
      </div>
    );
  }
}

export default App;
