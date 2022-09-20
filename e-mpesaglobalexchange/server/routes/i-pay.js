const express = require('express')
const router = express.Router();
const {ipay,callback} = require('../controllers/i-pay')


router.route('/i-pay').post(ipay)

router.route('/cbk').get(callback)

module.exports = router;