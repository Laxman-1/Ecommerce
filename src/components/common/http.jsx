export const apiUrl='http://localhost:8000/api'


export const adminToken=()=>{
    const data=(localStorage.getItem('adminInfo'))
    return data.token;
}