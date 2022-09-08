const express = require('express');


const routerTicket = express.Router();


const ticketController = require( '../../controllers/ControllerTicket' )


routerTicket
    .get('/', ticketController.getAllTicket)
    .get('/:ticketId', ticketController.getOneTicket)
    .post('/', ticketController.createNewTicket)
    .put('/:ticketId', ticketController.updateOneTicket)
    .delete('/:ticketId', ticketController.deleteOneTicket);

module.exports = routerTicket;