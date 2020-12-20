import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from '../components/index/App'
import TeacherAuth from '../components/teacher/TeacherAuth'
import Student from '../components/student/Student'
import TeacherSignup from '../components/teacher/Signup'
import TeacherHome from '../components/teacher/Home'

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={App} exact={true} />
                    <Route path='/teacherauth' component={TeacherAuth} />
                    <Route path='/student' component={Student} />
                    <Route path='/tsignup' component={TeacherSignup} />
                    <Route path='/teacherhome' component={TeacherHome} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default AppRouter