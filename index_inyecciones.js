var server = require("./server_inyecciones.js");
var router = require("./router.js");

server.iniciar(router.route);