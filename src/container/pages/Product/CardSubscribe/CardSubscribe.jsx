import React, {Component} from "react";

class CardSubscribe extends Component{
    state={
        tap: 4
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }

    handlePlus = () => {
        this.setState({
            tap: this.state.tap + 1
        },() => {
            this.handleCounterChange(this.state.tap);
        })
    }

    handleMinus = () => {
        if(this.state.tap > 0){
            this.setState({
                tap: this.state.tap - 1
            },() => {
                this.handleCounterChange(this.state.tap);
            })
        }
    }

    render() {
        return(
                <div className={"card"}>
                    <div className={"img-thumb-prod"}>
                        <img src={""} alt={""} />
                    </div>
                    <p className={"product-title"}>Aid Count</p>
                    <p className={"product-desc"}>Free</p>
                    <p className={"counter"}>
                        <button className={"minus"} onClick={this.handleMinus}>-</button>
                        <input type={"text"} value={this.state.tap} />
                        <button className={"plus"} onClick={this.handlePlus}>+</button>
                    </p>
                </div>
        );
    }
}

export default CardSubscribe;