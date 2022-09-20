const express = require('express')
const router = express.Router()
const {newTransaction,getTransaction} = require('../controllers/transaction')

router.route('/').post(newTransaction).get(getTransaction)

module.exports = router