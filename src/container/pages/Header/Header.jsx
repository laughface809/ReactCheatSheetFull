import React, {Component} from "react";
import HeaderComponent from "../../../component/HeaderComponent/HeaderComponent";

class HeaderPage extends Component{
    render() {
        return(
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
        )
    }
}

export default HeaderPage;