import mongoose from "mongoose";
import { app } from "./app";



const start = async()=>{
  if(!process.env.JWT_KEY){
    throw new Error('JWT_KEY Must be Defined')
  }
  if(!process.env.MONGO_URI){
    throw new Error('MONGO_URI Must be Defined')
  }

  try {
    
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected To MongoDb`);
    
  } catch (err) {
      console.error(err);
      
  }

}

app.listen(3000, () => {
  console.log(`Listening on Port 3000!`);
});

start();