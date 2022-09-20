require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDB = require('./db/connect')
const app = express()
const userRouter = require('./routes/Users')
const payRouter = require('./routes/i-pay')
const paymentRouter = require('./routes/payments')
const transactionRouter = require('./routes/transaction')
const transferRouter = require('./routes/transfer')
app.use(cors())
app.use(express.json())
app.use('/globalauth', userRouter);
app.use('/pay', payRouter)
app.use('/payment', paymentRouter)
app.use('/transaction',transactionRouter)
app.use('/transfer', transferRouter)

const port = process.env.PORT || 5000

const start = async()=>{
  try {
    await connectDB(process.env.MONGO_URI)
   app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
   }) 
  } catch (error) {
    console.log(error.message)
  }  
}

start()