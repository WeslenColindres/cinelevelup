const express = require('express');


const router = express.Router();


const branchofficeController = require( '../../controllers/ControllerBranchOffice' )


router
    .get('/', branchofficeController.getAllBranchOffice)
    .get('/:branchofficeId', branchofficeController.getOneBranchOffice)
    .post('/', branchofficeController.createNewBranchOffice)
    .put('/:branchofficeId', branchofficeController.updateOneBranchOffice)
    .delete('/:branchofficeId', branchofficeController.deleteOneBranchOffice);

module.exports = router;