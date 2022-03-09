import React from 'react';

const Comment = (props) => {
    return (
        <li className="box_result row">
			<div className="avatar_comment col-md-1">
				<img src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg" alt="avatar"/>
			</div>
			<div className="result_comment col-md-11">
				<h4>{props.name}</h4>
				<p>{props.comment}</p>
				{props.gifUrl && <img className='comment-img' src={props.gifUrl}/>}
				<div className="tools_comment">
					<a className="like" href="#">Like</a>
					<span aria-hidden="true"> · </span>
					<a className="replay" href="#">Reply</a>
					<span aria-hidden="true"> · </span>
					<i className="fa fa-thumbs-o-up"></i> <span className="count">1</span> 
					<span aria-hidden="true"> · </span>
					<span>26m</span>
				</div>
			</div>
		</li>
    )
}

export default Comment;