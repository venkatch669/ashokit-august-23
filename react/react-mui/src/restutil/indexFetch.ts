const URL='https://jsonplaceholder.typicode.com';

export const getAPI = (pathVariable:string)=>{
    return fetch(URL+pathVariable)
}

export const postAPI = (pathVariable:string, body:any)=>{
    const payload={
        method:'POST',
        body:JSON.stringify(body)
    }
    return fetch(URL+pathVariable, payload)
}

export const deleteAPI = (pathVariable:string)=>{
    return fetch(URL+pathVariable)
}

export const putAPI = (pathVariable:string, body:any)=>{
    const payload={
        method:'PUT',
        body:JSON.stringify(body)
    }
    return fetch(URL+pathVariable, payload)
}
