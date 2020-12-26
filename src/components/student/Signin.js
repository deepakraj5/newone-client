import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import '../../styles/student.scss'
import { TextField, Button } from '@material-ui/core'
import AppService from '../../services/AppServices'
import Cookies from 'universal-cookie'

const Signin = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const cookie = new Cookies()
    const history = useHistory()

    const handleSignup = () => {
        history.push('/student/signup')
    }

    const handleSignin = () => {
        AppService.studentSignin(username, password).then((res) => {
            cookie.set('jwt_token', res.data.token, { path: '/' })
            history.push('/student')
        }).catch((error) => {
            console.log(error.response.data)
        })
    }

    return (
        <div className="student-container">

            <div className="student-login-box">
                <div className="s-signin">
                    <h4>Student Signin</h4>
                    <form>
                        <TextField value={username} onChange={e => setUsername(e.target.value)} className="text-filed" placeholder="Username" label="Username" type="text" />

                        <br /> <br />
                               
                        <TextField value={password} onChange={e => setPassword(e.target.value)} className="text-filed" placeholder="Password" label="Password" type="password" />
                    </form>

                    <div className="btn">
                        <Button onClick={handleSignin} variant="contained" color="primary">Login</Button>
                    </div>

                    New here, <Button color="secondary" onClick={handleSignup}>Signup</Button>
                </div>
            </div>

        </div>
    );
}

export default Signin