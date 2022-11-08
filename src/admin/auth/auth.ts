import argon2 from "argon2";
import {Logger} from '../utils/logger';

export function authenticationClosure({userModel, roleModel}) {
    return function (email, password) {
        return authentication(email, password, userModel, roleModel);
    }
}



export async function authentication(email, password, user_model, role_model) {
     const user = await user_model.findOne({email});
     if (!user) return false;

     const matched = await argon2.verify(user.password, password);
     if (!matched) return false;
     const role = await role_model.findOne({_id: user.role});
     Logger('auth').info("user role ", role);
     return {
         ...user._doc,
         role,
     };
 }
