import React from 'react'
import '../../styles/teacher.scss'
import AppBar from './AppBar'

const Settings = () => {
    return (
        <div className="home-container">

            <div className="home-header">
                <h4>Student Management App</h4>
            </div>

            <div className="home-body">

                <AppBar />

                <div className="content">
                    settings
                </div>

            </div>

        </div>
    );
}

export default Settings