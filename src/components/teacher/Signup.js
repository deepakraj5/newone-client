import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import '../../styles/teacher.scss'
import { TextField, FormControl, InputLabel, Button, Select, MenuItem, Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import AppServices from '../../services/AppServices'

const Signup = () => {

    const history = useHistory()

    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [degree, setDegree] = useState('')
    const [state, setState] = useState('')
    const [district, setDistrict] = useState('')
    const [zip, setZip] = useState('')
    const [cv, setCV] = useState(undefined)
    const [terms, setTerms] = useState(true)

    const [snackOpen, setSnackOpen] = useState(false)
    const [alert, setAlert] = useState('')

    const handleSnackClose = (e, reason) => {
        if(reason === 'clickaway') {
            return ;
        }
        setSnackOpen(false)
    }

    const handleFormSubmit = () => {
        const formData = new FormData()
        formData.append('cv', cv)
        formData.append('username', username)
        formData.append('name', name)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('phoneNumber', phoneNumber)
        formData.append('degree', degree)
        formData.append('state', state)
        formData.append('district', district)
        formData.append('zip', zip)

        AppServices.newTeacher(formData).then((res) => {
            history.push('/teacherauth')
        }).catch((error) => {
            setSnackOpen(true)
            const errors = error.response.data.error
            if(errors) {
                for(let prop in errors) {
                    setAlert(errors[prop])
                }
            }
            if(Object.keys(errors).length === 0) {
                setAlert('Upload the CV')
            }
        })
    }

    return (
        <div className="teacher-signup-container">

            <div className="signup-photo-grid">
                <h4>New World Of Tech</h4>
            </div>

            <div className="signup-content-grid">

                <div className="signup-left-grid">

                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label>Name</label>
                                </td>
                                <td>
                                    <TextField value={name} onChange={e => setName(e.target.value)} className="teacher-form" size="small" label="Name" variant="outlined" />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <label>Username</label>
                                </td>
                                <td>
                                    <TextField value={username} onChange={e => setUsername(e.target.value)} className="teacher-form" size="small" label="Username" variant="outlined" />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <label>Email</label>
                                </td>
                                <td>
                                    <TextField value={email} onChange={e => setEmail(e.target.value)} className="teacher-form" size="small" label="Email" variant="outlined" />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <label>Phone</label>
                                </td>
                                <td>
                                    <TextField value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} className="teacher-form" size="small" label="Phone Number" variant="outlined" />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <label>Zip</label>
                                </td>
                                <td>
                                    <TextField value={zip} onChange={e => setZip(e.target.value)} className="teacher-form" size="small" label="Zip" type="number" variant="outlined" />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    
                                </td>
                                <td>
                                    <input type="checkbox" onChange={e => setTerms(!terms)} /> &nbsp;
                                    <label>Accept Terms and Conditions</label>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                </div>

                <div className="signup-right-grid">

                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label>Degree</label>
                                </td>
                                <td>
                                    <FormControl className="teacher-form">
                                        <InputLabel>Select Degree</InputLabel>
                                        <Select label="Select Degree" value={degree} onChange={e => setDegree(e.target.value)}>
                                            <MenuItem value="B Tech">B Tech</MenuItem>
                                            <MenuItem value="BE">BE</MenuItem>
                                        </Select>
                                    </FormControl>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <label>State</label>
                                </td>
                                <td>
                                    <FormControl className="teacher-form">
                                        <InputLabel>Select State</InputLabel>
                                        <Select label="Select State" value={state} onChange={e => setState(e.target.value)}>
                                            <MenuItem value="Tamilnadu">Tamilnadu</MenuItem>
                                            <MenuItem value="Kerala">Kerala</MenuItem>
                                        </Select>
                                    </FormControl>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <label>District</label>
                                </td>
                                <td>
                                    <TextField value={district} onChange={e => setDistrict(e.target.value)} className="teacher-form" size="small" label="District" variant="outlined" />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <label>Password</label>
                                </td>
                                <td>
                                    <TextField value={password} onChange={e => setPassword(e.target.value)} className="teacher-form" size="small" label="Password" type="password" variant="outlined" />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <label>CV</label>
                                </td>
                                <td>
                                    <input type="file" onChange={e => setCV(e.target.files[0])} />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    
                                </td>
                                <td>
                                    <Button onClick={handleFormSubmit} variant="contained" color="primary" disabled={terms}>Submit</Button>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                </div>

                <Snackbar anchorOrigin={{
                    vertical:"top",
                    horizontal:"right"
                }} open={snackOpen} onClose={handleSnackClose} autoHideDuration={5000}>
                    <Alert severity="error">{alert}</Alert>
                </Snackbar>

            </div>

        </div>
    );
}

export default Signup