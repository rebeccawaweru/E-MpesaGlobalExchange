const express = require('express')
const router = express.Router();
const {newTransfer, getTransfers} = require('../controllers/transfer');

router.route('/').post(newTransfer).get(getTransfers);

module.exports = router;