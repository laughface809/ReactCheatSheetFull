import React, {Component, Fragment} from "react";
import HeaderComponent from "../../component/HeaderComponent/HeaderComponent";
import Product from "../Product/Product";
import LifeCycleComponent from "../LifeCycleComponent/LifeCycleComponent";
import BlogPost from "../BlogPost/BlogPost";
import {BrowserRouter, Route, Link} from "react-router-dom";
import './Home.css';

class Home extends Component{
    state = {
        showComponent: true
    }
    
    componentDidMount() {
        /*setTimeout(() =>{
            this.setState({
                showComponent: false
            })
        }, 5000)*/
    }

    render() {
        return(
            <BrowserRouter>
            <>
                <p>Header Component</p>
                <hr />
                <HeaderComponent
                    time={"7.13"}
                    title={"Feedback 1"}
                    desc={"This is a great place"}
                />
                <HeaderComponent
                    time={"5.12"}
                    title={"Feedback 2"}
                    desc={"This is a great time"}
                />
                <HeaderComponent
                    time={"6.12"}
                    title={"Feedback 3"}
                    desc={"This is a great fun"}
                />
                <HeaderComponent/>
            </>
                <Fragment>
                    <div className={"navigation"}>
                        <Link to={"/"}>Blog Post Component</Link>
                        <Link to={"/product"}>Product Component</Link>
                        <Link to={"/lifecycle"}>Lifecycle Component</Link>
                        <Link to={"/header"}>Header Component</Link>
                    </div>
                            <Route path={"/"} exact component={BlogPost} />
                            <Route path={"/product"} component={Product} />
                            <Route path={"/lifecycle"} component={LifeCycleComponent} />
                            <Route path={"/header"} component={HeaderComponent} />
                </Fragment>
            </BrowserRouter>
        )
    }
}

export default Home;