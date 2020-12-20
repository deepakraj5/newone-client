import React from 'react'
import { useHistory } from 'react-router-dom'
import '../../styles/teacher.scss'
import Signin from './Signin'

const TeacherAuth = () => {

    const history = useHistory()

    const handleSignup = () => {
        history.push('/tsignup')
    }

    return (
        <div>
            <Signin handleSignup={handleSignup} />
        </div>
    );
}

export default TeacherAuth