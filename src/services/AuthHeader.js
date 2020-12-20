import Cookies from 'universal-cookie'

const cookie = new Cookies()

export default function authHeader () {

    let token = cookie.get('jwt_token')

    if(token) {
        return {
            Authorization: token
        }
    } else {
        return {}
    }
}