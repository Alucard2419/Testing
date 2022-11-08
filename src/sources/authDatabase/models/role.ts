import  {model, Schema} from "mongoose";

const resource_name = 'Role';
import Labels from '../../../admin/utils/labels'
import mongooseAutoPopulate from 'mongoose-autopopulate';


export interface IRole {
    name: string;
    super_admin: boolean;
    grants: [{
        resource: string;
        parent: string;
        actions: [
            {
                action: string
            }
        ]
    }]
}


const role_schema = new Schema<IRole>({
    name: {type:String, required: true},
    super_admin: {type: Boolean, required: true},
    grants: [{
       resource: {
           type: String,
           enum: Labels.models_name,
           autopopulate: true,
       },
       parent: {
           type: String,
           enum: Labels.parent_names,
           autopopulate: true,
       },
       actions: [{
           action: {
               type: String,
               enum: [
                   "*",
                   "search",
                   "show",
                   "list",
                   "new",
                   "edit",
                   "delete",
                   "bulkDelete",
               ],
           },
       }],
    }],
});

role_schema.plugin(mongooseAutoPopulate);

export function init_resource(mongoose) {
    get_schema(mongoose);
}

export function get_model(mongoose) {
    return mongoose.models[resource_name];
}

export function get_schema(mongoose) {
    mongoose.models[resource_name] = mongoose.model(resource_name, role_schema)
}

export const Role = model<IRole>('Role', role_schema);

export default (
    {
        get_schema,
        get_model,
        init_resource,

    }
)
