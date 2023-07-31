const {StatusCodes} = require('http-status-codes')
const {CustomError} = require('../errors')
const errorHandlerMiddleware = (err,req,res,next)=>{

    if(err instanceof CustomError){
        return res.status(err.statusCode).send(err.message)
    }

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Something went wrong')

}
module.exports = errorHandlerMiddleware