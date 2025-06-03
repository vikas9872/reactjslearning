import React, { useState } from 'react';
import axios from 'axios';
import './Post.css';

const Post = () => {
    const [formData, setFormData] = useState({
        userId: '',
        title: '',
        body: ''
    });
    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts', formData)
            .then((response) => {
                setSubmittedData(response.data);
                setFormData({
                    userId: '',
                    title: '',
                    body: ''
                });
            })
            .catch((error) => {
                alert(error)
            });
    };

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <h2>POST</h2>

                <div className="form-group">
                    <label>User ID:</label>
                    <input type="number" name="userId" value={formData.userId} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Title:</label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Body:</label>
                    <textarea name="body" value={formData.body} onChange={handleChange}></textarea>
                </div>

                <button type="submit">Submit</button>
            </form>
            {submittedData && (
                <div>
                    <h3>Submitted Data:</h3>
                    <p>User ID: {submittedData.userId}</p>
                    <p>Title: {submittedData.title}</p>
                    <p>Body: {submittedData.body}</p>
                    <p>Post ID (from API): {submittedData.id}</p>
                </div>
            )}
        </div>
    );
};

export default Post;
