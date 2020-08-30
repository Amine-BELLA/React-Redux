import React, { useState } from 'react'

function PostForm() {
    const [postData, setPostData] = useState({
        title: '',
        body: ''
    });

    function handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        setPostData(previousData => {
            return (
                {
                    ...previousData,
                    [name]: value
                }
            );
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
            .then(res => res.json())
            .then(res => console.log(res))
    }

    return (
        <div>
            <h2>Add Post</h2>
            <form onSubmit={handleSubmit} >
                <div>
                    <label>Title:</label> <br />
                    <input onChange={handleChange} name='title' type="text"></input>
                </div>
                <br />
                <div>
                    <label>Body:</label> <br />
                    <textarea onChange={handleChange} name='body' type="text"></textarea>
                </div>
                <br />
                <button type="submit">Save</button>
            </form>
            <hr />
        </div>
    );
}

export default PostForm;
