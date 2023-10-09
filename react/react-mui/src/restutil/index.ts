import axios from 'axios';
const URL='https://jsonplaceholder.typicode.com';
export const getAPI = (pathVariable:string)=>{
    return axios.get(URL+pathVariable)
}

export const postAPI = (pathVariable:string, body:any)=>{
    return axios.post(URL+pathVariable, JSON.stringify(body))
}

export const deleteAPI = (pathVariable:string)=>{
    return axios.delete(URL+pathVariable)
}

export const putAPI = (pathVariable:string, body:any)=>{
    return axios.put(URL+pathVariable, JSON.stringify(body))
}
