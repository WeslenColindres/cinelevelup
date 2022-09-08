const BranchOffice = require('../models/branchoffice')


const getAllBranchOffice = async (req, res) => {
    try {
        const branchoffice = await BranchOffice.find({})
        .populate('movies.movie_id');
        res.json({ status: 'ok', data: branchoffice });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({
                status: "FAILED",
                data: { error: error?.message || error },
            })
    }
};


const getOneBranchOffice = async (req, res) => {
    if (!req.params.branchofficeId) {
        res
            .status(400)
            .send({
                status: "FAILED",
                data: {
                    error: "error en los parametros de id resividos",
                }
            })
    }
    try {
        const branchoffice = await BranchOffice.findById(req.params.branchofficeId);
        if (!branchoffice) {
            res.status(404).json({
                message: "This branchoffice does not exist!"
            });
        } else {
            res.json(branchoffice);
        }

    } catch (error) {
        res
            .status(error?.status || 500)
            .send({
                status: "FAILED",
                data: { error: error?.message || error },
            })
    }

};

const createNewBranchOffice = async (req, res) => {
    const branchoffice = new BranchOffice(req.body);

    try {
        await branchoffice.save();
        res.status(201).json({
            message: "Successfully registered BranchOffice!"
        });
    } catch (error) {
        if (error.code === 11000) {
            res
                .status(error?.status || 500)
                .send({
                    status: "FAILED",
                    data: { error: error?.message || error },
                })
        } else {
            res
                .status(error?.status || 500)
                .send({
                    status: "FAILED",
                    data: { error: error?.message || error },
                })
        }

    }

};

const updateOneBranchOffice = async (req, res) => {
    try {
        const branchoffice = await BranchOffice.findOneAndUpdate(
            { _id: req.params.branchofficeId },
            req.body,
            { new: true }
        );

        res.json({
            message: 'Cliente atualizado con exito!',
            data: { branchoffice }
        });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({
                status: "FAILED",
                data: {
                    error: error?.massage || error
                }
            })

    }

};

const deleteOneBranchOffice = async (req, res) => {
    if (!req.params.branchofficeId) {
        res
            .status(400)
            .send({
                status: "FAILED",
                data: {
                    error: "el parametro id esta vacio"
                }
            });
            return;
    }
    try {
        await BranchOffice.findOneAndDelete({
            _id: req.params.branchofficeId
        });

        res.json({
            message: 'Successfully deleted branchoffice!'
        });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({
                status: "FAILED",
                data: {
                    error: error?.message || error
                }
            })
    }

};


module.exports = {
    getAllBranchOffice,
    getOneBranchOffice,
    createNewBranchOffice,
    updateOneBranchOffice,
    deleteOneBranchOffice
}