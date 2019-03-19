// dependencies
'use strict';
const express = require('express');
const bodyParser = require('body-parser');

var port = process.env.PORT || 3000;
// create serve and configure it.
const server = express();
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.post('/', function (req, res) {
    if (req.body.queryResult.action == "cancelarPedido") {
        let orderId = parseFloat(req.body.queryResult.parameters.OrderID);
        let response = "El webhook ha cancelado correctamente el pedido "+ orderId;
        res.json({
            "fulfillmentText": response
        });
    }
});

server.listen(port, function () {
    console.log("Server is up and running...");
});