import express from "express";
import mongoose from "mongoose";
import Routes from "./src/routes/index"

const app = express();

app.use(express.json());

app.use(Routes)

app.listen(process.env.PORT, async () => {
    console.log("----------------------");
    
    mongoose.connect(process.env.DB_HOST!).then(()=>{console.log("MongoDB Connect")}).catch((er)=>{console.log("MongoDB Error", er)})
    console.log("Server Start")
  });
  