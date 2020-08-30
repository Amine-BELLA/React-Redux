import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../Actions/postAction';

function Posts(props) {
    useEffect(() => {
        props.fetchPosts();
    }, []);

    const postItems = props.posts.map(post => {
        return (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        );
    })
    return (
        <div>
            <h2>Posts</h2>
            {postItems}
        </div>
    );

}

function mapStateToProps(state) {
    return (
        {
            posts: state.posts.items
        }
    )

}

export default connect(mapStateToProps, { fetchPosts })(Posts);