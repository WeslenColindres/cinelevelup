
const mongoose = require( 'mongoose' );

const mongodbConfig = require( './mongodbConfig' );

const app = require( './app' );

mongoose.connect(mongodbConfig.db, { useNewUrlParser: true }, ( err, res ) => {
    if(err) {
        return console.log( `Error al conectar con la base de datos ${err}` );
    }

    console.log( 'conexion con la base de datos estable' );

    app.listen(mongodbConfig.port, () => {
        console.log( `API Rest corriendo en el puerto ${mongodbConfig.port}` )
    });
});