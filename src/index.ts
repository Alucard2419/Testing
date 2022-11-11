import AdminJSExpress from "@adminjs/express";


import path from 'path';
import express, {Express} from 'express';

import AdminJS from 'adminjs';


import getHtml from './admin/views/get-html';
import SingInForm from "./admin/views/auth/SingIn/SingInForm";

import AuthDatabase from "./sources/authDatabase";
import databaseManage from './admin/adapters';
import {expressAuthenticatedRouter} from "./admin/router";


export const ADMIN = {
    email: 'admin@example.com',
    password: 'password',
};

databaseManage.addDatabase();
databaseManage.add_auth_database();

const {adminJS} = databaseManage.apply_conf();


const attachAdminJS = async (app: Express) => {


    AdminJS.prototype.renderLogin = async function ({ action, errorMessage }) {
        return getHtml(adminJS, SingInForm, {
            credentials: ADMIN,
            action: action ?? adminJS.options.loginPath,
            errorMessage,
        });
    };
    const adminRouter = expressAuthenticatedRouter(adminJS);




    app.use(adminJS.options.rootPath, adminRouter);
    app.get('/', (req, res) => res.redirect(adminJS.options.rootPath));
    app.use(express.static(path.join(__dirname, '../public')));

};



const start = async () => {
    const app = express();

    app.set('trust proxy', 1) // trust first proxy

    await attachAdminJS(app);

    app.listen(process.env.PORT || 3001, async () => {
        console.log(`AdminJS is under localhost:${process.env.PORT || 3001}/admin`);
    });
};

start();

