import {database_labels} from '../../admin/utils/labels';
import {Sequelize} from "sequelize";
import {Logger} from "../../admin/utils/logger";
import {getOptions} from "./config/invoice";
import {initModels} from "./models/init-models";
const uri_database = database_labels.filter(
    (value) => value.DIALECT === 'postgres'&& value.type === 'TIENDA'
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
        api_invoice: getOptions(get_pool_instance)
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
    try {
        sequelize.sync().then();
    } catch (err) {
        Logger('source/genericDatabase').error(err);
    }

    return {sequelize};
};

export default {
    ...def,
    get_pool_instance
}
