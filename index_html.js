var server = require("./server_html.js");
var router = require("./router2.js");
var requestHandlers = require("./requestHandlersHtml.js");

var handle = {};
handle["/"] = requestHandlers.iniciar;
handle["/iniciar"] = requestHandlers.iniciar;
handle["/subir"] = requestHandlers.subir;

server.iniciar(router.route, handle);