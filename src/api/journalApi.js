

import axios from 'axios'


const journalApi = axios.create({
    baseURL: 'https://vuex-journal-acd19-default-rtdb.firebaseio.com'
})

export default journalApi