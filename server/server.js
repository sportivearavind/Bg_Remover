import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'


//App config
const PORT = process.env.PORT || 4000    //we are getting the port from env variable
const app = express()                    //initialize the instance using the express package
await connectDB()

//Initialize Middlewares
app.use(express.json())    //whenever we get any request on the server, it will be parsed using the json method
app.use(cors())            //using this we can connect our client, that is running on the diff port

//API routes
app.get('/',(req,res)=>res.send("API Working"))

app.listen(PORT,()=> console.log("Server Running on port " + PORT))