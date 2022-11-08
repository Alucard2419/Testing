// const options = {
//     host: 'localhost',
//     dialect: 'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql',
//     directory: './models', // where to write files
//     port: 'port',
//     caseModel: 'c', // convert snake_case column names to camelCase field names: user_id -> userId
//     caseFile: 'c', // file names created for each model use camelCase.js not snake_case.js
//     singularize: true, // convert plural table names to singular model names
//     additional: {
//         timestamps: false
//         // ...options added to each model
//     },
//     tables: ['table1', 'table2', 'myschema.table3'] // use all tables, if omitted
//     //...
// }

import {Sequelize} from "sequelize";
import {AutoOptions, SequelizeAuto} from "sequelize-auto";

const options = {
    directory: "./models",
    lang: "ts"
}

export const sequelize = new Sequelize(process.env.DATABASE_URI, {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});

const auto = new SequelizeAuto(sequelize,null,null, <AutoOptions>options);

export default class GenerateModels {

    static run () {
        auto.run();
    }
    constructor() {
    }
}

