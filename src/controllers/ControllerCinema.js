const Cinema = require('../models/cinema')


const getAllCinema = async (req, res) => {
    try {
        const cinema = await Cinema.find({})
        .populate('branch_office.branch_office_id');
        res.json({ status: 'ok', data: cinema });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({
                status: "FAILED",
                data: { error: error?.message || error },
            })
    }
};


const getOneCinema = async (req, res) => {
    if (!req.params.cinemaId) {
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
        const cinema = await Cinema.findById(req.params.cinemaId);
        if (!cinema) {
            res.status(404).json({
                message: "This cinema does not exist!"
            });
        } else {
            res.json(cinema);
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

const createNewCinema = async (req, res) => {
    const cinema = new Cinema(req.body);

    try {
        await cinema.save();
        res.status(201).json({
            message: "Successfully registered Cinema!"
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

const updateOneCinema = async (req, res) => {
    try {
        const cinema = await Cinema.findOneAndUpdate(
            { _id: req.params.cinemaId },
            req.body,
            { new: true }
        );

        res.json({
            message: 'Cliente atualizado con exito!',
            data: { cinema }
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

const deleteOneCinema = async (req, res) => {
    if (!req.params.cinemaId) {
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
        await Cinema.findOneAndDelete({
            _id: req.params.cinemaId
        });

        res.json({
            message: 'Successfully deleted cinema!'
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
    getAllCinema,
    getOneCinema,
    createNewCinema,
    updateOneCinema,
    deleteOneCinema
}