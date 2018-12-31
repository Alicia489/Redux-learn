import React, {Component} from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';

class PostList extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    } 

    render() {
        console.log('Postlist is ', this.props.posts);
        return <div>Hi I am postlist</div>
    }
}

const mapStateToProps = (state) => {
    console.log('State is , ', state);
   return {posts: state.posts}
}

export default connect(mapStateToProps, {fetchPosts})(PostList);