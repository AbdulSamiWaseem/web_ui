import React from 'react'
import './header.css'
import Engage from '../../container/Engage/Engage'
import Options from '../../container/Options/Options'
import Announcement from '../../container/Announcement/Announcement'
import Comments from '../../container/Comments/Comments'
import Login from '../../container/Login/Login'
import Engage2 from '../../container/Engage2/Engage2'
import Scroll from '../../container/Scroll/Scroll'
const Header = () => {
    return (
        <div className='header'>
            <div className='header-container-a'>
                <Options />
                <Engage/>
                <Announcement/>

            </div>
            <div className='header-container-b'>
                <Comments/>
            </div>
            <div className='header-container-c'>
                <Login/>
                <Engage2/>
                <Scroll/>

            </div>

        </div>
    )
}

export default Header
