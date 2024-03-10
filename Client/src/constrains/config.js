export const API_NOTIFICATION_MESSAGES={
    loading: {
        title : "Loading...",
        message: "Data is being loaded, PLease wait"
    },
    success:{
        tittle:"success",
        message :"Data successfully loaded"
    },
    responseFailure:{
        title: "Error",
        message:"an error occurred while fetching"
    },
    networkError:{
        title:"error",
        message:"unable to connect with the server. please check the network"
    }
}

export const SERVICE_URL={
    userSignup :{
        url: '/signup',
        method : 'POST'
    }
}