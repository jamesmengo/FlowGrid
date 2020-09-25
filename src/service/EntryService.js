import axios from 'axios'

const ENTRY_API_URL = 'http://localhost:8080/api'

class EntryService {
    retriveAllEntries() {
        return axios.get(`${ENTRY_API_URL}/entries`)
    }

    deleteEntry = (id) => {
        return axios({
            method: 'delete',
            url: 'http://localhost:8080/api/entries',
            data: {
                id
            }
        })
    }
}

export default new EntryService()