const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('express-async-errors')
const marianRouter = require('./routes/marianRoute')
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const connectDB = require('./db/connect')
const app = express()
//json parser
app.use(cors())
app.use(express.json())
app.use('/api/maria',marianRouter)
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)
const port = process.env.PORT || 5000
const start = async()=>{
    await connectDB(process.env.MONGO_URI)
    app.listen(port,()=>{
        console.log(`Server listening on port ${port}.... `);
    })
}
start()