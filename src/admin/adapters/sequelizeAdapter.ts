import AdminJS, {BaseDatabase} from "adminjs";
import {Logger} from "../utils/logger";
import {is_access_granted} from "../auth/policies/isAccessGranted";
import merge from "lodash.merge";
import Labels from '../utils/labels';

export class FixDatabaseSequelize extends BaseDatabase {
    database_name: string;
    conn: any;
    res:any

    constructor(database, options) {
        super(database.sequelize);

        this.database_name = database.name || 'sequelize';
        this.conn = database.sequelize || database;
        this.res = this.to_resources(this.conn.models, options);
        this.resources = this.res;
    }

    to_resources = (models, {options, features, type}) => {
        let resources = [];
        for (const key in models) {
            if (Object.hasOwnProperty.call(models, key)) {
                // not resourcing parse
                let notResourcing = false;
                const toChange = Labels.translations_names(type).filter(
                    (value) => value.old_name === key
                );
                if (!toChange.length) notResourcing = true;

                const element = models[key];

                resources.push({
                    resource: element,
                    options: this.getOptions(options[key], key, notResourcing),
                });
            }
        }
        return resources;
    }

    getOptions(resourceOptions = {}, key, notResourcing = true) {
        const baseOptions = {
            parent: this.database_name,
            actions: {
                search: {
                    isAccessible: notResourcing
                        ? false
                        : is_access_granted({
                            parent: this.database_name,
                            resourceName: key,
                            actionRequested: "show",
                        }),
                },
                show: {
                    isAccessible: notResourcing
                        ? false
                        : is_access_granted({
                            parent: this.database_name,
                            resourceName: key,
                            actionRequested: "show",
                        }),
                },
                list: {
                    isAccessible: notResourcing
                        ? false
                        : is_access_granted({
                            parent: this.database_name,
                            resourceName: key,
                            actionRequested: "list",
                        }),
                },
                new: {
                    isAccessible: notResourcing
                        ? false
                        : is_access_granted({
                            parent: this.database_name,

                            resourceName: key,
                            actionRequested: "edit",
                        }),
                },
                edit: {
                    isAccessible: notResourcing
                        ? false
                        : is_access_granted({
                            parent: this.database_name,

                            resourceName: key,
                            actionRequested: "edit",
                        }),
                },
                delete: {
                    isAccessible: notResourcing
                        ? false
                        : is_access_granted({
                            parent: this.database_name,

                            resourceName: key,
                            actionRequested: "delete",
                        }),
                },
                bulkDelete: {
                    isAccessible: notResourcing
                        ? false
                        : is_access_granted({
                            parent: this.database_name,

                            resourceName: key,
                            actionRequested: "bulkDelete",
                        }),
                },
            },
        };
        const obj = merge(baseOptions, resourceOptions);
        Logger('SequelizeAdapter').debug("assigning ", resourceOptions);
        Logger('SequelizeAdapter').debug("resulting obj ", obj);
        return obj;
    }

}
