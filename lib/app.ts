import * as express from "express";
import * as bodyParser from "body-parser";
import * as methodOverride from "method-override";
import * as mongoose from "mongoose";
import * as http from "http";
import { SERVER_PORT, urlDB } from './config';


export  class App {
    public app: express.Application;

    public constructor() {
        this.app = express();
    }

    public conectar() {
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.use(bodyParser.json());
        this.app.use(methodOverride());
        mongoose.connect(urlDB, (err, res) => {
            if (err) {
                console.log('Error al conectarse a la Base de Datos: ',  err);
            }
            this.app.listen(SERVER_PORT, () =>{
                console.log('Servidor corriendo en el puerto ', SERVER_PORT);
            })
        });
    }

}