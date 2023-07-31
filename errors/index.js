const CustomError = require('./custom-error')
const BadRequestError = require('./bad-request')
const unAuthenticatedError = require('./unauthenticated')
const NotFoundError = require('./not-found-error')

module.exports = {
    CustomError,
    BadRequestError,
    unAuthenticatedError,
    NotFoundError
}