 

import mongoose from "mongoose";


const Connection=async()=>{


    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('mongodb connected')
    }catch(error){
        console.error("error connectign to the db",error)
        process.exit(1)
    }
}

export default Connection