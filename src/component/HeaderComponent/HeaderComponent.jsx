import React from "react";
import "./HeaderComponent.css";

const HeaderComponent = (props) => {
    return (
        <div className={"header-wrapper"}>
            <div className={"img-thumb"}>
                <img src={"https://www.gavi.org/sites/default/files/styles/content_feed_thumbnail/public/covid/pr/Vax-Live-image_h2.jpg"} alt={"mantab"} />
                <p className={"time"}>{props.time}</p>
            </div>
            <div className={"img-thumb"}>
            <p className={"title"}>{props.title}</p>
            <p className={"desc"}>{props.desc}</p>
            </div>
        </div>
    )
}

HeaderComponent.defaultProps = {
    title: 'no title',
    time: '00.00',
    desc: 'no description',
}

export default HeaderComponent;