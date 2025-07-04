import mongoose from "mongoose";


export const connectDB=async ()=>{
    await mongoose.connect('mongodb+srv://geokoumo:Geokat923@cluster0.iyg9ill.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}