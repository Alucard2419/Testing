import AdminJS, {AdminJSOptions} from "adminjs";
import AdminJSMongoose from "@adminjs/mongoose";
const pool = [];
import AdminJSSequelize from "@adminjs/sequelize";
import Labels, {database_labels} from "../utils/labels";
import {FixDatabaseSequelize} from "./sequelizeAdapter";
import {FixDatabaseMongo} from "./mongoAdapter";
import authDatabase from "../../sources/authDatabase";
import tiendaDatabase from "../../sources/tiendaDatabase";
import genericDatabase from "../../sources/genericDatabase";
import {Logger} from "../utils/logger";
import {componentLoader, Components} from "../components.bundler";
import theme from "../theme";

function addDatabase(){
    database_labels.filter(
        (onlyPostgres) => onlyPostgres.DIALECT === "postgres"
    ).forEach((value) => {
        let instance;
        switch (value.type) {
            case "TIENDA":
                instance = tiendaDatabase;
                break;
            case "SERVICE": {
                instance = genericDatabase;
            }
        }
        const database = new FixDatabaseSequelize(
            instance.get_pool_instance(value.NAME),
            {
                options: instance.options,
                type: value.type,
            }
        );
        pool.push(database);
    });
}
function add_auth_database() {
    const mongoose = authDatabase.get_mongoose_instance();
    Logger('addAuthDatabse').debug(mongoose.mongoose.models);
    pool.push(
        new FixDatabaseMongo(mongoose, {
            options: authDatabase.options,
            features: authDatabase.features,
        })
    );
}


function apply_conf() {
    AdminJS.registerAdapter(AdminJSSequelize);
    AdminJS.registerAdapter(AdminJSMongoose);

    const labels = {
        loginWelcome: 'Sibucán', // this could be your project name
    };

    Labels.translations_names("SERVICE").forEach((value) => {
        labels[value.old_name] = value.new_name;
    });
    Labels.translations_names("TIENDA").forEach((value) => {
        labels[value.old_name] = value.new_name;
    });

    const conf: AdminJSOptions = {
        rootPath: "/admin",
        locale: {
            language: 'en',
            translations: {
                labels,
            },
        },
        assets: {
            styles: ['/index.css','/styles.css',],
        },
        componentLoader,
        version: {
            admin: true,
            app:'2.0.0',
        },
        dashboard: {
          component: Components.Dashboard,
        },
        resources: [],
        branding: {
            theme,
            companyName: 'Sibucán',
            logo: 'https://sibucan-admin-panel.herokuapp.com/assets/sibucan_logo.png'
        },
        pages: {
            'Custom Page': {
                component: Components.PageTest,
                icon: 'Purchase'
            },
            'Product Test': {
                component: Components.ProductTest,
                icon: 'Purchase'
            }
        }
    };
    pool.forEach((value) => {
        if (value.resources) conf.resources.push(...value.resources);
    });
    const adminJS = new AdminJS(conf);

    return { adminJS };
}

export default {
    addDatabase,
    apply_conf,
    add_auth_database,
    pool,
}
