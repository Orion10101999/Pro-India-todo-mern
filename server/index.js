require('dotenv').config()

const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const app = express()

const connectDB = require('./config/connectDB.js')
const router = require('./routes/index.js')

app.use(cors({
    credentials : true
}))

app.use(express.json())
app.use(cookieParser())
const PORT = process.env.PORT || 8080

app.get('/',(req,res)=>{
    res.send('Hello World !' + ' server running at ' + PORT)
})



// api endpoints

app.use('/api',router)


connectDB().then(()=>{
    console.log('mongodb atlas connected');

    app.listen(PORT,()=>{
        console.log('server running at ' + PORT);  
    }) 
})
.catch((err)=>{
    console.log('mongodb atlas connection failed');

})