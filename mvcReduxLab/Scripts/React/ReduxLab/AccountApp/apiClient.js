import axios from 'axios'

export default {
    SaveFormData: (formData) => {
        const url = '/ReduxLab/AccountApp/SaveFormData'
        return axios.post(url, { formData })
    },
    LoadFormData: (args) => {
        const url = '/ReduxLab/AccountApp/LoadFormData'
        return axios.post(url, args)
    }
}
