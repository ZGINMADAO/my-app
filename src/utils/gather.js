import Cookies from 'js-cookie'

export function setToken(token) {
    Cookies.set('TOKEN', token, {expires: 1})
}
export function getToken() {
    return Cookies.get('TOKEN')
}
export function signOut() {
    Cookies.remove('TOKEN')
}
