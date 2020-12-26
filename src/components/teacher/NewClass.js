import React, { useState } from 'react'
import { SnackbarProvider, useSnackbar } from 'notistack'
import '../../styles/teacher.scss'
import AppBar from './AppBar'
import CreateClass from './NewClass.CreateClass'
import AppServices from '../../services/AppServices'

const _NewClass = () => {

    const [className, setClassName] = useState('')
    const [subjectName, setSubjectName] = useState('')

    const { enqueueSnackbar } = useSnackbar()

    const handleCreateClass = async () => {
        console.log(className, subjectName)

        try {
            let newClass = await AppServices.createClass(className, subjectName)
            enqueueSnackbar(newClass.data.message, {
                variant: 'info'
            })
        } catch (e) {
            console.log(e)
        }

    }

    return (
        <div className="home-container">

            <div className="home-header">
                <h4>Student Management App</h4>
            </div>

            <div className="home-body">

                <AppBar />

                <CreateClass 
                    handleCreateClass={handleCreateClass} 
                    className={className} 
                    subjectName={subjectName} 
                    setClassName={setClassName}
                    setSubjectName={setSubjectName}
                />

            </div>

        </div>
    );
}

export default function NewClass () {
    return (
        <SnackbarProvider 
            maxSnack={4}
            anchorOrigin={{
                horizontal: 'right',
                vertical: 'top'
            }}
        >
            <_NewClass />
        </SnackbarProvider>
    );
}