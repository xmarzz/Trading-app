import axios from 'axios'
import { API_NOTIFICATION_MESSAGES, SERVICE_URL } from '../constrains/config'

const API_URL='https://localhost:8080/'


const axiosInstance=axios.create({
    baseUrl : API_URL,
    timeout: 10000,
    headers:{
        "content-type" : "application/json"
    }
})

axiosInstance.interceptors.request.use(
    function(config){
        return config; 
    },
    function(error){
        return Promise.reject(error) 
    }
)
axiosInstance.interceptors.response.use(
    function (response){
        return processResponse(response)
    },
    function(error){
        return Promise.reject(processError(error))
    }
)

const processResponse=(response)=>{
    if(response?.status===200){
        return {isSucess: true, data: response.data, }
    }else{
        return {
            isFailure: true,
            status: response?.status,
            msg: response?.msg,
            code: response?.code 
        }
    }
}

const processError=(error)=>{
    if(error.response){
        console.log("error in response",error.toJSON())
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGES,
            code : error.response.status 
        }

    }else if(error.request){
        console.log('ERROR IN RESPONSE', error.errortoJSON())
        return{
            isError: true,
            msg: API_NOTIFICATION_MESSAGES,
            code : ""
        }
    }else{

    }
}

const API= {}

for (const [key, value] of Object.entries(SERVICE_URL)){
    API[key] = (body, showUploadProgress, showDownloadProgress)=>
        axiosInstance({
            method: value.method,
            url: value.url,
            data: body,
            responseType: value.responseType,
            onUploadProgress: function(progressEvent){
                if(showUploadProgress){
                    let percentageCompleted = Math.round((progressEvent.loaded *100) /progressEvent.total)
                    showUploadProgress(percentageCompleted)
                }
            },
            onDownloadProgress: function(progressEvent){
                if(showDownloadProgress){
                    let percentageCompleted = Math.round((progressEvent.loaded * 100 ) / progressEvent.total)
                    showDownloadProgress(percentageCompleted)
                }
            }
        })
    }

export {API}

