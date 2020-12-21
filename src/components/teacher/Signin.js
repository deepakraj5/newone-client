import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import '../../styles/teacher.scss'
import { TextField, Button } from '@material-ui/core'
import AppService from '../../services/AppServices'
import Cookies from 'universal-cookie'

const Signin = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const cookie = new Cookies()
    const histoy = useHistory()

    const handleSignin = () => {
        AppService.teacherSignin(username, password).then((res) => {
            cookie.set('jwt_token', res.data.token, { path: '/' })
            histoy.push('/teacher/home')
        }).catch((error) => {
            console.log(error.response.data)
        })
    }

    return (
        <div className="teacher-container">

            <div className="teacher-login-box">
                <div className="t-signin">
                    <h4>Teacher Signin</h4>
                    <form>
                        <TextField value={username} onChange={e => setUsername(e.target.value)} className="text-filed" placeholder="Username" label="Username" type="text" />

                        <br /> <br />
                               
                        <TextField value={password} onChange={e => setPassword(e.target.value)} className="text-filed" placeholder="Password" label="Password" type="password" />
                    </form>

                    <div className="btn">
                        <Button onClick={handleSignin} variant="contained" color="primary">Login</Button>
                    </div>

                    New here, <Button color="secondary" onClick={props.handleSignup}>Signup</Button>
                </div>
            </div>

        </div>
    );
}

export default Signin