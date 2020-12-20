import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from '../components/index/App'
import TeacherAuth from '../components/teacher/TeacherAuth'
import Student from '../components/student/Student'
import TeacherSignup from '../components/teacher/Signup'
import TeacherClasses from '../components/teacher/Classes'
import TeacherNewClass from '../components/teacher/NewClass'
import TeacherJoinClass from '../components/teacher/JoinClass'
import TeacherProfile from '../components/teacher/Profile'
import TeacherSettings from '../components/teacher/Settings'

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={App} exact={true} />
                    <Route path='/teacherauth' component={TeacherAuth} />
                    <Route path='/student' component={Student} />
                    <Route path='/tsignup' component={TeacherSignup} />
                    <Route path='/teacher/home' component={TeacherClasses} />
                    <Route path="/teacher/newclass" component={TeacherNewClass} />
                    <Route path="/teacher/joinclass" component={TeacherJoinClass} />
                    <Route path="/teacher/profile" component={TeacherProfile} />
                    <Route path="/teacher/settings" component={TeacherSettings} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default AppRouter