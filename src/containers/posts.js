import React, { Component, useCallback } from 'react';
import axios from 'axios';
import Post from '../components/post'
import { Route, Link } from 'react-router-dom';
import Fullpost from './fullpost'
class Posts extends Component {


    state = {
        Posts : [],
        
      }

      componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          const posts = response.data.slice(0, 4);
          const updatedPosts = posts.map(post => {
            return {
              ...post,
              author: 'max'
            }
          });
          this.setState({Posts: updatedPosts});
        })
        .catch(error => {
          console.log(error);
        //   this.setState({ error: true });
        });
      }



    //   fullPostHandler = (id) =>{
    //     this.props.history.push({pathname: '/' + id});

    //     // or u can use
    //     // this.props.history.push('/' + id);
    //   }


    render() {

       

          const posts = this.state.Posts.map(post => {
            return (
                <Link to= {'/posts/' + post.id} key ={post.id}>
                <Post 
            title={post.title} 
            author={post.author}
            // clicked = {() => this.fullPostHandler(post.id)}
            />
                </Link>
            
                    // or u can navigate programmingly

            // <Post 
            // key ={post.id}
            // title={post.title} 
            // author={post.author}
            // clicked = {() => this.fullPostHandler(post.id)}
            // />

            );
           
          });
        

        return (
            <div>
                <section className="App">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component = {Fullpost} />
            </div>
        );
    }
}

export default Posts;