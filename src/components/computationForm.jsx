import React, { Component } from 'react';

const default_border_style = "border p-5 border-3 rounded-5 border-"
const default_btn_style = "btn btn-lg m-2 rounded-pill rounded-3 btn-"

class ComputationForm extends Component {
    state = {
        long_state : true,
        current_state_style : "success",

        buttons_state : [
            default_btn_style + "success", default_btn_style + "outline-danger"
        ],

        long_obj: {
            values: {
                capital: "",
                risk_percentage: "",
                stock_ticker: "",
                entry_price: "",
                stop_loss: ""
            },
    
            computationOutput: "",
    
            errors: {
                capital: "",
                risk_percentage: "",
                stock_ticker: "",
                entry_price: "",
                stop_loss: "",
                logic_errors: ""
            }
        },

        short_obj: {
            values: {
                capital: "",
                risk_percentage: "",
                stock_ticker: "",
                entry_price: "",
                stop_loss: ""
            },
    
            computationOutput: "",
    
            errors: {
                capital: "",
                risk_percentage: "",
                stock_ticker: "",
                entry_price: "",
                stop_loss: "",
                logic_errors: ""
            }
        },
    }

    default_obj = {values: {
        capital: "",
        risk_percentage: "",
        stock_ticker: "",
        entry_price: "",
        stop_loss: ""
    },

    computationOutput: "",

    errors: {
        capital: "",
        risk_percentage: "",
        stock_ticker: "",
        entry_price: "",
        stop_loss: "",
        logic_errors: ""
    }};
    
    render() {
        return (
            <React.Fragment>

                <div className="d-flex p-2 align-items-center justify-content-center">
                    <button type="button" className={this.state.buttons_state[0]} onClick= {this.handleLongClick}>LONG</button>
                    <button type="button" className={this.state.buttons_state[1]} onClick = {this.handleShortClick}>SHORT</button>
                </div>
                
                <div className = "d-flex align-items-center justify-content-center">
                    <border className={default_border_style + this.state.current_state_style}>
                        <div className = "form-group">
                            <div className ="mb-3">
                                <label for= "capital">Capital</label>
                                <input id="capital" 
                                name = "capital"
                                type="text" 
                                className = {"form-control " + (this.state.long_state ? (this.state.long_obj.errors.capital ? "is-invalid" : "") : (this.state.short_obj.errors.capital ? "is-invalid" : ""))}
                                placeholder="$"
                                value={this.state.long_state ? this.state.long_obj.values.capital : this.state.short_obj.values.capital}
                                required
                                onChange={this.handleChange}
                                />
                                <div class="invalid-feedback">
                                    {this.state.long_state ? this.state.long_obj.errors.capital : this.state.short_obj.errors.capital}
                                </div>
                                <div class="valid-feedback"/>
                                <small className="form-text text-muted">
                                    Your current total portfolio capital.
                                </small>
                            </div>
                            
                            <div className ="mb-3">
                                <label for= "risk_percentage">Risk Percentage</label>
                                <input id="risk_percentage" 
                                className={"form-control " + (this.state.long_state ? (this.state.long_obj.errors.risk_percentage ? "is-invalid" : "") : (this.state.short_obj.errors.risk_percentage ? "is-invalid" : ""))} 
                                name = "risk_percentage"
                                type="integer" 
                                placeholder="%"
                                value={this.state.long_state ? this.state.long_obj.values.risk_percentage : this.state.short_obj.values.risk_percentage}
                                required
                                onChange={this.handleChange}
                                />
                                <div class="invalid-feedback">
                                    {this.state.long_state ? this.state.long_obj.errors.risk_percentage : this.state.short_obj.errors.risk_percentage}
                                </div>
                                <div class="valid-feedback"/>
                                <small className="form-text text-muted">
                                    Percentage of portfolio capital you are willing to risk from 0 to 100%. 
                                </small>
                            </div>

                            <div className = "mb-3">
                                <label for= "entry_price">Entry Price</label>
                                <input id="entry_price" 
                                name = "entry_price"
                                className={"form-control " + (this.state.long_state ? (this.state.long_obj.errors.entry_price ? "is-invalid" : "") : (this.state.short_obj.errors.entry_price ? "is-invalid" : ""))} 
                                type="text" 
                                placeholder="$"
                                value={this.state.long_state ? this.state.long_obj.values.entry_price : this.state.short_obj.values.entry_price}
                                required
                                onChange={this.handleChange}
                                />
                                <div class="invalid-feedback">
                                    {this.state.long_state ? this.state.long_obj.errors.entry_price : this.state.short_obj.errors.entry_price}
                                </div>
                                <div class="valid-feedback"/>
                            </div>

                            <div className = "mb-3">
                                <label for= "stop_loss">Stop Loss</label>
                                <input id="stop_loss" 
                                name = "stop_loss"
                                className={"form-control " + (this.state.long_state ? (this.state.long_obj.errors.stop_loss ? "is-invalid" : "") : (this.state.short_obj.errors.stop_loss ? "is-invalid" : ""))} 
                                type="text" 
                                placeholder="$"
                                value={this.state.long_state ? this.state.long_obj.values.stop_loss : this.state.short_obj.values.stop_loss}
                                required
                                onChange={this.handleChange}
                                />
                                <div class="invalid-feedback">
                                    {this.state.long_state ? this.state.long_obj.errors.stop_loss : this.state.short_obj.errors.stop_loss}
                                </div>
                                <div class="valid-feedback"/>
                            </div>

                            <div className='d-flex align-items-center justify-content-center mt-5'>
                                <button className={"btn btn-md m-2 rounded-pill rounded-3 btn-" + this.state.current_state_style} onClick ={this.handleComputation}>Compute</button>

                                <button className="btn btn-md m-2 rounded-pill rounded-3 btn-dark" onClick ={this.handleReset}>Reset</button>
                            </div>
                            
                            <p id="computationResult" className='d-flex align-items-center justify-content-center mt-3'>{this.state.long_state ? this.state.long_obj.computationOutput : this.state.short_obj.computationOutput}</p>
                
                        </div>

                    </border>
                </div>
                  
            </React.Fragment>
        );    
    }

    containError(){
        if (this.state.long_state === true){
            for (const element in this.state.long_obj.errors){
                if (this.state.long_obj.errors[element] !== "") return false;
            }
            return true;
        }

        else {
            for (const element in this.state.short_obj.errors){
                if (this.state.short_obj.errors[element] !== "") return false;
            }
            return true;
        }
    }

    handleReset = () => {
        this.state.long_state ? this.setState({long_obj: this.default_obj}) :this.setState({short_obj: this.default_obj}); 
    }

    handleShortClick = () => {
        console.log("Sell clicked.")
        if (this.state.long_state === false)
            return;

        console.log(this);
        const buttons_state = [default_btn_style + "outline-success",default_btn_style + "danger"];
        this.setState({buttons_state, long_state: false, current_state_style: "danger"});
    }

    handleLongClick = () => {
        console.log("Buy clicked");
        if (this.state.long_state === true)
            return;

        console.log(this);
        const buttons_state = [default_btn_style + "success", default_btn_style + "outline-danger"];
        this.setState({buttons_state, long_state: true, current_state_style: "success"});
    }

    handleChange= (e) => {
        if (this.state.long_state === true){
            const long_obj = {...this.state.long_obj};
            long_obj.values[e.target.name] = e.target.value;
            this.setState({long_obj});
        }
        
        else{
            const short_obj = {...this.state.short_obj};
            short_obj.values[e.target.name] = e.target.value;
            this.setState({short_obj});
        }
        this.validation(e.target);
        console.log(e.target);
    }

    handleComputation = () => {
        if (!this.containError()){
            this.state.long_state ? this.setState({...this.state.long_obj, computationOutput: ""}) : this.setState({...this.state.short_obj, computationOutput: ""});
            return;
        }

        let curr_obj = this.state.long_state ? {...this.state.long_obj} : {...this.state.short_obj};

        const max_shares = Math.floor(curr_obj.values.capital/curr_obj.values.entry_price);

        const result = Math.floor((curr_obj.values.capital * (curr_obj.values.risk_percentage/100) ) / (curr_obj.values.entry_price - curr_obj.values.stop_loss));

        if (this.state.long_state){
            if((curr_obj.values.capital * (curr_obj.values.risk_percentage/100)) < (curr_obj.values.entry_price - curr_obj.values.stop_loss)){
                curr_obj.computationOutput = 
                    <div>
                        <p>You should <strong>NOT</strong> enter any position.</p>
                        <p>Stop loss margin is larger than risk percentage.</p>
                    </div>
            }
            else {
                curr_obj.computationOutput = 
                    <div>
                        <p>Your recommended position size is <strong>{(max_shares < result ? max_shares : result)}</strong> shares.</p>
                    </div>
            }
        }
        
        else{
            if((curr_obj.values.capital * (curr_obj.values.risk_percentage/100)) < (curr_obj.values.stop_loss - curr_obj.values.entry_price)){
                curr_obj.computationOutput = 
                    <div>
                        <p>You should <strong>NOT</strong> enter any position.</p>
                        <p>Stop loss margin is larger than risk percentage.</p>
                    </div>
            }
            else {
                curr_obj.computationOutput = 
                    <div>
                        <p>Your recommended position size is <strong>{(max_shares < result ? max_shares : result)}</strong> shares.</p>
                    </div>;
            }
        }
        

        this.state.long_state ? this.setState({long_obj : curr_obj}) : this.setState({short_obj : curr_obj}); 
     
        // if (this.state.long_state === true){
        //     const long_obj = {...this.state.long_obj};
        //     const max_shares = Math.floor(long_obj.values.capital/long_obj.values.entry_price);
        //     const result = Math.floor(this.state.long_obj.values.capital * (this.state.long_obj.values.risk_percentage/100) ) / (this.state.long_obj.values.entry_price - this.state.long_obj.values.stop_loss);
        //     long_obj.computationOutput = "Your recommended position size is " + (max_shares < result ? max_shares : result) + " shares.";
        //     this.setState({long_obj});
        // }

        // else{
        //     const short_obj = {...this.state.short_obj};
        //     const max_shares = Math.floor(short_obj.values.capital/short_obj.values.entry_price);
        //     const result = Math.floor(this.state.short_obj.values.capital * (this.state.short_obj.values.risk_percentage/100) ) / (this.state.short_obj.values.entry_price - this.state.short_obj.values.stop_loss);
        //     short_obj.computationOutput = "Your recommended position size is " + (max_shares > result ? max_shares : result) + " shares.";
        //     this.setState({short_obj});
        // }
    }

    validation({name, value}){
        let curr_obj = {};
        this.state.long_state ? curr_obj = this.state.long_obj : curr_obj = this.state.short_obj;
        let errors = curr_obj.errors;

        switch (name){
            case "capital":
                if(Number(value) != value || value < 0){
                    errors.capital = "Value must be positive.";
                    this.setState({...curr_obj, errors});
                    return;
                }
                errors.capital = "";
                this.setState({...curr_obj, errors});
                return;

            case "risk_percentage":
                if(Number(value) != value || value > 100 || value < 0) {
                    errors.risk_percentage = "Percentage must be between 0% and 100%.";
                    this.setState({...curr_obj, errors});
                    return;
                }
                errors.risk_percentage = "";
                this.setState({...curr_obj, errors});
                return;
            
            case "entry_price":
                if(Number(value) != value || value < 0){
                    errors.entry_price = "Value must be positive.";
                    this.setState({...curr_obj, errors});
                    return;
                }
                if (this.state.long_state === true && (parseFloat(value) > parseFloat(this.state.values.stop_loss))){
                    errors.stop_loss = ""
                    this.setState({...curr_obj, errors});
                    return;
                }
                if (this.state.long_state === true && (parseFloat(value) <= parseFloat(this.state.values.stop_loss))){
                    errors.stop_loss = "Stop loss must be less than the entry price."
                    this.setState({...curr_obj, errors});
                    return;
                }
                if (this.state.long_state === false && (parseFloat(value) >= parseFloat(this.state.values.stop_loss))){
                    errors.stop_loss = "Stop loss must be greater than the entry price."
                    this.setState({...curr_obj, errors});
                    return;
                }
                if (this.state.long_state === false && (parseFloat(value) < parseFloat(this.state.values.stop_loss))){
                    errors.stop_loss = ""
                    this.setState({...curr_obj, errors});
                    return;
                }

                errors.entry_price = "";
                this.setState({...curr_obj, errors});
                return;
            
            case "stop_loss":
                if(Number(value) != value || value < 0){
                    errors.stop_loss = "Value must be positive.";
                    this.setState({...curr_obj, errors});
                    return;
                }
                if (this.state.long_state === true && (parseFloat(value) >= parseFloat(this.state.values.entry_price))){
                    errors.stop_loss = "Stop loss must be less than the entry price."
                    this.setState({...curr_obj, errors});
                    return;
                }
                if (this.state.long_state === true && (parseFloat(value) < parseFloat(this.state.values.entry_price))){
                    errors.stop_loss = ""
                    this.setState({...curr_obj, errors});
                    return;
                }
                if (this.state.long_state === false && (parseFloat(value) <= parseFloat(this.state.values.entry_price))){
                    errors.stop_loss = "Stop loss must be greater than the entry price."
                    this.setState({...curr_obj, errors});
                    return;
                }
                if (this.state.long_state === false && (parseFloat(value) > parseFloat(this.state.values.entry_price))){
                    errors.stop_loss = ""
                    this.setState({...curr_obj, errors});
                    return;
                }

                errors.stop_loss = "";
                this.setState({...curr_obj, errors});
                return;
        }
    }
}
 
export default ComputationForm;