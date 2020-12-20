import axios from 'axios'
import authHeader from './AuthHeader'

const baseUrl = 'http://localhost:3001'

class AppServices {

    newTeacher(teacher) {
        return axios.post(baseUrl + '/newTeacher', teacher)
    }

    teacherSignin(username, password) {
        return axios.post(baseUrl + '/teacher/signin', { username, password })
    }

    teacherProfile() {
        return axios.get(baseUrl + '/profile', {
            headers: authHeader()
        })
    }
}

export default new AppServices()