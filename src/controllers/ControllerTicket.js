const Ticket = require('../models/ticket')


const getAllTicket = async (req, res) => {
    try {
        const ticket = await Ticket.find({})
        .populate('user_id');
        res.json({ status: 'ok', data: ticket });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({
                status: "FAILED",
                data: { error: error?.message || error },
            })
    }
};


const getOneTicket = async (req, res) => {
    if (!req.params.ticketId) {
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
        const ticket = await Ticket.find({user_id: req.params.ticketId });
        if (!ticket) {
            res.status(404).json({
                message: "This ticket does not exist!"
            });
        } else {
            res.json(ticket);
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

const createNewTicket = async (req, res) => {
    const ticket = new Ticket(req.body);

    try {
        await ticket.save();
        res.status(201).json({
            message: "Successfully registered Ticket!"
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

const updateOneTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findOneAndUpdate(
            { 
                _id: req.params.ticketId
            },
            req.body,
            { new: true }
        );

        res.json({
            message: 'Cliente atualizado con exito!',
            data: { ticket }
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

const deleteOneTicket = async (req, res) => {
    if (!req.params.ticketId) {
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
        await Ticket.findOneAndDelete({
            _id: req.params.ticketId
        });

        res.json({
            message: 'Successfully deleted ticket!'
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
    getAllTicket,
    getOneTicket,
    createNewTicket,
    updateOneTicket,
    deleteOneTicket
}