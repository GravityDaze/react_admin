import axios from 'axios'
import { message } from 'antd'

const instance = axios.create({
    baseURL: "http://120.55.193.14:5000",
    timeout: 10000
})

// 请求拦截器
instance.interceptors.request.use(config => config, err => Promise.reject(err))

// 响应拦截器
instance.interceptors.response.use(response => {
    const {status,msg} = response.data
    if(status  === 0){
        return response
    }else {
        message.error(msg)
        return Promise.reject(msg)
    }

}, err => {
    console.log(err)
    // const { response } = err
    // if (response) {
    //     switch (response.status) {
    //         case 401: //权限不足
    //         Message.warning('登录过期')
    //         store.dispatch('user/logout').then( ()=>{
    //             router.push('/login')
    //         } )
    //             break
    //         case 404: 
    //         Message.warning('404 NOT FOUND')
    //             break
    //     }
    // } else {
    //     if (!window.navigator.onLine) {
    //         return Message.warning('网络错误')
    //     }
    // }
    return Promise.reject(err)
})

export default instance
