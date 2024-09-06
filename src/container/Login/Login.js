import React from 'react'
import './login.css'
import { MdOutlineLogin } from "react-icons/md";
const Login = () => {
    return (
        <div className='login'>
            <div className='login-head'>
                <p><MdOutlineLogin size={20}/> Login</p>
            </div>
            <div className='login-input'>
                <form>
                    <input placeholder='Username' />
                    <input placeholder='Password'/>
                    <button>Log In</button>
                </form>
            </div>
        </div>
    )
}

export default Login
