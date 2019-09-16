const express = require('express');

const http = require('http')

const dishRouter = require('./dishes')

const leaderRouter = require('./Routes/leaders')




const app = express();

app.use("/leader",leaderRouter)

app.use("/dishes",dishRouter)

const server = http.createServer(app)

server.listen(2000)