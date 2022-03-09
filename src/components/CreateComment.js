import React, { useState } from 'react';
import Gif from "./Gif";

const CreateComment = (props) => {
    const [toggleGif, setToggleGif] = useState(false);
    const [currGif, setCurrGif] = useState({src: ""});
    const [searchQuery, setSearchQuery] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        const newComment = e.target.form[0].value;
        (newComment && props.addComment(newComment, currGif.src));
        setCurrGif({src: ""})
        e.target.form[0].value = "";
    }

    const handleSearchGif = (name) => {
      setSearchQuery({name});
      props.searchGifs(name);
      console.log(searchQuery);
    }

    const handleGifs = () => {
        setToggleGif(prevState => !prevState);
    }

    const addGif =(gifSrc) => {
        setCurrGif({
            src: gifSrc
        });
    }

    return (
            <div className="row">
			    <div className="avatar_comment col-md-1">
			      <img src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg" alt="avatar"/>
			    </div>
			    <div className="box_comment col-md-11">
                <form className="form-area">
                    <div className="comment-area">
                        <textarea name="comment" className="commentar" placeholder="Create a post..."></textarea>
                        {currGif.src && <img src={currGif.src} />}
                    </div>
                  <div className="box_post">
                    <div className='pull-left'>
                       <button onClick={handleGifs} type="button">gifs</button>
                       {toggleGif && <Gif gifs={props.gifs} addGif={addGif} handleSearchGif={handleSearchGif}/>}
                    </div>
			        	<div className="pull-right">
			        	  <span>
			        		<img className="min-img" src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg" alt="avatar" />
			        		<i className="fa fa-caret-down"></i>
			        	  </span>
			        	  <button onClick={handleClick} type="button">Post</button>
			        	</div>
			          </div>
                    </form>
			    </div>
			</div>
    )
}

export default CreateComment;