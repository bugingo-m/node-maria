const {BadRequestError,NotFoundError,unAuthenticatedError,} = require('../errors')
const apparitions = require('../model/apparition')
const {StatusCodes} = require('http-status-codes')


const getAllApparitions = async(req,res)=>{
    const allapparitions = await apparitions.find({})
    res.status(StatusCodes.OK).json({allapparitions})
}
const createApparition = async(req,res)=>{
    const {name}=req.body

    if(!name){
        throw new BadRequestError('please provide name')
    }
    const apparition = await apparitions.create(req.body)
    res.status(StatusCodes.CREATED).json({apparition})
}
const getSingleApparition = async(req,res)=>{
    const{id:ID} = req.params
    const apparition = await apparitions.find({_id:ID})
    if(!apparition){
        throw new NotFoundError(`apparition with id:${ID} not found`)
    }
    res.status(StatusCodes.OK).json({apparition})
}
const updateApparition = async(req,res)=>{
    const{id:ID} = req.params
    const apparition = await apparitions.find({_id:ID})
    if(!apparition){
        throw new NotFoundError(`apparition with id:${ID} not found`)
    }
    const updated = await apparitions.findOneAndUpdate({_id:ID},req.body,{
        new:true,
        runValidators:true
    })

    res.status(StatusCodes.OK).json({updated})
}
const deleteApparition = async(req,res)=>{
    const{id:ID} = req.params
    const apparition = await apparitions.find({_id:ID})
    if(!apparition){
        throw new NotFoundError(`apparition with id:${ID} not found`)
    }
    await apparitions.findOneAndDelete({_id:ID})
    res.status(StatusCodes.OK).json({msg:'apparition deleted successfully'})
}

module.exports = {
    getAllApparitions,getSingleApparition,createApparition,updateApparition,
    deleteApparition
}