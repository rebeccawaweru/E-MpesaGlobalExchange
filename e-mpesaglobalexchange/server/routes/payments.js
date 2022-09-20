const express = require('express')
const router = express.Router();
const {newpayment,getpayments} = require('../controllers/payment');

router.post('/newpayment', newpayment)
router.route('/payments').get(getpayments)

module.exports = router;