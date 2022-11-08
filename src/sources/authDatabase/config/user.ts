import argon2 from "argon2";
import {is_access_granted} from "../../../admin/auth/policies/isAccessGranted";
import {generateHash} from "../../../admin/utils/password";
import passwordsFeature from "@adminjs/passwords";

const resourceName = "User"

export function get_options()
{
    return {
        parent: {
            name: "Access",
        },
        properties: {
            password: {
                isVisible: false,
            },
            plainTextPassword: {
                type: "password",
                isVisible: {
                    list: false,
                    edit: true,
                    filter: false,
                    show: false,
                },
            },
        },
        actions: {
            search: {
                isAccessible: is_access_granted({
                    parent: 'Access',
                    resourceName: resourceName,
                    actionRequested: "list",
                }),
            },
            show: {
                isAccessible: is_access_granted({
                    parent: '',
                    resourceName: resourceName,
                    actionRequested: "show",
                }),
            },
            list: {
                isAccessible: is_access_granted({
                    parent: '',
                    resourceName: resourceName,
                    actionRequested: "list",
                }),
            },
            new: {
                isAccessible: is_access_granted({
                    parent: '',
                    resourceName: resourceName,
                    actionRequested: "new",
                }),
                before: async (request) => {
                    if (request.payload.password) {
                        request.payload = {
                            ...request.payload,
                            password: await argon2.hash(request.payload.password),
                        };
                    }
                    return request;
                },
            },
            edit: {
                isAccessible: is_access_granted({
                    parent: '',
                    resourceName: resourceName,
                    actionRequested: "edit",
                }),
            },
            delete: {
                isAccessible: is_access_granted({
                    parent: '',
                    resourceName: resourceName,
                    actionRequested: "delete",
                }),
            },
            bulkDelete: {
                isAccessible: is_access_granted({
                    parent: '',
                    resourceName: resourceName,
                    actionRequested: "bulkDelete",
                }),
            },
        },
    };
}

export function getFeatures() {
    return [
        passwordsFeature({
            properties: {
                password: "plainTextPassword",
                encryptedPassword: "password",
            },
            hash: generateHash,
        }),
    ];
}

