"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const config_1 = require("./config");
class App {
    constructor() {
        this.app = express();
    }
    conectar() {
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
        this.app.use(methodOverride());
        mongoose.connect(config_1.urlDB, (err, res) => {
            if (err) {
                console.log('Error al conectarse a la Base de Datos: ', err);
            }
            this.app.listen(config_1.SERVER_PORT, () => {
                console.log('Servidor corriendo en el puerto ', config_1.SERVER_PORT);
            });
        });
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map