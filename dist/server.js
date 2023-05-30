"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fastify_1 = __importDefault(require("fastify"));
var server = (0, fastify_1.default)();
var port = 4000;
server
    .get("/", function (req, res) {
    res.send({
        message: "Hello, World from fastify ts!",
    });
})
    .get("/random", function (req, res) {
    res.send({
        number: Math.floor(Math.random() * 100),
    });
});
server.listen(port, function () {
    console.log("server listening on port ".concat(port));
});
