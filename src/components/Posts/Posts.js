import React, { useState, useEffect } from 'react';

function Posts() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(res => setData(res))
    }, []);

    const postItems = data.map(post => {
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

export default Posts;