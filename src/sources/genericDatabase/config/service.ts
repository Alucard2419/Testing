import {Components} from "../../../admin/components.bundler";
import {Logger} from "../../../admin/utils/logger";

import {genericGetList, genericInsertBulk} from '../../../admin/controllers/genericController'
const MODELNAME = "api_service";
/*
const defaultCreatedAt = async (response, request, context) => {
  if (request.method !== "post") {
    return response;
  }

  // Here you can save it in your log file or database
  console.log(context.currentAdmin.email, request.payload, context);

  return response;
};
*/

export function getOptions (getPoolInstance)  {
  return {
  properties: {
    followers: {
      components: {
        show: Components.Selector,
            new: Components.Selector,
            edit: Components.Selector,
      },

      props: { name: MODELNAME, getAction: "getUsersFollowers" },
    },
    visits: {
      components: {
        show: Components.Selector,
            new: Components.Selector,
            edit: Components.Selector,
      },

      props: { name: MODELNAME, getAction: "getVisits" },
    },
  },
  actions: {
    getUsersFollowers: {
      isVisible: false,
          actionType: "record",
          components: false,
          handler: async (request, response, context) => {
        const parent = context.resource._decorated.options.parent;
        const id =
            request.query && request.query.id ? request.query.id : null;
        const { api_profile, api_service_followers } =
            await getPoolInstance(parent).sequelize.models;

        // modelsconst
        return genericGetList(
            api_profile, // mainmodel
            api_service_followers, // intermedian model
            "profile", // intermedian model belongs to mainmodel as
            "full_name", // column in mainmodel
            {
              service_id: id, // find intermedian model by this model id
            }
        );
      },
    },
    getVisits: {
      isVisible: false,
          actionType: "record",
          components: false,
          handler: async (request, response, context) => {
        const parent = context.resource._decorated.options.parent;
        const id =
            request.query && request.query.id ? request.query.id : null;
        const { api_profile, api_servicevisit } = await getPoolInstance(
            parent
        ).sequelize.models;
        // modelsconst
        return genericGetList(
            api_profile, // mainmodel
            api_servicevisit, // intermedian model
            "author", // intermedian model belongs to mainmodel as
            "full_name", // column in mainmodel
            {
              service_id: id, // find intermedian model by this model id
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
        if (!id) return "not id provided";
        const idList = data && data.list ? data.list : null;
        const toSave = data && data.toSave ? data.toSave : null;

        let intermedianModel;
        let as = null;
        switch (toSave) {
          case "followers":
            intermedianModel = await getPoolInstance(parent).sequelize
                .models.api_service_followers;
            as = "profile_id";
            break;
          case "visits":
            intermedianModel = await getPoolInstance(parent).sequelize
                .models.api_servicevisit;
            as = "author_id";
            break;
          default:
            Logger('Service').error("error not 'toSave' provided", toSave);
            break;
        }

        return genericInsertBulk(
            intermedianModel,
            as,
            {
              service_id: id,
            },
            idList
        );
      },
    },
  },
};
}

