import {Logger} from "../../../admin/utils/logger";
import {genericGetList, genericInsertBulk} from '../../../admin/controllers/genericController';
import {SELECTOR}from "../../../admin/components.bundler";

const MODELNAME = "api_chatroom";

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

export function getOptions(getPoolInstance) {

  return {
  properties: {
    users: {
      components: {
            show: SELECTOR,
            new: SELECTOR,
            edit: SELECTOR,
      },

      props: { name: MODELNAME, getAction: "getUsersNames" },
    },
    inactiveUsers: {
      components: {
        show: SELECTOR,
            new: SELECTOR,
            edit: SELECTOR,
      },

      props: { name: MODELNAME, getAction: "getInactiveUsersNames" },
    },
  },
  actions: {
    getUsersNames: {
      isVisible: false,
          actionType: "record",
          components: false,
          handler: async (request, response, context) => {
              const parent = context.resource._decorated.options.parent;
        const chatRoomId =
            request.query && request.query.id ? request.query.id : null;
        const { api_profile, api_chatroom_users } = await getPoolInstance(
            parent
        ).sequelize.models;

        // modelsconst
        return genericGetList(
            api_profile,
            api_chatroom_users,
            "profile",
            "full_name",
            {
              chatroom_id: chatRoomId,
            }
        );
      },
    },
    getInactiveUsersNames: {
      isVisible: false,
          actionType: "record",
          components: false,
          handler: async (request, response, context) => {
        const parent = context.resource._decorated.options.parent;
        const id =
            request.query && request.query.id ? request.query.id : null;
        if (!id) return "not id provided";
        const { api_profile, api_chatroom_inactive_users } =
            await getPoolInstance(parent).sequelize.models;

        // modelsconst
        return genericGetList(
            api_profile,
            api_chatroom_inactive_users,
            "profile",
            "full_name",
            {
              chatroom_id: id,
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
        const chatRoomId = data && data.id ? data.id : null;
        const toSave = data && data.toSave ? data.toSave : null;
        const idList = data && data.list ? data.list : null;

        let intermedianModel;
        let as ;
        switch (toSave) {
          case "users":
            intermedianModel = await getPoolInstance(parent).sequelize
                .models.api_chatroom_users;
            as = 'user_id'
            break;
          case "inactiveUsers":
            intermedianModel = await getPoolInstance(parent).sequelize
                .models.api_chatroom_inactive_users;
              as = 'user_id'
            break;
          default:
            Logger('chatroom conf').error("error not 'toSave' provided", toSave);
            break;
        }

        return genericInsertBulk(
            intermedianModel,
            "profile_id",
            {
              chatroom_id: chatRoomId,
            },
            idList
        );
      },
    },
  },
};
}
