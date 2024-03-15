import mongoose from 'mongoose';

const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.mongo_url)
        console.log(`Connected to MongoDB database ${mongoose.connection.host}`)
    }catch (error){
        console.log(`MongoDB error ${error}`)
    }
}

export default connectDB;