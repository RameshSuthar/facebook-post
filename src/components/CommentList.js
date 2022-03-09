import React, { useState, useEffect } from 'react';
import env from "react-dotenv";
import axios from 'axios';
import CreateComment from './CreateComment';
import uuid from 'react-uuid';
import "./CommentList.css";
import Comment from "./Comment";

const BASE_URL = "https://api.giphy.com/v1/gifs/";
const API_KEY = `${env.REACT_APP_GIPHY_API_KEY}`;

const CommentList = () => {
    const [comments, setComments] = useState([]);
    const [gifs, setGifs] = useState([]);

    //adding the comment to the comment list
    const addComment = (comment, src) => {
        const newComment = new Object({
            comment: comment,
            id: uuid(),
            gifUrl: (src !== undefined) ? src : ""
        });
        setComments(prevComments => [...prevComments, newComment]);
    }

    //intially when the component will mount, at taht time getting 4 trending gifs
    useEffect(() => {
        axios.get(`${BASE_URL}trending?api_key=${API_KEY}`, {
            params: {
             limit: 4
            }
        })
        .then((res) => {
            setGifs(prevGifs => res.data)
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    //making an api call to get the gif which were searched by the user
    const searchGifs = (name) => {
        console.log(name);
        axios.get(`${BASE_URL}search?api_key=${API_KEY}`, {
            params: {
             q: name,
             limit: 5
            }
        })
        .then((res) => {
            setGifs(prevGifs => res.data)
        }).catch((err) => {
            console.log(err);
        })
    }

    const UIComments = comments.map(comment => <Comment key={comment.id} comment={comment.comment} gifUrl={comment.gifUrl} name="Anonymous" />)
    //console.log(gifs);
    return (
    <div className="main">
        <div className="title">
            <img src="https://www.freepnglogos.com/uploads/logo-facebook-png/logo-facebook-facebook-logo-transparent-png-pictures-icons-and-0.png" width="200" alt="Reflection, Logo, Blue, Letter F, Png Facebook, Shine" />
        </div>
	    <div className="container">
	    	<div className="col-md-12 fbcomment">

	    		<div className="body_comment">
                <CreateComment addComment={addComment} searchGifs={searchGifs} gifs={gifs}/>
	    			<div className="row">
	    				<ul id="list_comment" className="col-md-12">
	    					{UIComments}
	    				</ul>
	    			</div>
	    		</div>
	    	</div>
	    </div>
    </div>
    )
}

export default CommentList;