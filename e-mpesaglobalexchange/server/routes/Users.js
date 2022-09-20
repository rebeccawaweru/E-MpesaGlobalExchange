const express = require('express')
const router = express.Router();
const {createUser,adminlogin,adminPassword,newpassword2, login,getUser,getusers,resetpassword,newpassword,updateUser} = require('../controllers/Users');

router.post('/newuser', createUser)
router.route('/login').post(login)
router.route('/getuser/:id').get(getUser)
router.route('/updateuser/:id').patch(updateUser)
router.route('/reset').post(resetpassword)
router.route('/newpassword').post(newpassword)
router.route('/getusers').get(getusers)

router.route('/adminlogin').post(adminlogin);
router.route('/adminreset').post(adminPassword)
router.route('/newpassword2').post(newpassword2)

module.exports = router;