import React, { useState } from 'react'
import Comment from '../Comment/Comment'
import { ImCross } from "react-icons/im";
import './comments.css'
const Comments = () => {
    const commentObj = [
        {
            head: 'Premier Niche Markets',
            detail: 'Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.',
            day: 'Today',
            comments: '2',
            shares: '8'
        },
        {
            head: 'Proactively Envisioned',
            detail: 'Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products. Proactively envisioned multimedia based expertise and cross-media growth strategies.',
            day: 'Yesterday',
            comments: '21',
            shares: '36'
        },
        {
            head: 'Completely Synergize',
            detail: 'Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.',
            day: '2 Days Ago',
            comments: '12',
            shares: '18'
        }
    ]
    const [show, setShow] = useState(true)
    return (
        <div className='comments'>
            {show
                ? <div className='comments-head'>
                    <p><span>Synerize: </span> Seamlessly visualize quality intellectual capital!</p>
                    <p className='cross'><ImCross onClick={() => { setShow(false) }} /></p>
                </div>
                : null
            }

            {commentObj.map((obj) => {
                return (
                    <Comment {...obj} />
                )
            })}


        </div>
    )
}

export default Comments
