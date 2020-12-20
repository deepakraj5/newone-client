import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import AppService from '../../services/AppServices'
import '../../styles/teacher.scss'
import AppBar from './AppBar'
import NewClass from './NewClass'
import JoinClass from './JoinClass'
import Profile from './Profile'
import Settings from './Settings'

const Home = () => {

    useEffect(() => {
        AppService.teacherProfile().then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    return (
        <div>
            
        </div>
    );
}

export default Home