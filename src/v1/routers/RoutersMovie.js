const express = require('express');


const router = express.Router();


const movieController = require( '../../controllers/ControllerMovie' )


router
    .get('/', movieController.getAllMovie)
    .get('/:movieId', movieController.getOneMovie)
    .post('/', movieController.createNewMovie)
    .put('/:movieId', movieController.updateOneMovie)
    .delete('/:movieId', movieController.deleteOneMovie);

module.exports = router;