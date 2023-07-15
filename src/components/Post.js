import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; // to install axios: npm install axios

const Post = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [comment, setComment] = useState("");
    const [commentError, setCommentError] = useState(false);
    
    useEffect(() => {
        const fetchPost = async () => {
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            setPost(res.data);
            setLoading(false);
        }

        catch (err) {
            console.log(err);
            setLoading(false);
            setError(true);
        }
        };

        fetchPost();
    }, [id]);

    useEffect(() => {
        const fetchComments = async () => {
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
            setComments(res.data);
        }

        catch (err) {
            console.log(err);
        }
        };

        fetchComments();
    }
    , [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (comment === "") {
        setCommentError(true);
        return;
        }

        setCommentError(false);
        setComments([...comments, { body: comment, email: "" }]);
        setComment("");
    };

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>Error occured</h1>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <h2>Comments</h2>
            {comments.map((comment) => (
                <div key={comment.id}>
                    <h3>{comment.email}</h3>
                    <p>{comment.body}</p>
                </div>
            ))}
            <form onSubmit={handleSubmit}>
                <input

                    type="text"
                    placeholder="Comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                {commentError && <p>Comment cannot be empty</p>}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Post;