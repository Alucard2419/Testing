import AuthDatabase from '../../sources/authDatabase';
import {authenticationClosure} from './auth';
import AdminJS from "adminjs";
import AdminJSMongoose from "@adminjs/mongoose";

AdminJS.registerAdapter(AdminJSMongoose);

export const auth = (mongoose) =>
    authenticationClosure({
        roleModel: AuthDatabase.roleModel.get_model(mongoose),
        userModel: AuthDatabase.userModel.get_model(mongoose)
    });

