const express = require('express')

const router = express.Router()

const
{
getAllApparitions,
getSingleApparition,
createApparition,
updateApparition,
deleteApparition
}=require('../controllers/marianController')

router.route('/').get(getAllApparitions).post(createApparition)
router.route('/:id').get(getSingleApparition).patch(updateApparition).delete(deleteApparition)
module.exports = router