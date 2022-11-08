import mongoose from 'mongoose'
import {database_labels} from '../../admin/utils/labels';
import {Logger} from '../../admin/utils/logger';
import User  from './models/user';
import Role from './models/role';
import {get_options as get_options_user, getFeatures} from './config/user';
import {get_options as get_options_role} from './config/role';


const URI = database_labels.find( value => value.DIALECT === 'mongo').URI;

const def = {
    mongoose,
    roleModel: Role,
    userModel: User,
    options: {
        User: get_options_user(),
        Role: get_options_role(),
    },
    features: {
        User: getFeatures(),
    },
};

const init_mongo_models = (mongoose) => {
    def.userModel.init_resource(mongoose);
    def.roleModel.init_resource(mongoose);
};



const get_mongoose_instance = (function () {
    mongoose
        .connect(URI,{

        })
        .then(() => Logger("AuthDatabase").info('done'))
        .catch((value) => Logger('AuthDatabase').error(value))
        .finally( () => Logger('AuthDatabase').info('end'));

        init_mongo_models(mongoose);

        return function () {
            return {
                name: database_labels.find(value => value.DIALECT === 'mongo').NAME,
                mongoose,
            };
        };
})();

export default {
    get_mongoose_instance,
    ...def,
}
