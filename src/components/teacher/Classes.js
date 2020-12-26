import React from 'react'
import '../../styles/teacher.scss'
import AppBar from './AppBar'
import ClassCard from './ClassCard'

const Classes = () => {
    return (
        <div className="home-container">

            <div className="home-header">
                <h4>Student Management App</h4>
            </div>

            <div className="home-body">

                <AppBar />
                
                <ClassCard />

            </div>

        </div>
    );
}

export default Classes