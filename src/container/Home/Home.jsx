//libraries
import React, {Component, Fragment} from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";

//pages
import HeaderPage from "../pages/Header/Header";
import Product from "../pages/Product/Product";
import LifeCycleComponent from "../pages/LifeCycleComponent/LifeCycleComponent";
import BlogPost from "../pages/BlogPost/BlogPost";
import DetailPost from "../pages/BlogPost/DetailPost/DetailPost";

//styling
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
                <Fragment>
                    <div className={"navigation"}>
                        <Link to={"/"}>Blog Post Component</Link>
                        <Link to={"/product"}>Product Component</Link>
                        <Link to={"/lifecycle"}>Lifecycle Component</Link>
                        <Link to={"/header"}>Header Component</Link>
                    </div>
                            <Route path={"/"} exact component={BlogPost} />
                            <Route path={"/detail-post/:postID"} component={DetailPost}/>
                            <Route path={"/product"} component={Product} />
                            <Route path={"/lifecycle"} component={LifeCycleComponent} />
                            <Route path={"/header"} component={HeaderPage} />
                </Fragment>
            </BrowserRouter>
        )
    }
}

export default Home;