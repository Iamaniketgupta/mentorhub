import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors'
const app = express()

app.use(cors({
    origin: 'http://localhost:5173',
    credentials:true
}))

// all middlewares
app.use(express.json())
app.use(express.urlencoded());
app.use(express.static("public"))
app.use(cookieParser());


// various  routes 
import mentorRouter from './src/routes/mentor.routes.js'
import menteeRouter from './src/routes/mentee.route.js'

app.use("/api/v1/mentor" , mentorRouter);
app.use("/api/v1/mentee" , menteeRouter);





export {app} 

