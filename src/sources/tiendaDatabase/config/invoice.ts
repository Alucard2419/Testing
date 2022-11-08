import {SELECTOR} from "../../../admin/components.bundler";
import {Logger} from "../../../admin/utils/logger";
import {genericGetList, genericInsertBulk} from "../../../admin/controllers/genericController";

const MODELNAME = "api_invoice";


export function getOptions (getPoolInstance){
    return {
    id: MODELNAME + "_id",
        properties: {
        products: {
            components: {
                show: SELECTOR,
                    new: SELECTOR,
                    edit: SELECTOR,
            },

            props: { name: MODELNAME, getAction: "getProducts" },
        },
    },
    actions: {
        getProducts: {
            isVisible: false,
                actionType: "record",
                components: false,
                handler: async (request, response, context) => {
                const parent = context.resource._decorated.options.parent;
                const id =
                    request.query && request.query.id ? request.query.id : null;
                const { api_product, api_invoice_products } = await getPoolInstance(
                    parent
                ).sequelize.models;

                // modelsconst
                return genericGetList(
                    api_product,
                    api_invoice_products,
                    "product",
                    "name",
                    {
                        invoice_id: id,
                    }
                );
            },
        },

        SaveData: {
            actionType: "record",
                isVisible: false,
                components: false,
                handler: async (request, response, context) => {
                const parent = context.resource._decorated.options.parent;
                const data = JSON.parse(request.query.data);
                const id = data && data.id ? data.id : null;
                const idList = data && data.list ? data.list : null;
                const toSave = data && data.toSave ? data.toSave : null;

                let intermedianModel;
                let as;
                switch (toSave) {
                    case "products":
                        intermedianModel = await getPoolInstance(parent).sequelize
                            .models.api_invoice_products;
                        as = "product_id";
                        break;
                    default:
                        Logger('Invoice').error("error not 'toSave' provided", toSave);
                        break;
                }

                return genericInsertBulk(
                    intermedianModel,
                    as,
                    {
                        invoice_id: id,
                    },
                    idList
                );
            },
        },
    },
};
}
