import React, {Component, Fragment} from "react";
import './BlogPost.css';
import Post from "../../component/Post/Post";
import axios from "axios";

class BlogPost extends Component{
    state = {
        post:[],
        formBlogPost:{
            id: 1,
            title: '',
            body: '',
            userId: 1,
        },
        isUpdate: false
    }

    getPostAPI = () => {
        axios.get('http://localhost:8080/posts?_sort=id&_order=desc')
            .then((result) => {
                this.setState({
                    post: result.data
                })
            })
    }

    postDataToApi = () => {
        axios.post('http://localhost:8080/posts', this.state.formBlogPost).then((result) => {
            console.log(result);
            alert('success add');
            this.getPostAPI();
            this.setState({
                isUpdate: false,
                formBlogPost:{
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1,
                },
            })
        }, (err) => {
            console.log('error', err);
        })
    }

    putDataToApi = () => {
        axios.put(`http://localhost:8080/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost).then((result)=>{
            console.log(result)
            alert('success update');
            this.getPostAPI();
            this.setState({
                isUpdate: false,
                formBlogPost:{
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1,
                },
            })
        }, (err) => {
            console.log('error', err);
        })
    }

    handleUpdate = (data) => {
        console.log(data);
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }

    handleRemove = (data) => {
        console.log(data);
        axios.delete(`http://localhost:8080/posts/${data}`, this.state.formBlogPost).then((result)=>{
            alert('success delete');
            this.getPostAPI();
        })
    }

    handleFormChange = (event) => {
        let formBlogPostNew = {...this.state.formBlogPost};
        let timestamp = new Date().getTime();
        if(!this.state.isUpdate){
            formBlogPostNew['id'] = timestamp;
        }
        formBlogPostNew[event.target.name] = event.target.value;
        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    handleSubmit = () => {
        if(this.state.isUpdate){
            this.putDataToApi();
        }else {
            this.postDataToApi();
        }
    }

    componentDidMount() {
        /*fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    post: json
                })
            })*/
        this.getPostAPI();
    }

    render() {
        return(
            <Fragment>
                <p>Blog Post Component</p>
            <p className={"section-title"}>Blog Post</p>
                <div className={"form-add-post"}>
                    <label htmlFor={"title"}>Title</label>
                    <input type={"text"} name={"title"} placeholder={"add title"} onChange={this.handleFormChange} value={this.state.formBlogPost.title} />
                    <label htmlFor={"body"}>Blog Content</label>
                    <textarea name={"body"} id={"body"} cols={"30"} rows={"10"} placeholder={"add content"} onChange={this.handleFormChange} value={this.state.formBlogPost.body}/>
                    <button className={"btn-submit"} onClick={this.handleSubmit}>Simpan</button>
                </div>
                {
                    this.state.post.map(post=>{
                        return <Post key={post.id} data={post} title={post.title} desc={post.body} remove={this.handleRemove} update={this.handleUpdate}/>
                    })
                }
            </Fragment>
        )
    }
};

export default BlogPost;