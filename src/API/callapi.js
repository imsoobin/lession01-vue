import axios from "axios";
export const getData = () => {
    return axios({
        url: 'http://localhost:3000/data',
        method: 'GET',
    })
}

export const getDataId = (id) => {
    return axios({
        url: 'http://localhost:3000/data/' + id,
        method: 'GET',
    })
}

export const addTask = (task) => {
    return axios({
        url: 'http://localhost:3000/data',
        method: 'POST',
        data: task
    })
}

export const deleteTask = (id) => {
    return axios({
        url: 'http://localhost:3000/data/' + id,
        method: 'DELETE'
    })
}

export const upadateStatus = (id, data) => {
    return axios({
        url: 'http://localhost:3000/data/' + id,
        method: 'PUT',
        data: data
    })
}