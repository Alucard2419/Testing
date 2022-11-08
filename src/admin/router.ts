import AdminJSExpress from '@adminjs/express';

import AdminJS from 'adminjs';


import ConnectPgSimple from 'connect-pg-simple';
import session from 'express-session';
import { Router } from 'express';


// export const authenticateUser = async (email, password) => {
//   const user = await AdminModel.findOne({ email });
//   if (user && (await argon2.verify(user.password, password))) {
//     return user;
//   }
//   return null;
// };

import {auth} from "./auth";
import AuthDatabase from "../sources/authDatabase";



const mongoose = AuthDatabase.get_mongoose_instance().mongoose;

const user = auth(mongoose);

export const expressAuthenticatedRouter = (adminJs: AdminJS, router: Router | null = null) => {
  const ConnectSession = ConnectPgSimple(session);

  // const sessionStore = new ConnectSession({
  //   conObject: {
  //     connectionString: process.env.POSTGRES_DATABASE_URL,
  //     ssl: process.env.NODE_ENV === 'production',
  //   },
  //   tableName: 'session',
  //   createTableIfMissing: true,
  // });

  return AdminJSExpress.buildAuthenticatedRouter(
      adminJs,
      {
        authenticate: user,
        cookieName: 'adminjs',
        cookiePassword: process.env.SESSION_SECRET ?? 'sessionsecret',
      },
      router,
      {
        resave: true,
        saveUninitialized: true,
        secret: process.env.SESSION_SECRET ?? 'sessionsecret',
        cookie: {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
        },
        name: 'adminjs',
      }
  );
};

