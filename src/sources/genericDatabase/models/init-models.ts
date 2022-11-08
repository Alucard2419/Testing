import type { Sequelize } from "sequelize";
import { api_appversion as _api_appversion } from "./api_appversion";
import type { api_appversionAttributes, api_appversionCreationAttributes } from "./api_appversion";
import { api_blogentry as _api_blogentry } from "./api_blogentry";
import type { api_blogentryAttributes, api_blogentryCreationAttributes } from "./api_blogentry";
import { api_bloquedusers as _api_bloquedusers } from "./api_bloquedusers";
import type { api_bloquedusersAttributes, api_bloquedusersCreationAttributes } from "./api_bloquedusers";
import { api_category as _api_category } from "./api_category";
import type { api_categoryAttributes, api_categoryCreationAttributes } from "./api_category";
import { api_chatmessages as _api_chatmessages } from "./api_chatmessages";
import type { api_chatmessagesAttributes, api_chatmessagesCreationAttributes } from "./api_chatmessages";
import { api_chatroom as _api_chatroom } from "./api_chatroom";
import type { api_chatroomAttributes, api_chatroomCreationAttributes } from "./api_chatroom";
import { api_chatroom_inactive_users as _api_chatroom_inactive_users } from "./api_chatroom_inactive_users";
import type { api_chatroom_inactive_usersAttributes, api_chatroom_inactive_usersCreationAttributes } from "./api_chatroom_inactive_users";
import { api_chatroom_users as _api_chatroom_users } from "./api_chatroom_users";
import type { api_chatroom_usersAttributes, api_chatroom_usersCreationAttributes } from "./api_chatroom_users";
import { api_city as _api_city } from "./api_city";
import type { api_cityAttributes, api_cityCreationAttributes } from "./api_city";
import { api_code as _api_code } from "./api_code";
import type { api_codeAttributes, api_codeCreationAttributes } from "./api_code";
import { api_country as _api_country } from "./api_country";
import type { api_countryAttributes, api_countryCreationAttributes } from "./api_country";
import { api_crpaymentsaccount as _api_crpaymentsaccount } from "./api_crpaymentsaccount";
import type { api_crpaymentsaccountAttributes, api_crpaymentsaccountCreationAttributes } from "./api_crpaymentsaccount";
import { api_cubanbank as _api_cubanbank } from "./api_cubanbank";
import type { api_cubanbankAttributes, api_cubanbankCreationAttributes } from "./api_cubanbank";
import { api_cupaymentsaccount as _api_cupaymentsaccount } from "./api_cupaymentsaccount";
import type { api_cupaymentsaccountAttributes, api_cupaymentsaccountCreationAttributes } from "./api_cupaymentsaccount";
import { api_customemail as _api_customemail } from "./api_customemail";
import type { api_customemailAttributes, api_customemailCreationAttributes } from "./api_customemail";
import { api_generalnotification as _api_generalnotification } from "./api_generalnotification";
import type { api_generalnotificationAttributes, api_generalnotificationCreationAttributes } from "./api_generalnotification";
import { api_globalemail as _api_globalemail } from "./api_globalemail";
import type { api_globalemailAttributes, api_globalemailCreationAttributes } from "./api_globalemail";
import { api_invoice as _api_invoice } from "./api_invoice";
import type { api_invoiceAttributes, api_invoiceCreationAttributes } from "./api_invoice";
import { api_membership as _api_membership } from "./api_membership";
import type { api_membershipAttributes, api_membershipCreationAttributes } from "./api_membership";
import { api_membership_details as _api_membership_details } from "./api_membership_details";
import type { api_membership_detailsAttributes, api_membership_detailsCreationAttributes } from "./api_membership_details";
import { api_membership_permissions as _api_membership_permissions } from "./api_membership_permissions";
import type { api_membership_permissionsAttributes, api_membership_permissionsCreationAttributes } from "./api_membership_permissions";
import { api_membershipdetails as _api_membershipdetails } from "./api_membershipdetails";
import type { api_membershipdetailsAttributes, api_membershipdetailsCreationAttributes } from "./api_membershipdetails";
import { api_municipality as _api_municipality } from "./api_municipality";
import type { api_municipalityAttributes, api_municipalityCreationAttributes } from "./api_municipality";
import { api_notification as _api_notification } from "./api_notification";
import type { api_notificationAttributes, api_notificationCreationAttributes } from "./api_notification";
import { api_payment as _api_payment } from "./api_payment";
import type { api_paymentAttributes, api_paymentCreationAttributes } from "./api_payment";
import { api_permission as _api_permission } from "./api_permission";
import type { api_permissionAttributes, api_permissionCreationAttributes } from "./api_permission";
import { api_productininvoice as _api_productininvoice } from "./api_productininvoice";
import type { api_productininvoiceAttributes, api_productininvoiceCreationAttributes } from "./api_productininvoice";
import { api_profile as _api_profile } from "./api_profile";
import type { api_profileAttributes, api_profileCreationAttributes } from "./api_profile";
import { api_relatedimage as _api_relatedimage } from "./api_relatedimage";
import type { api_relatedimageAttributes, api_relatedimageCreationAttributes } from "./api_relatedimage";
import { api_reportdetail as _api_reportdetail } from "./api_reportdetail";
import type { api_reportdetailAttributes, api_reportdetailCreationAttributes } from "./api_reportdetail";
import { api_review as _api_review } from "./api_review";
import type { api_reviewAttributes, api_reviewCreationAttributes } from "./api_review";
import { api_reviewanswer as _api_reviewanswer } from "./api_reviewanswer";
import type { api_reviewanswerAttributes, api_reviewanswerCreationAttributes } from "./api_reviewanswer";
import { api_reviewreport as _api_reviewreport } from "./api_reviewreport";
import type { api_reviewreportAttributes, api_reviewreportCreationAttributes } from "./api_reviewreport";
import { api_reviewreport_details as _api_reviewreport_details } from "./api_reviewreport_details";
import type { api_reviewreport_detailsAttributes, api_reviewreport_detailsCreationAttributes } from "./api_reviewreport_details";
import { api_schedule as _api_schedule } from "./api_schedule";
import type { api_scheduleAttributes, api_scheduleCreationAttributes } from "./api_schedule";
import { api_service as _api_service } from "./api_service";
import type { api_serviceAttributes, api_serviceCreationAttributes } from "./api_service";
import { api_service_followers as _api_service_followers } from "./api_service_followers";
import type { api_service_followersAttributes, api_service_followersCreationAttributes } from "./api_service_followers";
import { api_servicereport as _api_servicereport } from "./api_servicereport";
import type { api_servicereportAttributes, api_servicereportCreationAttributes } from "./api_servicereport";
import { api_servicereport_details as _api_servicereport_details } from "./api_servicereport_details";
import type { api_servicereport_detailsAttributes, api_servicereport_detailsCreationAttributes } from "./api_servicereport_details";
import { api_servicevisit as _api_servicevisit } from "./api_servicevisit";
import type { api_servicevisitAttributes, api_servicevisitCreationAttributes } from "./api_servicevisit";
import { api_socialaccount as _api_socialaccount } from "./api_socialaccount";
import type { api_socialaccountAttributes, api_socialaccountCreationAttributes } from "./api_socialaccount";
import { api_timewindow as _api_timewindow } from "./api_timewindow";
import type { api_timewindowAttributes, api_timewindowCreationAttributes } from "./api_timewindow";
import { api_token as _api_token } from "./api_token";
import type { api_tokenAttributes, api_tokenCreationAttributes } from "./api_token";
import { api_topic as _api_topic } from "./api_topic";
import type { api_topicAttributes, api_topicCreationAttributes } from "./api_topic";
import { api_usernotification as _api_usernotification } from "./api_usernotification";
import type { api_usernotificationAttributes, api_usernotificationCreationAttributes } from "./api_usernotification";
import { api_userreport as _api_userreport } from "./api_userreport";
import type { api_userreportAttributes, api_userreportCreationAttributes } from "./api_userreport";
import { api_userreport_details as _api_userreport_details } from "./api_userreport_details";
import type { api_userreport_detailsAttributes, api_userreport_detailsCreationAttributes } from "./api_userreport_details";
import { auth_group as _auth_group } from "./auth_group";
import type { auth_groupAttributes, auth_groupCreationAttributes } from "./auth_group";
import { auth_group_permissions as _auth_group_permissions } from "./auth_group_permissions";
import type { auth_group_permissionsAttributes, auth_group_permissionsCreationAttributes } from "./auth_group_permissions";
import { auth_permission as _auth_permission } from "./auth_permission";
import type { auth_permissionAttributes, auth_permissionCreationAttributes } from "./auth_permission";
import { custom_user_user as _custom_user_user } from "./custom_user_user";
import type { custom_user_userAttributes, custom_user_userCreationAttributes } from "./custom_user_user";
import { custom_user_user_groups as _custom_user_user_groups } from "./custom_user_user_groups";
import type { custom_user_user_groupsAttributes, custom_user_user_groupsCreationAttributes } from "./custom_user_user_groups";
import { custom_user_user_user_permissions as _custom_user_user_user_permissions } from "./custom_user_user_user_permissions";
import type { custom_user_user_user_permissionsAttributes, custom_user_user_user_permissionsCreationAttributes } from "./custom_user_user_user_permissions";
import { django_admin_log as _django_admin_log } from "./django_admin_log";
import type { django_admin_logAttributes, django_admin_logCreationAttributes } from "./django_admin_log";
import { django_content_type as _django_content_type } from "./django_content_type";
import type { django_content_typeAttributes, django_content_typeCreationAttributes } from "./django_content_type";
import { django_migrations as _django_migrations } from "./django_migrations";
import type { django_migrationsAttributes, django_migrationsCreationAttributes } from "./django_migrations";
import { django_session as _django_session } from "./django_session";
import type { django_sessionAttributes, django_sessionCreationAttributes } from "./django_session";
import { fcm_django_fcmdevice as _fcm_django_fcmdevice } from "./fcm_django_fcmdevice";
import type { fcm_django_fcmdeviceAttributes, fcm_django_fcmdeviceCreationAttributes } from "./fcm_django_fcmdevice";

export {
  _api_appversion as api_appversion,
  _api_blogentry as api_blogentry,
  _api_bloquedusers as api_bloquedusers,
  _api_category as api_category,
  _api_chatmessages as api_chatmessages,
  _api_chatroom as api_chatroom,
  _api_chatroom_inactive_users as api_chatroom_inactive_users,
  _api_chatroom_users as api_chatroom_users,
  _api_city as api_city,
  _api_code as api_code,
  _api_country as api_country,
  _api_crpaymentsaccount as api_crpaymentsaccount,
  _api_cubanbank as api_cubanbank,
  _api_cupaymentsaccount as api_cupaymentsaccount,
  _api_customemail as api_customemail,
  _api_generalnotification as api_generalnotification,
  _api_globalemail as api_globalemail,
  _api_invoice as api_invoice,
  _api_membership as api_membership,
  _api_membership_details as api_membership_details,
  _api_membership_permissions as api_membership_permissions,
  _api_membershipdetails as api_membershipdetails,
  _api_municipality as api_municipality,
  _api_notification as api_notification,
  _api_payment as api_payment,
  _api_permission as api_permission,
  _api_productininvoice as api_productininvoice,
  _api_profile as api_profile,
  _api_relatedimage as api_relatedimage,
  _api_reportdetail as api_reportdetail,
  _api_review as api_review,
  _api_reviewanswer as api_reviewanswer,
  _api_reviewreport as api_reviewreport,
  _api_reviewreport_details as api_reviewreport_details,
  _api_schedule as api_schedule,
  _api_service as api_service,
  _api_service_followers as api_service_followers,
  _api_servicereport as api_servicereport,
  _api_servicereport_details as api_servicereport_details,
  _api_servicevisit as api_servicevisit,
  _api_socialaccount as api_socialaccount,
  _api_timewindow as api_timewindow,
  _api_token as api_token,
  _api_topic as api_topic,
  _api_usernotification as api_usernotification,
  _api_userreport as api_userreport,
  _api_userreport_details as api_userreport_details,
  _auth_group as auth_group,
  _auth_group_permissions as auth_group_permissions,
  _auth_permission as auth_permission,
  _custom_user_user as custom_user_user,
  _custom_user_user_groups as custom_user_user_groups,
  _custom_user_user_user_permissions as custom_user_user_user_permissions,
  _django_admin_log as django_admin_log,
  _django_content_type as django_content_type,
  _django_migrations as django_migrations,
  _django_session as django_session,
  _fcm_django_fcmdevice as fcm_django_fcmdevice,
};

export type {
  api_appversionAttributes,
  api_appversionCreationAttributes,
  api_blogentryAttributes,
  api_blogentryCreationAttributes,
  api_bloquedusersAttributes,
  api_bloquedusersCreationAttributes,
  api_categoryAttributes,
  api_categoryCreationAttributes,
  api_chatmessagesAttributes,
  api_chatmessagesCreationAttributes,
  api_chatroomAttributes,
  api_chatroomCreationAttributes,
  api_chatroom_inactive_usersAttributes,
  api_chatroom_inactive_usersCreationAttributes,
  api_chatroom_usersAttributes,
  api_chatroom_usersCreationAttributes,
  api_cityAttributes,
  api_cityCreationAttributes,
  api_codeAttributes,
  api_codeCreationAttributes,
  api_countryAttributes,
  api_countryCreationAttributes,
  api_crpaymentsaccountAttributes,
  api_crpaymentsaccountCreationAttributes,
  api_cubanbankAttributes,
  api_cubanbankCreationAttributes,
  api_cupaymentsaccountAttributes,
  api_cupaymentsaccountCreationAttributes,
  api_customemailAttributes,
  api_customemailCreationAttributes,
  api_generalnotificationAttributes,
  api_generalnotificationCreationAttributes,
  api_globalemailAttributes,
  api_globalemailCreationAttributes,
  api_invoiceAttributes,
  api_invoiceCreationAttributes,
  api_membershipAttributes,
  api_membershipCreationAttributes,
  api_membership_detailsAttributes,
  api_membership_detailsCreationAttributes,
  api_membership_permissionsAttributes,
  api_membership_permissionsCreationAttributes,
  api_membershipdetailsAttributes,
  api_membershipdetailsCreationAttributes,
  api_municipalityAttributes,
  api_municipalityCreationAttributes,
  api_notificationAttributes,
  api_notificationCreationAttributes,
  api_paymentAttributes,
  api_paymentCreationAttributes,
  api_permissionAttributes,
  api_permissionCreationAttributes,
  api_productininvoiceAttributes,
  api_productininvoiceCreationAttributes,
  api_profileAttributes,
  api_profileCreationAttributes,
  api_relatedimageAttributes,
  api_relatedimageCreationAttributes,
  api_reportdetailAttributes,
  api_reportdetailCreationAttributes,
  api_reviewAttributes,
  api_reviewCreationAttributes,
  api_reviewanswerAttributes,
  api_reviewanswerCreationAttributes,
  api_reviewreportAttributes,
  api_reviewreportCreationAttributes,
  api_reviewreport_detailsAttributes,
  api_reviewreport_detailsCreationAttributes,
  api_scheduleAttributes,
  api_scheduleCreationAttributes,
  api_serviceAttributes,
  api_serviceCreationAttributes,
  api_service_followersAttributes,
  api_service_followersCreationAttributes,
  api_servicereportAttributes,
  api_servicereportCreationAttributes,
  api_servicereport_detailsAttributes,
  api_servicereport_detailsCreationAttributes,
  api_servicevisitAttributes,
  api_servicevisitCreationAttributes,
  api_socialaccountAttributes,
  api_socialaccountCreationAttributes,
  api_timewindowAttributes,
  api_timewindowCreationAttributes,
  api_tokenAttributes,
  api_tokenCreationAttributes,
  api_topicAttributes,
  api_topicCreationAttributes,
  api_usernotificationAttributes,
  api_usernotificationCreationAttributes,
  api_userreportAttributes,
  api_userreportCreationAttributes,
  api_userreport_detailsAttributes,
  api_userreport_detailsCreationAttributes,
  auth_groupAttributes,
  auth_groupCreationAttributes,
  auth_group_permissionsAttributes,
  auth_group_permissionsCreationAttributes,
  auth_permissionAttributes,
  auth_permissionCreationAttributes,
  custom_user_userAttributes,
  custom_user_userCreationAttributes,
  custom_user_user_groupsAttributes,
  custom_user_user_groupsCreationAttributes,
  custom_user_user_user_permissionsAttributes,
  custom_user_user_user_permissionsCreationAttributes,
  django_admin_logAttributes,
  django_admin_logCreationAttributes,
  django_content_typeAttributes,
  django_content_typeCreationAttributes,
  django_migrationsAttributes,
  django_migrationsCreationAttributes,
  django_sessionAttributes,
  django_sessionCreationAttributes,
  fcm_django_fcmdeviceAttributes,
  fcm_django_fcmdeviceCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const api_appversion = _api_appversion.initModel(sequelize);
  const api_blogentry = _api_blogentry.initModel(sequelize);
  const api_bloquedusers = _api_bloquedusers.initModel(sequelize);
  const api_category = _api_category.initModel(sequelize);
  const api_chatmessages = _api_chatmessages.initModel(sequelize);
  const api_chatroom = _api_chatroom.initModel(sequelize);
  const api_chatroom_inactive_users = _api_chatroom_inactive_users.initModel(sequelize);
  const api_chatroom_users = _api_chatroom_users.initModel(sequelize);
  const api_city = _api_city.initModel(sequelize);
  const api_code = _api_code.initModel(sequelize);
  const api_country = _api_country.initModel(sequelize);
  const api_crpaymentsaccount = _api_crpaymentsaccount.initModel(sequelize);
  const api_cubanbank = _api_cubanbank.initModel(sequelize);
  const api_cupaymentsaccount = _api_cupaymentsaccount.initModel(sequelize);
  const api_customemail = _api_customemail.initModel(sequelize);
  const api_generalnotification = _api_generalnotification.initModel(sequelize);
  const api_globalemail = _api_globalemail.initModel(sequelize);
  const api_invoice = _api_invoice.initModel(sequelize);
  const api_membership = _api_membership.initModel(sequelize);
  const api_membership_details = _api_membership_details.initModel(sequelize);
  const api_membership_permissions = _api_membership_permissions.initModel(sequelize);
  const api_membershipdetails = _api_membershipdetails.initModel(sequelize);
  const api_municipality = _api_municipality.initModel(sequelize);
  const api_notification = _api_notification.initModel(sequelize);
  const api_payment = _api_payment.initModel(sequelize);
  const api_permission = _api_permission.initModel(sequelize);
  const api_productininvoice = _api_productininvoice.initModel(sequelize);
  const api_profile = _api_profile.initModel(sequelize);
  const api_relatedimage = _api_relatedimage.initModel(sequelize);
  const api_reportdetail = _api_reportdetail.initModel(sequelize);
  const api_review = _api_review.initModel(sequelize);
  const api_reviewanswer = _api_reviewanswer.initModel(sequelize);
  const api_reviewreport = _api_reviewreport.initModel(sequelize);
  const api_reviewreport_details = _api_reviewreport_details.initModel(sequelize);
  const api_schedule = _api_schedule.initModel(sequelize);
  const api_service = _api_service.initModel(sequelize);
  const api_service_followers = _api_service_followers.initModel(sequelize);
  const api_servicereport = _api_servicereport.initModel(sequelize);
  const api_servicereport_details = _api_servicereport_details.initModel(sequelize);
  const api_servicevisit = _api_servicevisit.initModel(sequelize);
  const api_socialaccount = _api_socialaccount.initModel(sequelize);
  const api_timewindow = _api_timewindow.initModel(sequelize);
  const api_token = _api_token.initModel(sequelize);
  const api_topic = _api_topic.initModel(sequelize);
  const api_usernotification = _api_usernotification.initModel(sequelize);
  const api_userreport = _api_userreport.initModel(sequelize);
  const api_userreport_details = _api_userreport_details.initModel(sequelize);
  const auth_group = _auth_group.initModel(sequelize);
  const auth_group_permissions = _auth_group_permissions.initModel(sequelize);
  const auth_permission = _auth_permission.initModel(sequelize);
  const custom_user_user = _custom_user_user.initModel(sequelize);
  const custom_user_user_groups = _custom_user_user_groups.initModel(sequelize);
  const custom_user_user_user_permissions = _custom_user_user_user_permissions.initModel(sequelize);
  const django_admin_log = _django_admin_log.initModel(sequelize);
  const django_content_type = _django_content_type.initModel(sequelize);
  const django_migrations = _django_migrations.initModel(sequelize);
  const django_session = _django_session.initModel(sequelize);
  const fcm_django_fcmdevice = _fcm_django_fcmdevice.initModel(sequelize);

  api_category.belongsTo(api_category, { as: "parent", foreignKey: "parent_id"});
  api_category.hasMany(api_category, { as: "api_categories", foreignKey: "parent_id"});
  api_service.belongsTo(api_category, { as: "category", foreignKey: "category_id"});
  api_category.hasMany(api_service, { as: "api_services", foreignKey: "category_id"});
  api_chatmessages.belongsTo(api_chatroom, { as: "chatroom", foreignKey: "chatroom_id"});
  api_chatroom.hasMany(api_chatmessages, { as: "api_chatmessages", foreignKey: "chatroom_id"});
  api_chatroom_inactive_users.belongsTo(api_chatroom, { as: "chatroom", foreignKey: "chatroom_id"});
  api_chatroom.hasMany(api_chatroom_inactive_users, { as: "api_chatroom_inactive_users", foreignKey: "chatroom_id"});
  api_chatroom_users.belongsTo(api_chatroom, { as: "chatroom", foreignKey: "chatroom_id"});
  api_chatroom.hasMany(api_chatroom_users, { as: "api_chatroom_users", foreignKey: "chatroom_id"});
  api_municipality.belongsTo(api_city, { as: "city", foreignKey: "city_id"});
  api_city.hasMany(api_municipality, { as: "api_municipalities", foreignKey: "city_id"});
  api_city.belongsTo(api_country, { as: "country", foreignKey: "country_id"});
  api_country.hasMany(api_city, { as: "api_cities", foreignKey: "country_id"});
  api_cupaymentsaccount.belongsTo(api_cubanbank, { as: "bank", foreignKey: "bank_id"});
  api_cubanbank.hasMany(api_cupaymentsaccount, { as: "api_cupaymentsaccounts", foreignKey: "bank_id"});
  api_productininvoice.belongsTo(api_invoice, { as: "invoice", foreignKey: "invoice_id"});
  api_invoice.hasMany(api_productininvoice, { as: "api_productininvoices", foreignKey: "invoice_id"});
  api_membership_details.belongsTo(api_membership, { as: "membership", foreignKey: "membership_id"});
  api_membership.hasMany(api_membership_details, { as: "api_membership_details", foreignKey: "membership_id"});
  api_membership_permissions.belongsTo(api_membership, { as: "membership", foreignKey: "membership_id"});
  api_membership.hasMany(api_membership_permissions, { as: "api_membership_permissions", foreignKey: "membership_id"});
  api_payment.belongsTo(api_membership, { as: "membership", foreignKey: "membership_id"});
  api_membership.hasMany(api_payment, { as: "api_payments", foreignKey: "membership_id"});
  api_profile.belongsTo(api_membership, { as: "membership", foreignKey: "membership_id"});
  api_membership.hasMany(api_profile, { as: "api_profiles", foreignKey: "membership_id"});
  api_membership_details.belongsTo(api_membershipdetails, { as: "membershipdetail", foreignKey: "membershipdetails_id"});
  api_membershipdetails.hasMany(api_membership_details, { as: "api_membership_details", foreignKey: "membershipdetails_id"});
  api_profile.belongsTo(api_municipality, { as: "municipality", foreignKey: "municipality_id"});
  api_municipality.hasMany(api_profile, { as: "api_profiles", foreignKey: "municipality_id"});
  api_service.belongsTo(api_municipality, { as: "municipality", foreignKey: "municipality_id"});
  api_municipality.hasMany(api_service, { as: "api_services", foreignKey: "municipality_id"});
  api_membership_permissions.belongsTo(api_permission, { as: "permission", foreignKey: "permission_id"});
  api_permission.hasMany(api_membership_permissions, { as: "api_membership_permissions", foreignKey: "permission_id"});
  api_bloquedusers.belongsTo(api_profile, { as: "profile", foreignKey: "profile_id"});
  api_profile.hasMany(api_bloquedusers, { as: "api_bloquedusers", foreignKey: "profile_id"});
  api_bloquedusers.belongsTo(api_profile, { as: "user_bloqued", foreignKey: "user_bloqued_id"});
  api_profile.hasMany(api_bloquedusers, { as: "user_bloqued_api_bloquedusers", foreignKey: "user_bloqued_id"});
  api_chatmessages.belongsTo(api_profile, { as: "user", foreignKey: "user_id"});
  api_profile.hasMany(api_chatmessages, { as: "api_chatmessages", foreignKey: "user_id"});
  api_chatroom_inactive_users.belongsTo(api_profile, { as: "profile", foreignKey: "profile_id"});
  api_profile.hasMany(api_chatroom_inactive_users, { as: "api_chatroom_inactive_users", foreignKey: "profile_id"});
  api_chatroom_users.belongsTo(api_profile, { as: "profile", foreignKey: "profile_id"});
  api_profile.hasMany(api_chatroom_users, { as: "api_chatroom_users", foreignKey: "profile_id"});
  api_code.belongsTo(api_profile, { as: "user", foreignKey: "user_id"});
  api_profile.hasOne(api_code, { as: "api_code", foreignKey: "user_id"});
  api_crpaymentsaccount.belongsTo(api_profile, { as: "profile", foreignKey: "profile_id"});
  api_profile.hasMany(api_crpaymentsaccount, { as: "api_crpaymentsaccounts", foreignKey: "profile_id"});
  api_cupaymentsaccount.belongsTo(api_profile, { as: "profile", foreignKey: "profile_id"});
  api_profile.hasMany(api_cupaymentsaccount, { as: "api_cupaymentsaccounts", foreignKey: "profile_id"});
  api_customemail.belongsTo(api_profile, { as: "toUser", foreignKey: "toUser_id"});
  api_profile.hasMany(api_customemail, { as: "api_customemails", foreignKey: "toUser_id"});
  api_invoice.belongsTo(api_profile, { as: "to_user", foreignKey: "to_user_id"});
  api_profile.hasMany(api_invoice, { as: "api_invoices", foreignKey: "to_user_id"});
  api_notification.belongsTo(api_profile, { as: "profile", foreignKey: "profile_id"});
  api_profile.hasMany(api_notification, { as: "api_notifications", foreignKey: "profile_id"});
  api_payment.belongsTo(api_profile, { as: "user", foreignKey: "user_id"});
  api_profile.hasMany(api_payment, { as: "api_payments", foreignKey: "user_id"});
  api_review.belongsTo(api_profile, { as: "author", foreignKey: "author_id"});
  api_profile.hasMany(api_review, { as: "api_reviews", foreignKey: "author_id"});
  api_reviewanswer.belongsTo(api_profile, { as: "profile", foreignKey: "profile_id"});
  api_profile.hasMany(api_reviewanswer, { as: "api_reviewanswers", foreignKey: "profile_id"});
  api_reviewreport.belongsTo(api_profile, { as: "from_user", foreignKey: "from_user_id"});
  api_profile.hasMany(api_reviewreport, { as: "api_reviewreports", foreignKey: "from_user_id"});
  api_service.belongsTo(api_profile, { as: "owner", foreignKey: "owner_id"});
  api_profile.hasMany(api_service, { as: "api_services", foreignKey: "owner_id"});
  api_service_followers.belongsTo(api_profile, { as: "profile", foreignKey: "profile_id"});
  api_profile.hasMany(api_service_followers, { as: "api_service_followers", foreignKey: "profile_id"});
  api_servicereport.belongsTo(api_profile, { as: "from_user", foreignKey: "from_user_id"});
  api_profile.hasMany(api_servicereport, { as: "api_servicereports", foreignKey: "from_user_id"});
  api_servicevisit.belongsTo(api_profile, { as: "author", foreignKey: "author_id"});
  api_profile.hasMany(api_servicevisit, { as: "api_servicevisits", foreignKey: "author_id"});
  api_socialaccount.belongsTo(api_profile, { as: "profile", foreignKey: "profile_id"});
  api_profile.hasMany(api_socialaccount, { as: "api_socialaccounts", foreignKey: "profile_id"});
  api_token.belongsTo(api_profile, { as: "user", foreignKey: "user_id"});
  api_profile.hasMany(api_token, { as: "api_tokens", foreignKey: "user_id"});
  api_usernotification.belongsTo(api_profile, { as: "user", foreignKey: "user_id"});
  api_profile.hasMany(api_usernotification, { as: "api_usernotifications", foreignKey: "user_id"});
  api_userreport.belongsTo(api_profile, { as: "from_user", foreignKey: "from_user_id"});
  api_profile.hasMany(api_userreport, { as: "api_userreports", foreignKey: "from_user_id"});
  api_userreport.belongsTo(api_profile, { as: "user", foreignKey: "user_id"});
  api_profile.hasMany(api_userreport, { as: "user_api_userreports", foreignKey: "user_id"});
  api_reviewreport_details.belongsTo(api_reportdetail, { as: "reportdetail", foreignKey: "reportdetail_id"});
  api_reportdetail.hasMany(api_reviewreport_details, { as: "api_reviewreport_details", foreignKey: "reportdetail_id"});
  api_servicereport_details.belongsTo(api_reportdetail, { as: "reportdetail", foreignKey: "reportdetail_id"});
  api_reportdetail.hasMany(api_servicereport_details, { as: "api_servicereport_details", foreignKey: "reportdetail_id"});
  api_userreport_details.belongsTo(api_reportdetail, { as: "reportdetail", foreignKey: "reportdetail_id"});
  api_reportdetail.hasMany(api_userreport_details, { as: "api_userreport_details", foreignKey: "reportdetail_id"});
  api_reviewanswer.belongsTo(api_review, { as: "review", foreignKey: "review_id"});
  api_review.hasOne(api_reviewanswer, { as: "api_reviewanswer", foreignKey: "review_id"});
  api_reviewreport.belongsTo(api_review, { as: "review", foreignKey: "review_id"});
  api_review.hasMany(api_reviewreport, { as: "api_reviewreports", foreignKey: "review_id"});
  api_reviewreport_details.belongsTo(api_reviewreport, { as: "reviewreport", foreignKey: "reviewreport_id"});
  api_reviewreport.hasMany(api_reviewreport_details, { as: "api_reviewreport_details", foreignKey: "reviewreport_id"});
  api_timewindow.belongsTo(api_schedule, { as: "schedule", foreignKey: "schedule_id"});
  api_schedule.hasMany(api_timewindow, { as: "api_timewindows", foreignKey: "schedule_id"});
  api_chatroom.belongsTo(api_service, { as: "service", foreignKey: "service_id"});
  api_service.hasMany(api_chatroom, { as: "api_chatrooms", foreignKey: "service_id"});
  api_invoice.belongsTo(api_service, { as: "from_service", foreignKey: "from_service_id"});
  api_service.hasMany(api_invoice, { as: "api_invoices", foreignKey: "from_service_id"});
  api_review.belongsTo(api_service, { as: "to_service", foreignKey: "to_service_id"});
  api_service.hasMany(api_review, { as: "api_reviews", foreignKey: "to_service_id"});
  api_schedule.belongsTo(api_service, { as: "service", foreignKey: "service_id"});
  api_service.hasMany(api_schedule, { as: "api_schedules", foreignKey: "service_id"});
  api_service_followers.belongsTo(api_service, { as: "service", foreignKey: "service_id"});
  api_service.hasMany(api_service_followers, { as: "api_service_followers", foreignKey: "service_id"});
  api_servicereport.belongsTo(api_service, { as: "service", foreignKey: "service_id"});
  api_service.hasMany(api_servicereport, { as: "api_servicereports", foreignKey: "service_id"});
  api_servicevisit.belongsTo(api_service, { as: "service", foreignKey: "service_id"});
  api_service.hasMany(api_servicevisit, { as: "api_servicevisits", foreignKey: "service_id"});
  api_servicereport_details.belongsTo(api_servicereport, { as: "servicereport", foreignKey: "servicereport_id"});
  api_servicereport.hasMany(api_servicereport_details, { as: "api_servicereport_details", foreignKey: "servicereport_id"});
  api_generalnotification.belongsTo(api_topic, { as: "topic", foreignKey: "topic_id"});
  api_topic.hasMany(api_generalnotification, { as: "api_generalnotifications", foreignKey: "topic_id"});
  api_userreport_details.belongsTo(api_userreport, { as: "userreport", foreignKey: "userreport_id"});
  api_userreport.hasMany(api_userreport_details, { as: "api_userreport_details", foreignKey: "userreport_id"});
  auth_group_permissions.belongsTo(auth_group, { as: "group", foreignKey: "group_id"});
  auth_group.hasMany(auth_group_permissions, { as: "auth_group_permissions", foreignKey: "group_id"});
  custom_user_user_groups.belongsTo(auth_group, { as: "group", foreignKey: "group_id"});
  auth_group.hasMany(custom_user_user_groups, { as: "custom_user_user_groups", foreignKey: "group_id"});
  auth_group_permissions.belongsTo(auth_permission, { as: "permission", foreignKey: "permission_id"});
  auth_permission.hasMany(auth_group_permissions, { as: "auth_group_permissions", foreignKey: "permission_id"});
  custom_user_user_user_permissions.belongsTo(auth_permission, { as: "permission", foreignKey: "permission_id"});
  auth_permission.hasMany(custom_user_user_user_permissions, { as: "custom_user_user_user_permissions", foreignKey: "permission_id"});
  api_profile.belongsTo(custom_user_user, { as: "user", foreignKey: "user_id"});
  custom_user_user.hasOne(api_profile, { as: "api_profile", foreignKey: "user_id"});
  custom_user_user_groups.belongsTo(custom_user_user, { as: "user", foreignKey: "user_id"});
  custom_user_user.hasMany(custom_user_user_groups, { as: "custom_user_user_groups", foreignKey: "user_id"});
  custom_user_user_user_permissions.belongsTo(custom_user_user, { as: "user", foreignKey: "user_id"});
  custom_user_user.hasMany(custom_user_user_user_permissions, { as: "custom_user_user_user_permissions", foreignKey: "user_id"});
  django_admin_log.belongsTo(custom_user_user, { as: "user", foreignKey: "user_id"});
  custom_user_user.hasMany(django_admin_log, { as: "django_admin_logs", foreignKey: "user_id"});
  fcm_django_fcmdevice.belongsTo(custom_user_user, { as: "user", foreignKey: "user_id"});
  custom_user_user.hasMany(fcm_django_fcmdevice, { as: "fcm_django_fcmdevices", foreignKey: "user_id"});
  api_relatedimage.belongsTo(django_content_type, { as: "content_type", foreignKey: "content_type_id"});
  django_content_type.hasMany(api_relatedimage, { as: "api_relatedimages", foreignKey: "content_type_id"});
  auth_permission.belongsTo(django_content_type, { as: "content_type", foreignKey: "content_type_id"});
  django_content_type.hasMany(auth_permission, { as: "auth_permissions", foreignKey: "content_type_id"});
  django_admin_log.belongsTo(django_content_type, { as: "content_type", foreignKey: "content_type_id"});
  django_content_type.hasMany(django_admin_log, { as: "django_admin_logs", foreignKey: "content_type_id"});

  return {
    api_appversion: api_appversion,
    api_blogentry: api_blogentry,
    api_bloquedusers: api_bloquedusers,
    api_category: api_category,
    api_chatmessages: api_chatmessages,
    api_chatroom: api_chatroom,
    api_chatroom_inactive_users: api_chatroom_inactive_users,
    api_chatroom_users: api_chatroom_users,
    api_city: api_city,
    api_code: api_code,
    api_country: api_country,
    api_crpaymentsaccount: api_crpaymentsaccount,
    api_cubanbank: api_cubanbank,
    api_cupaymentsaccount: api_cupaymentsaccount,
    api_customemail: api_customemail,
    api_generalnotification: api_generalnotification,
    api_globalemail: api_globalemail,
    api_invoice: api_invoice,
    api_membership: api_membership,
    api_membership_details: api_membership_details,
    api_membership_permissions: api_membership_permissions,
    api_membershipdetails: api_membershipdetails,
    api_municipality: api_municipality,
    api_notification: api_notification,
    api_payment: api_payment,
    api_permission: api_permission,
    api_productininvoice: api_productininvoice,
    api_profile: api_profile,
    api_relatedimage: api_relatedimage,
    api_reportdetail: api_reportdetail,
    api_review: api_review,
    api_reviewanswer: api_reviewanswer,
    api_reviewreport: api_reviewreport,
    api_reviewreport_details: api_reviewreport_details,
    api_schedule: api_schedule,
    api_service: api_service,
    api_service_followers: api_service_followers,
    api_servicereport: api_servicereport,
    api_servicereport_details: api_servicereport_details,
    api_servicevisit: api_servicevisit,
    api_socialaccount: api_socialaccount,
    api_timewindow: api_timewindow,
    api_token: api_token,
    api_topic: api_topic,
    api_usernotification: api_usernotification,
    api_userreport: api_userreport,
    api_userreport_details: api_userreport_details,
    auth_group: auth_group,
    auth_group_permissions: auth_group_permissions,
    auth_permission: auth_permission,
    custom_user_user: custom_user_user,
    custom_user_user_groups: custom_user_user_groups,
    custom_user_user_user_permissions: custom_user_user_user_permissions,
    django_admin_log: django_admin_log,
    django_content_type: django_content_type,
    django_migrations: django_migrations,
    django_session: django_session,
    fcm_django_fcmdevice: fcm_django_fcmdevice,
  };
}
