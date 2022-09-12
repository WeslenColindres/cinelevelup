const express = require('express');


const router = express.Router();


const userController = require( '../../controllers/ControllerUser' )


router
    .get('/', userController.getAllUser)
    .get('/login', userController.getOneUser)
    .post('/', userController.createNewUser)
    .put('/:userId', userController.updateOneUser)
    .delete('/:userId', userController.deleteOneUser);

module.exports = router;