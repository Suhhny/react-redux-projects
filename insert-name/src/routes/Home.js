import React, { Component } from 'react';
import '../Home.css';

class Home extends Component {

  // constructor(props){
  //   super(props);
  //   this.state = { parentName : "" };
  // }

  render() {
    return (
      <div className="whole">

        <div className="content">
          <div className="inputSection">
            <h2 className="letters">What's your name?</h2>
            <form>
              <input placeholder="Your name" onChange={this.props.change} />
            </form>
            <br />
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
