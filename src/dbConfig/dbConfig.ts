
import mongoose from "mongoose";

export default function connect() {
    try {
        console.log(process.env.MONGODB_URL)
        mongoose.connect("mongodb+srv://Sonali_Kanawade:SjM2oTjYfrawdOTx@cluster0.defb2.mongodb.net/")
        const conection = mongoose.connection;

        conection.on("connected",() => {
            console.log("succesfully connected")
        })
        conection.on("error",(err) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
            process.exit();
        })
        
    } catch (error) {
        console.log('Something goes wrong!');
        console.log(error);
    }
}
