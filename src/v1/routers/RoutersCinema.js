const express = require('express');


const router = express.Router();


const cinemaController = require( '../../controllers/ControllerCinema' )


router
    .get('/', cinemaController.getAllCinema)
    .get('/:cinemaId', cinemaController.getOneCinema)
    .post('/', cinemaController.createNewCinema)
    .put('/:cinemaId', cinemaController.updateOneCinema)
    .delete('/:cinemaId', cinemaController.deleteOneCinema);

module.exports = router;