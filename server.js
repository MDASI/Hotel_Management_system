const express = require('express')
//const auth=require("./routes/middleware/auth.js")


var cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
app.use(cors())
app.use(bodyParser.json())
const db=require('./db')
app.use(express.json())
const path = require('path')


const roomsRoutes = require('./routes/roomsRoute')
const userRoute = require('./routes/userRoute')
const bookingsRoute=require('./routes/bookingsRoute')
const adminRoute=require('./routes/adminRoute')

app.use('/api/rooms',roomsRoutes)
app.use('/api/users' , userRoute)
app.use('/api/bookings' , bookingsRoute)
app.use('/api/adminb' , adminRoute)

if(process.env.NODE_ENV ==='production')
{
    app.use('/' , express.static('client/build'))

    app.get('*' , (req , res)=>{

        res.sendFile(path.resolve(__dirname  , 'client/build/index.html'))

    })
}

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Node JS Server Started ${port}`))
