import React, { Component } from 'react';

const default_btn_style = "btn btn-lg m-2 rounded-pill rounded-3 btn-"

class BuySellButtons extends Component {
    state = { 
        buttons_state : [
            default_btn_style + "success", default_btn_style + "danger-outline"
        ]
     } 

    render() { 

        return (
            <React.Fragment>
                <div className="d-flex p-2 align-items-center justify-content-center">
                    <button type="button" className={this.state.buttons_state[0]} onClick= {this.handleBuyClick}>LONG</button>
                    <button type="button" className={this.state.buttons_state[1]} onClick = {this.handleSellClick}>SHORT</button>
                </div>
            </React.Fragment>
        );
    }

    handleSellClick = () => {
        console.log("Sell clicked.")
        if (this.props.currentState === false)
            return;

        console.log(this);
        const buttons_state = [default_btn_style + "outline-success",default_btn_style + "danger"];
        this.props.changeBuyState(false);
        this.setState({buttons_state});

    }

    handleBuyClick = () => {
        console.log("Buy clicked");
        if (this.props.currentState === true)
            return;

        console.log(this);
        const buttons_state = [default_btn_style + "success",default_btn_style + "outline-danger"];
        this.props.changeBuyState(true);
        this.setState({buttons_state});
    }
}
 
export default BuySellButtons;