import React from 'react'
import { FaCommentAlt } from "react-icons/fa";
import { FaShareFromSquare } from "react-icons/fa6";
import './comment.css'
const Comment = ({head, detail, day, comments, shares}) => {
    return (
        <div className='comment'>
            <h1>{head}</h1>
            <p>{detail}</p>
            <button>Read More</button>
            <div className='comment-detail'>
                <div className='comment-detail-a'>
                <a>{day}</a>
                <a><FaCommentAlt/> {comments} Comments</a>
                <a><FaShareFromSquare/> {shares} Shares</a>
                </div>
                <div className='comment-detail-b'>
                    <p>keyword</p>
                    <p>tag</p>
                    <p>post</p>
                </div>
            </div>
        </div>
    )
}

export default Comment
