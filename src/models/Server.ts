import express, { Application } from "express";
import cors from 'cors';
import path from "path";

import { mailchimp, silanes } from '../routes';


import db from "../db/connection";

class Server {
    private app: Application;
    private port: string;

    private apiPaths = {
        mailchimp: '/api/v1/mailchimp',
        silanes: '/api/v1/silanes'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';

        // databse
        // this.dbConnection();

        // middlewares
        this.middlewares();

        // definición de rutas
        this.routes();

        // Timezone
        new Date(new Date().toLocaleString('es-MX', {
            timeZone: 'America/Mexico_City'
        }));
    }

    async dbConnection() {
        // try {
        //     await db.authenticate();
        //     console.log('Database online')
        // } catch (error) {
        //     console.log(error);
        //     throw new Error('error');
        // }
    }

    middlewares() {
        // Cors
        this.app.use(cors({

        }))

        // lectura Body
        this.app.use(express.json());
        this.app.use(express.urlencoded({
            extended: false
        }));

        // this.app.use((req, res, next) => {
        //     next();
        // });

        // carpeta publica
    }

    routes() {
        this.app.use(this.apiPaths.mailchimp, mailchimp);
        this.app.use(this.apiPaths.silanes, silanes);
    }
    
    listen() {

        this.app.listen(this.port, () => {
            console.log('Server runnig on port  ' + this.port);
        })
    }
}

export default Server;