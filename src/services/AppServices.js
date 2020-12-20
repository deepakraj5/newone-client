import axios from 'axios'

const baseUrl = 'http://localhost:3001'

class AppServices {

    newTeacher(teacher) {
        return axios.post(baseUrl + '/newTeacher', teacher)
    }

    teacherSignin(username, password) {
        return axios.post(baseUrl + '/teacher/signin', { username, password })
    }
}

export default new AppServices()