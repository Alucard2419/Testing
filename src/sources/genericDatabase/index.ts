import {database_labels} from '../../admin/utils/labels';
import {Sequelize} from "sequelize";
import {Logger} from "../../admin/utils/logger";
import {getOptions as get_options_membership }  from './config/membership';
import {getOptions as get_options_chatroom} from "./config/chatroom";
import {getOptions as get_options_service} from "./config/service";
import {initModels} from "./models/init-models";

const uri_database = database_labels.filter(
     (value) => value.DIALECT === 'postgres'&& value.type === 'SERVICE'
);



const get_pool_instance = (function () {
    let pool = {}

    return function (instance) {
        const data = uri_database.filter( (value) => value.NAME === instance);

        if (data.length)
            if (pool[instance]) return pool[instance];
            else
                pool[instance] = {
                    name: data[0].NAME,
                    ...connect(data[0].URI),
                };

        return pool[instance];
    };
})();

const def = {
    options: {
        api_chatroom: get_options_chatroom(get_pool_instance),
        api_membership: get_options_membership(get_pool_instance),
        api_service: get_options_service(get_pool_instance),
    }
}



const connect = (URI) => {
    const log = process.env.SEQUELIZE_LOG === "true";
    const sequelize = new Sequelize(URI, {
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
        logging: log,
    });

    initModels(sequelize);
    // try {
    //     sequelize.sync().then();
    // } catch (err) {
    //     Logger('source/genericDatabase').error(err);
    // }
    (async () => {
        try {
            await sequelize.sync();
            } catch (err)
            {
            Logger('source/genericDatabase').error(err);
            }
    })();

    return {sequelize};
};

export default {
    ...def,
   get_pool_instance
}




