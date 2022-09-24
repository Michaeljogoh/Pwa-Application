const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller')

//Read Users
router.get('/',userController.Read);


//Create Users
router.post('/', userController.Create);


//Modify 
router.put('/:id', userController.Modify);


// Delete
router.delete('/:id', userController.Delete)


module.exports = router;