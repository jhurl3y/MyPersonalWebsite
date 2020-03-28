const express = require("express");
const path = require("path");
const dev = process.env.NODE_ENV !== "production";
const next = require("next");
const compression = require("compression");
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();

server.use(compression());
server.use("/_next", express.static(path.join(__dirname, ".next")));
server.get("/", (req, res) => app.render(req, res, "/"));
server.get("*", (req, res) => handle(req, res));

module.exports = server;
