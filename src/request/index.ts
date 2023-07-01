import  axios  from 'axios';

const service = axios.create(
    {
        baseURL: "https://www.fastmock.site/mock/6f5abc9dc3210060969979f42842856c/api",
        timeout: 5000,
        headers:{
            "content-type": "application/json; charset=utf-8"
        }

    }
)

service.interceptors.request.use((config)=>{
    config.headers=config.headers || {}
    if(localStorage.getItem('token')){
        config.headers.token=localStorage.getItem('token')||""
    }
    return config
})

service.interceptors.response.use((res)=>{
    const code:number=res.data.code
    if(code !=200){
        return Promise.reject(res.data)
    }
    return res.data
},(err)=>{
    console.log(err);
}
)

export default service