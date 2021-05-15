import React, {Component, Fragment} from "react";
import './Product.css'
import CardSubscribe from "../CardSubscribe/CardSubscribe";

class Product extends Component{
    state= {
        tap: 4
    }

    handleCounterChange = (newValue) => {
        this.setState({
            tap: newValue
        })
    }

    render() {
        return(
            <Fragment>
                <p>Product Component</p>
                <div className={"header"}>
                    <div className={"logo"}>
                            <img src={"https://www.gavi.org/sites/default/files/background-image/2020/owp-banner.jpg"} alt={""}/>
                    </div>
                    <div className={"subscribe"}>
                        <img src={"https://smkn3oku.sch.id/wp-content/uploads/2020/04/kisspng-clip-art-computer-icons-house-vector-graphics-home-ip-svg-png-icon-free-download-23-593-onlinewe-5b74fab0a2e893.6341218815343930086673.jpg"} alt={""}/>
                        <div className={"count"}>{this.state.tap}</div>
                    </div>
                </div>
                <CardSubscribe onCounterChange={(value) => this.handleCounterChange(value)} />
            </Fragment>
        )
    }
}

export default Product;