import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentList = ({ postId }) => {

    const [comments, setComments] = useState([]);

    const fetchData = async () => {
        const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`)
            .then(res => {
                setComments(res.data);
            })
            .catch(err => {
                console.log(err);
            });

    };

    useEffect(() => {
        fetchData();
    }, []);

    const renderedComments = comments.map(comment => {
        return <li key={comment.id}>{comment.content}</li>
    });

    return (
        <div>
            <ul>
                {renderedComments}
            </ul>
        </div>
    );
};

export default CommentList;