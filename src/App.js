import React, { Component } from 'react';
import BuySellButtons from './components/buySellButtons';
import ComputationForm from './components/computationForm';

class App extends Component {
  //true => in buy state, false => in sell state
  state = { 
    buy_state : true,
    current_state_style : "success",
    buy_sell_switched : false
  } 

  render() { 
    return (
      <React.Fragment>
        <div>
          <ComputationForm />
        </div>

      </React.Fragment>
    );
  }

  handleChange = (newState) => {
    if (newState === true){
      this.setState({buy_state : newState, current_state_style : "success"});
    }

    else {
      this.setState({buy_state : newState, current_state_style : "danger"});
    }

  }
}

export default App;
