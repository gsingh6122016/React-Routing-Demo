import React , { Component, useCallback } from 'react';
import classes from './sendpost.module.css';
import axios from 'axios';
import {Redirect} from 'react-router-dom';


class Sendpost extends Component {

    state = {
        title: '',
        body: '',
        author: 'max',
        submitted : false
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body:this.state.body,
            author:this.state.author
        };
        axios.post('https://jsonplaceholder.typicode.com/posts',data)
        .then(response => {
            // this.setState({submitted:true});
            // or we can use
            this.props.history.push('/posts');
            console.log(response);
        });
        
    }

   changeHandler = (event) =>
   {
this.setState({ [event.target.name]: event.target.value })
   }

    render(){
        let redirect = null;
        if(this.state.submitted){
            redirect = <Redirect to='/posts' />
        }

        return (
            <div className={classes.sendpost}>
                {redirect}
                <h1>Add a post</h1>
                <label >Title</label><br/>
                <input type='text' name = 'title' value={this.state.title} onChange={this.changeHandler}></input><br/>
                <label>Content</label><br/>
                <textarea rows='4'  name='body' value={this.state.body} onChange={this.changeHandler}></textarea><br/>
                <label>Author</label><br/>
                <select  name='author' value={this.state.author} onChange={this.changeHandler}>
                    <option value='max'>Max</option>
                    <option value='manu'>Manu</option>
                </select><br/>
                <button onClick={this.postDataHandler}>add Post</button>
            </div>
        );
    }
}

export default Sendpost;