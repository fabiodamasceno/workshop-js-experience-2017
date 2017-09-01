
import axios from 'axios'

const apiUrl = "https://api.github.com/users/"

export default (name) => axios.get(`${apiUrl}${name}/repos`)