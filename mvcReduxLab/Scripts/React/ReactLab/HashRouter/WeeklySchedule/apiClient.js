import axios from 'axios'

export default {
    StartPort: (args) => {
        const url = '/MA08/MA080102/GetStartPort'
        return axios.post(url, args)
    },
    EndPort: (args) => {
        const url = '/MA08/MA080102/GetEndPort'
        return axios.post(url, args)
    },
    //LoadFormData: (args) => {
    //    const url = '/ReduxLab/MyTodoMVC/LoadFormData'
    //    return axios.post(url, args)
    //},
    //LoadALL: (args) => {
    //    const url = '/ReduxLab/MyTodoMVC/LoadALL'
    //    return axios.post(url, args)
    //},
    //DeleteFormData: (args) => {
    //    const url = '/ReduxLab/MyTodoMVC/Delete'
    //    return axios.post(url, args)
    //},
    //IsCheckedFormData: (args) => {
    //    const url = '/ReduxLab/MyTodoMVC/isChecked'
    //    return axios.post(url, args)
    //}
}