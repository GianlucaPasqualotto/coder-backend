"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var PORT = process.argv[2] || 8080;
app.listen(PORT, function () {
    return console.log("Server listening on port " + PORT + " on process " + process.pid);
});

app.get("/", function (req, res) {
    res.send("Respuesta desde el puerto " + PORT + " en el proceso " + process.pid);
});
