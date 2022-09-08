//Import express to index.js
const express = require('express');

const cors = require('cors');

//Importing body-parser to Get Body Information
const bodyparser = require('body-parser');

//*** Importing First Version of V1Routes ***/
const v1UserRouter = require('./v1/routers/RoutersUser');
const v1CinemaRouter = require('./v1/routers/RoutersCinema');
const v1MovieRouter = require('./v1/routers/RoutersMovie');
const v1TicketRouter = require('./v1/routers/RoutersTicket');
const v1BranchOfficeRouter = require('./v1/routers/RoutersBranchOffice');

const app = express();

//Parse aApplication/JSON
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(cors());

//*** V1Router hooked ***/
app.use('/api/v1/Users', v1UserRouter);
app.use('/api/v1/Cinemas', v1CinemaRouter);
app.use('/api/v1/Movies', v1MovieRouter);
app.use('/api/v1/Tickets', v1TicketRouter);
app.use('/api/v1/BranchOffices', v1BranchOfficeRouter);



module.exports = app;