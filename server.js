'use strict';

const express = require('express');

const server = express();

const PORT = process.env.PORT || 5200;

server.use(express.static('./public'));

server.get('/test' ,(request,response) => {
    response.send('Working');
});

server.get('/data',(request, response) => {
    let cats = [
        {name:"sherry"},
        {name:"Newton"},
        {name:"instance"},
    ]
    response.json(cats);
});

server.listen( PORT, () => console.log("Listening on port", PORT));