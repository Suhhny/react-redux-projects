import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Home.css';

import Header from './components/Header';
import Home from './routes/Home';
import Result from './routes/Result';


class App extends Component {

  state = {
    name: ""
  };

  handleChange = (e) => {
    this.setState({
        name : e.target.value
    });
  };

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props} change={this.handleChange} value={this.state.name} />} />
            <Route path="/result" render={(props) => <Result {...props} value={this.state.name} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
