import {model, Schema, Types} from 'mongoose';
import {Logger} from "../../../admin/utils/logger";

const resource_name = "User"

interface IUser {
    email: string;
    password: string
    role: Types.ObjectId
}


const user_schema = new Schema<IUser>({
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: Schema.Types.ObjectId, ref: 'Role'}
});

export function init_resource(mongoose) {
    get_schema(mongoose);
}

export function get_model(mongoose) {
    Logger('user').debug(mongoose.models);
    return mongoose.models[resource_name];
}

export function get_schema(mongoose) {
    mongoose.models[resource_name] = mongoose.model(resource_name, user_schema);
}


export const User = model<IUser>('User', user_schema);

export default (
    {
        init_resource,
        get_model,
        get_schema

    }
)
