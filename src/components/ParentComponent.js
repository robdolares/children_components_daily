import React, { Component } from 'react';

import ChildComponent from './ChildComponent'
import DisplayComponent from './DisplayComponent'

export default class ParentComponent extends Component {
  constructor(props){
    super(props);

    //state lives here
    this.state = {
      whatToSay: "",
      whatWasSaid: ""
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    e.preventDefault();
    //set the state on input change
    this.setState({whatToSay: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    //check console to see if firing
    console.log("fired");
    //set the state for props and for value (prevents output from appearing when typing)
    this.setState({whatToSay: this.state.whatToSay, whatWasSaid: this.state.whatToSay});
    //clear our input by resetting state
    this.setState({whatToSay: ""});

  }
  render() {
    return (
      <div>
        <div className="card-block">
          <input className="col-lg-3 col-md-4 col-sm-6 text-center" onChange={this.handleInput} type="text" placeholder="Say It, Don't Spray It!" value={this.state.whatToSay} />
        </div>
        <div>
          <ChildComponent onClick={this.handleSubmit}/>
          <div className="card-block">
            <DisplayComponent sayWhat={this.state.whatWasSaid} />
          </div>
        </div>
      </div>
    );
  }
}
