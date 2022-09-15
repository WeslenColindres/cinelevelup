const User = require('../models/user')


const getAllUser = async (req, res) => {
    try {
        const user = await User.find({});
        res.json({ status: 'ok', data: user });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({
                status: "FAILED",
                data: { error: error?.message || error },
            })
    }
};


const getOneUser = async (req, res) => {
    if (!req.query.user_name) {
        res
            .status(400)
            .send({
                status: "FAILED",
                data: {
                    error: "error en los parametros de email resividos",
                }
            })
    }
    try {
        let user_name = req.query.user_name
     
        let password = req.query.password
        
        const user = await User.find({ user_name: user_name, password: password });
        if (!user) {
            res.status(404).json({
                message: "This user does not exist!"
            });
        } else {
            res.json(user);
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

const createNewUser = async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        res.status(201).json({
            message: "Successfully registered User!"
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

const updateOneUser = async (req, res) => {
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            req.body,
            { new: true }
        );

        res.json({
            message: 'Cliente atualizado con exito!',
            data: { user }
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

const deleteOneUser = async (req, res) => {
    if (!req.params.userId) {
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
        await User.findOneAndDelete({
            _id: req.params.userId
        });

        res.json({
            message: 'Successfully deleted user!'
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
    getAllUser,
    getOneUser,
    createNewUser,
    updateOneUser,
    deleteOneUser
}