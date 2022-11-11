
import {Logger} from "../../../admin/utils/logger";

import {genericGetList, genericInsertBulk} from "../../../admin/controllers/genericController"
import {Components} from "../../../admin/components.bundler";

const MODELNAME = "api_membership";
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

export function getOptions (getPoolInstance) {
  return {
    properties: {
      details: {
        //no back
        components: {
          show: Components.Selector,
          new: Components.Selector,
          edit: Components.Selector,
        },

        props: { name: MODELNAME, getAction: "getDetails" },
      },
      permissions: {
        components: {
          show: Components.Selector,
          new: Components.Selector,
          edit: Components.Selector,
        },

        props: { name: MODELNAME, getAction: "getPermissions" },
      },
    },
    actions: {
      getDetails: {
        isVisible: false,
        actionType: "record",
        components: false,
        handler: async (request, response, context) => {
          console.warn(context)
          const parent = context.resource._decorated.options.parent.name;
          const id =
              request.query && request.query.id ? request.query.id : null;
          const { api_membershipdetails, api_membership_details } =
              await getPoolInstance(parent).sequelize.models;

          // modelsconst
          return genericGetList(
              api_membershipdetails,
              api_membership_details,
              "membershipdetail",
              "es_name",
              {
                membership_id: id,
              }
          );
        },
      },
      getPermissions: {
        isVisible: false,
        actionType: "record",
        components: false,
        handler: async (request, response, context) => {
          const parent = context.resource._decorated.options.parent.name;
          console.log(parent)
          const id =
              request.query && request.query.id ? request.query.id : null;
          if (!id) return "not id provided";

          const { api_permission, api_membership_permissions } =
              await getPoolInstance(parent).sequelize.models;

          // modelsconst
          return genericGetList(
              api_permission,
              api_membership_permissions,
              "permission",
              "name",
              {
                membership_id: id,
              }
          );
        },
      },

      SaveData: {
        actionType: "record",
        isVisible: false,
        components: false,
        handler: async (request, response, context) => {
          const parent = context.resource._decorated.options.parent.name;
          console.log(parent)
          const data = JSON.parse(request.query.data);
          const id = data && data.id ? data.id : null;
          const idList = data && data.list ? data.list : null;
          const toSave = data && data.toSave ? data.toSave : null;

          let intermedianModel;
          let as;
          switch (toSave) {
            case "details":
              intermedianModel = await getPoolInstance(parent).sequelize
                  .models.api_membership_details;
              as = "membershipdetails_id";
              break;
            case "permissions":
              intermedianModel = await getPoolInstance(parent).sequelize
                  .models.api_membership_permissions;
              as = "permission_id";
              break;
            default:
              Logger('chatroom conf').error("error not 'toSave' provided");
              break;
          }

          return genericInsertBulk(
              intermedianModel,
              as,
              {
                membership_id: id,
              },
              idList
          );
        },
      },
    },
  };
}





