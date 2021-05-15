import React, {Component} from "react";
import axios from "axios";
import './DetailPost.css';

class DetailPost extends Component{

    state = {
        post: {
            title: '',
            desc: '',
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.postID);
        let id = this.props.match.params.postID;
        axios.get(`http://localhost:8080/posts/${id}`).then(result => {
            console.log('result :', result);
            let post = result.data;
            this.setState({
                post:{
                    title: post.title,
                    desc: post.body,
                }
            })
        })
    }

    render() {
        console.log(this.props);
        return(
            <div className={"detail-post"}>
                <p className={"title-post"}>{this.state.post.title}</p>
                <p className={"desc-post"}>{this.state.post.desc}</p>
            </div>
        )
    }
}

export default DetailPost;