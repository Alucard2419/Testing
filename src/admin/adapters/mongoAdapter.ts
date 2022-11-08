import {is_access_granted} from "../auth/policies/isAccessGranted";
import {Logger} from "../utils/logger";
import merge from 'lodash.merge';



export class FixDatabaseMongo
{
    resources: any;
    database_name: string;
    conn:any;
    res: any;
    constructor(database, options = {
        options: {},
        features: {}
    }) {
        this.database_name = database.name || 'mongo';
        this.conn = database.mongoose || database;
        this.resources = this.to_resources(
            this.conn.models,
            options.options,
            options.features
        );
    }

    to_resources = (models, options = {}, features = {}) => {
        let resources = [];
        for (const key in models) {
            Logger('MongoAdapter').debug("toResources ", key);
            if (Object.hasOwnProperty.call(models, key)) {
                resources.push({
                    resource: models[key],
                    options: this.getOptions(options[key], key),
                    features: this.getFeatures(features[key]),
                });
            }
        }
        return resources;
    };

    getOptions(resourceOptions = {}, key) {
        const baseOptions = {
            parent: this.database_name,
            actions: {
                search: {
                    isAccessible: is_access_granted({
                        parent: this.database_name,
                        resourceName: key,
                        actionRequested: "search",
                    }),
                },
                show: {
                    isAccessible: is_access_granted({
                        parent: this.database_name,
                        resourceName: key,
                        actionRequested: "show",
                    }),
                },
                list: {
                    isAccessible: is_access_granted({
                        parent: this.database_name,

                        resourceName: key,
                        actionRequested: "list",
                    }),
                },
                new: {
                    isAccessible: is_access_granted({
                        parent: this.database_name,

                        resourceName: key,
                        actionRequested: "edit",
                    }),
                },
                edit: {
                    isAccessible: is_access_granted({
                        parent: this.database_name,

                        resourceName: key,
                        actionRequested: "edit",
                    }),
                },
                delete: {
                    isAccessible: is_access_granted({
                        parent: this.database_name,

                        resourceName: key,
                        actionRequested: "delete",
                    }),
                },
                bulkDelete: {
                    isAccessible: is_access_granted({
                        parent: this.database_name,

                        resourceName: key,
                        actionRequested: "bulkDelete",
                    }),
                },
            },
        };
        const obj = merge(baseOptions, resourceOptions);
        Logger('MongoAdapter').debug("assigning ", baseOptions, resourceOptions);
        Logger('MongoAdapter').debug("resulting obj ", obj);
        return obj;
    }

    getFeatures(resourceFeatures = []) {
        return [...resourceFeatures];
    }
}
