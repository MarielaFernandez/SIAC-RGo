import React, {Component} from 'react';
import axios  from 'axios';

class Posts extends Component{
    constructor(){
      super();
      this.state={
        posts: []
      };
    }
    componentDidMount(){
        this.getPosts();
    }
    getPosts(ced){
      axios.get('https://apis.gometa.org/cedulas/115420618'
      ).then(response=>{
          console.log(response.data.results);
        this.setState({ posts: response.data.results});
    
        
    });
    }
    render(){
        return(
        <div>
            <ul>
                { this.state.posts.map(post=>
                        <li>{post.lastname1}</li>

                     )}
                     
            </ul>
           
        </div>
        )
    }
  }
  
  export default Posts;