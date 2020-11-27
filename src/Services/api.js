import axios from 'axios'

const api = axios.create({
    baseURL: "http://www.nokeynoshade.party/api/queens/"
})

export default api