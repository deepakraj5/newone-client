import React from 'react'
import '../../styles/teacher.scss'
import { TextField, Button } from '@material-ui/core'

const CreateClass = (props) => {
    return (
        <div>
            <div className="content">
                
                <div className="newclass-form-container">

                    <div className="newclass-form">
                        <form>
                            <table cellSpacing="30">
                                <thead>

                                    <tr>
                                        <td>Class Name</td>
                                        <td>
                                            <TextField onChange={e => props.setClassName(e.target.value)} value={props.className} label="ClassName" variant="outlined" size="small" />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Subject Name</td>
                                        <td>
                                            <TextField onChange={e => props.setSubjectName(e.target.value)} value={props.subjectName} label="Subject Name" variant="outlined" size="small" />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td></td>
                                        <td>
                                            <Button onClick={props.handleCreateClass} size="small" variant="contained" color="primary">Create Class</Button>
                                        </td>
                                    </tr>

                                </thead>
                            </table>
                        </form>
                    </div>
                    
                </div>

            </div>
        </div>
    );
}

export default CreateClass