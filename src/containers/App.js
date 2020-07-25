import React , { Component , Suspense} from 'react';
import Posts from './posts'

// import Sendpost from './sendpost'
// import Fullpost from './fullpost'
import './App.css';
import axios from 'axios';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';

const Sendposts = React.lazy(() => import('./sendpost'));

class App extends Component {

  render(){
   
     return (

      <div className="NavBar">
        <header>
        <nav>
          <ul>
            <li><NavLink to= "/posts" exact>Home</NavLink></li>
            <li><NavLink to={{
              pathname: '/new-post',
              // above is for absolute path for relative path
              // pathname: this.props.match.url + '/new-post'
              hash: '#submit',
              search: '?quick-submit=true'
            }} exact>add post</NavLink></li>
            {/* hash and submit are not for this app its just showing u can use these in case */}
          </ul>
        </nav>
        </header>
        
        {/* <Route path='/' exact render = {() => <h1>Home</h1>}   />; */}

            <Switch>
            
            {/* <Route path='/new-post' exact component = {Sendpost} /> */}
            {/* dynamacally importing */}
            <Route path='/new-post' render={() => (
              <Suspense fallback={<div>Loading...</div>}>
                  <Sendposts />
              </Suspense>
            )}
             />
            <Route path='/posts'  component = {Posts} />
            <Redirect from='/' to='/posts' />
            
        {/* <Route path='/:id' component = {Fullpost} /> */}
        {/* we can use nested route */}
      
            </Switch>
       
      </div>



      /* <section className="App">
         <Fullpost id = {this.state.SelectedPostId}></Fullpost>
      </section>
       <section className="App">
         <Sendpost></Sendpost>
       </section> */
      
        
        
      
    );
  }
}

export default App;
