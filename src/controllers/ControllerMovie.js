const Movie = require('../models/movie')


const getAllMovie = async (req, res) => {
    try {
        const movie = await Movie.find({});
        res.json({ status: 'ok', data: movie });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({
                status: "FAILED",
                data: { error: error?.message || error },
            })
    }
};


const getOneMovie = async (req, res) => {
    if (!req.params.movieId) {
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
        const movie = await Movie.findById(req.params.movieId);
        if (!movie) {
            res.status(404).json({
                message: "This movie does not exist!"
            });
        } else {
            res.json(movie);
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

const createNewMovie = async (req, res) => {
    const movie = new Movie(req.body);

    try {
        await movie.save();
        res.status(201).json({
            message: "Successfully registered Movie!"
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

const updateOneMovie = async (req, res) => {
    try {
        const movie = await Movie.findOneAndUpdate(
            { _id: req.params.movieId },
            req.body,
            { new: true }
        );

        res.json({
            message: 'Cliente atualizado con exito!',
            data: { movie }
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

const deleteOneMovie = async (req, res) => {
    if (!req.params.movieId) {
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
        await Movie.findOneAndDelete({
            _id: req.params.movieId
        });

        res.json({
            message: 'Successfully deleted movie!'
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
    getAllMovie,
    getOneMovie,
    createNewMovie,
    updateOneMovie,
    deleteOneMovie
}