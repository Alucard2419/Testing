import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_bloquedusers, api_bloquedusersId } from './api_bloquedusers';
import type { api_chatmessages, api_chatmessagesId } from './api_chatmessages';
import type { api_chatroom_inactive_users, api_chatroom_inactive_usersId } from './api_chatroom_inactive_users';
import type { api_chatroom_users, api_chatroom_usersId } from './api_chatroom_users';
import type { api_code, api_codeCreationAttributes, api_codeId } from './api_code';
import type { api_crpaymentsaccount, api_crpaymentsaccountId } from './api_crpaymentsaccount';
import type { api_cupaymentsaccount, api_cupaymentsaccountId } from './api_cupaymentsaccount';
import type { api_customemail, api_customemailId } from './api_customemail';
import type { api_invoice, api_invoiceId } from './api_invoice';
import type { api_membership, api_membershipId } from './api_membership';
import type { api_municipality, api_municipalityId } from './api_municipality';
import type { api_notification, api_notificationId } from './api_notification';
import type { api_payment, api_paymentId } from './api_payment';
import type { api_review, api_reviewId } from './api_review';
import type { api_reviewanswer, api_reviewanswerId } from './api_reviewanswer';
import type { api_reviewreport, api_reviewreportId } from './api_reviewreport';
import type { api_service, api_serviceId } from './api_service';
import type { api_service_followers, api_service_followersId } from './api_service_followers';
import type { api_servicereport, api_servicereportId } from './api_servicereport';
import type { api_servicevisit, api_servicevisitId } from './api_servicevisit';
import type { api_socialaccount, api_socialaccountId } from './api_socialaccount';
import type { api_token, api_tokenId } from './api_token';
import type { api_usernotification, api_usernotificationId } from './api_usernotification';
import type { api_userreport, api_userreportId } from './api_userreport';
import type { custom_user_user, custom_user_userId } from './custom_user_user';

export interface api_profileAttributes {
  id: number;
  created: Date;
  updated: Date;
  full_name: string;
  avatar: string;
  membership_id: number;
  user_id: number;
  selected_languaje: string;
  address: string;
  municipality_id?: number;
  deleted: boolean;
  email_profile?: string;
}

export type api_profilePk = "id";
export type api_profileId = api_profile[api_profilePk];
export type api_profileOptionalAttributes = "id" | "municipality_id" | "email_profile";
export type api_profileCreationAttributes = Optional<api_profileAttributes, api_profileOptionalAttributes>;

export class api_profile extends Model<api_profileAttributes, api_profileCreationAttributes> implements api_profileAttributes {
  id!: number;
  created!: Date;
  updated!: Date;
  full_name!: string;
  avatar!: string;
  membership_id!: number;
  user_id!: number;
  selected_languaje!: string;
  address!: string;
  municipality_id?: number;
  deleted!: boolean;
  email_profile?: string;

  // api_profile belongsTo api_membership via membership_id
  membership!: api_membership;
  getMembership!: Sequelize.BelongsToGetAssociationMixin<api_membership>;
  setMembership!: Sequelize.BelongsToSetAssociationMixin<api_membership, api_membershipId>;
  createMembership!: Sequelize.BelongsToCreateAssociationMixin<api_membership>;
  // api_profile belongsTo api_municipality via municipality_id
  municipality!: api_municipality;
  getMunicipality!: Sequelize.BelongsToGetAssociationMixin<api_municipality>;
  setMunicipality!: Sequelize.BelongsToSetAssociationMixin<api_municipality, api_municipalityId>;
  createMunicipality!: Sequelize.BelongsToCreateAssociationMixin<api_municipality>;
  // api_profile hasMany api_bloquedusers via profile_id
  api_bloquedusers!: api_bloquedusers[];
  getApi_bloquedusers!: Sequelize.HasManyGetAssociationsMixin<api_bloquedusers>;
  setApi_bloquedusers!: Sequelize.HasManySetAssociationsMixin<api_bloquedusers, api_bloquedusersId>;
  addApi_bloqueduser!: Sequelize.HasManyAddAssociationMixin<api_bloquedusers, api_bloquedusersId>;
  addApi_bloquedusers!: Sequelize.HasManyAddAssociationsMixin<api_bloquedusers, api_bloquedusersId>;
  createApi_bloqueduser!: Sequelize.HasManyCreateAssociationMixin<api_bloquedusers>;
  removeApi_bloqueduser!: Sequelize.HasManyRemoveAssociationMixin<api_bloquedusers, api_bloquedusersId>;
  removeApi_bloquedusers!: Sequelize.HasManyRemoveAssociationsMixin<api_bloquedusers, api_bloquedusersId>;
  hasApi_bloqueduser!: Sequelize.HasManyHasAssociationMixin<api_bloquedusers, api_bloquedusersId>;
  hasApi_bloquedusers!: Sequelize.HasManyHasAssociationsMixin<api_bloquedusers, api_bloquedusersId>;
  countApi_bloquedusers!: Sequelize.HasManyCountAssociationsMixin;
  // api_profile hasMany api_bloquedusers via user_bloqued_id
  user_bloqued_api_bloquedusers!: api_bloquedusers[];
  getUser_bloqued_api_bloquedusers!: Sequelize.HasManyGetAssociationsMixin<api_bloquedusers>;
  setUser_bloqued_api_bloquedusers!: Sequelize.HasManySetAssociationsMixin<api_bloquedusers, api_bloquedusersId>;
  addUser_bloqued_api_bloqueduser!: Sequelize.HasManyAddAssociationMixin<api_bloquedusers, api_bloquedusersId>;
  addUser_bloqued_api_bloquedusers!: Sequelize.HasManyAddAssociationsMixin<api_bloquedusers, api_bloquedusersId>;
  createUser_bloqued_api_bloqueduser!: Sequelize.HasManyCreateAssociationMixin<api_bloquedusers>;
  removeUser_bloqued_api_bloqueduser!: Sequelize.HasManyRemoveAssociationMixin<api_bloquedusers, api_bloquedusersId>;
  removeUser_bloqued_api_bloquedusers!: Sequelize.HasManyRemoveAssociationsMixin<api_bloquedusers, api_bloquedusersId>;
  hasUser_bloqued_api_bloqueduser!: Sequelize.HasManyHasAssociationMixin<api_bloquedusers, api_bloquedusersId>;
  hasUser_bloqued_api_bloquedusers!: Sequelize.HasManyHasAssociationsMixin<api_bloquedusers, api_bloquedusersId>;
  countUser_bloqued_api_bloquedusers!: Sequelize.HasManyCountAssociationsMixin;
  // api_profile hasMany api_chatmessages via user_id
  api_chatmessages!: api_chatmessages[];
  getApi_chatmessages!: Sequelize.HasManyGetAssociationsMixin<api_chatmessages>;
  setApi_chatmessages!: Sequelize.HasManySetAssociationsMixin<api_chatmessages, api_chatmessagesId>;
  addApi_chatmessage!: Sequelize.HasManyAddAssociationMixin<api_chatmessages, api_chatmessagesId>;
  addApi_chatmessages!: Sequelize.HasManyAddAssociationsMixin<api_chatmessages, api_chatmessagesId>;
  createApi_chatmessage!: Sequelize.HasManyCreateAssociationMixin<api_chatmessages>;
  removeApi_chatmessage!: Sequelize.HasManyRemoveAssociationMixin<api_chatmessages, api_chatmessagesId>;
  removeApi_chatmessages!: Sequelize.HasManyRemoveAssociationsMixin<api_chatmessages, api_chatmessagesId>;
  hasApi_chatmessage!: Sequelize.HasManyHasAssociationMixin<api_chatmessages, api_chatmessagesId>;
  hasApi_chatmessages!: Sequelize.HasManyHasAssociationsMixin<api_chatmessages, api_chatmessagesId>;
  countApi_chatmessages!: Sequelize.HasManyCountAssociationsMixin;
  // api_profile hasMany api_chatroom_inactive_users via profile_id
  api_chatroom_inactive_users!: api_chatroom_inactive_users[];
  getApi_chatroom_inactive_users!: Sequelize.HasManyGetAssociationsMixin<api_chatroom_inactive_users>;
  setApi_chatroom_inactive_users!: Sequelize.HasManySetAssociationsMixin<api_chatroom_inactive_users, api_chatroom_inactive_usersId>;
  addApi_chatroom_inactive_user!: Sequelize.HasManyAddAssociationMixin<api_chatroom_inactive_users, api_chatroom_inactive_usersId>;
  addApi_chatroom_inactive_users!: Sequelize.HasManyAddAssociationsMixin<api_chatroom_inactive_users, api_chatroom_inactive_usersId>;
  createApi_chatroom_inactive_user!: Sequelize.HasManyCreateAssociationMixin<api_chatroom_inactive_users>;
  removeApi_chatroom_inactive_user!: Sequelize.HasManyRemoveAssociationMixin<api_chatroom_inactive_users, api_chatroom_inactive_usersId>;
  removeApi_chatroom_inactive_users!: Sequelize.HasManyRemoveAssociationsMixin<api_chatroom_inactive_users, api_chatroom_inactive_usersId>;
  hasApi_chatroom_inactive_user!: Sequelize.HasManyHasAssociationMixin<api_chatroom_inactive_users, api_chatroom_inactive_usersId>;
  hasApi_chatroom_inactive_users!: Sequelize.HasManyHasAssociationsMixin<api_chatroom_inactive_users, api_chatroom_inactive_usersId>;
  countApi_chatroom_inactive_users!: Sequelize.HasManyCountAssociationsMixin;
  // api_profile hasMany api_chatroom_users via profile_id
  api_chatroom_users!: api_chatroom_users[];
  getApi_chatroom_users!: Sequelize.HasManyGetAssociationsMixin<api_chatroom_users>;
  setApi_chatroom_users!: Sequelize.HasManySetAssociationsMixin<api_chatroom_users, api_chatroom_usersId>;
  addApi_chatroom_user!: Sequelize.HasManyAddAssociationMixin<api_chatroom_users, api_chatroom_usersId>;
  addApi_chatroom_users!: Sequelize.HasManyAddAssociationsMixin<api_chatroom_users, api_chatroom_usersId>;
  createApi_chatroom_user!: Sequelize.HasManyCreateAssociationMixin<api_chatroom_users>;
  removeApi_chatroom_user!: Sequelize.HasManyRemoveAssociationMixin<api_chatroom_users, api_chatroom_usersId>;
  removeApi_chatroom_users!: Sequelize.HasManyRemoveAssociationsMixin<api_chatroom_users, api_chatroom_usersId>;
  hasApi_chatroom_user!: Sequelize.HasManyHasAssociationMixin<api_chatroom_users, api_chatroom_usersId>;
  hasApi_chatroom_users!: Sequelize.HasManyHasAssociationsMixin<api_chatroom_users, api_chatroom_usersId>;
  countApi_chatroom_users!: Sequelize.HasManyCountAssociationsMixin;
  // api_profile hasOne api_code via user_id
  api_code!: api_code;
  getApi_code!: Sequelize.HasOneGetAssociationMixin<api_code>;
  setApi_code!: Sequelize.HasOneSetAssociationMixin<api_code, api_codeId>;
  createApi_code!: Sequelize.HasOneCreateAssociationMixin<api_code>;
  // api_profile hasMany api_crpaymentsaccount via profile_id
  api_crpaymentsaccounts!: api_crpaymentsaccount[];
  getApi_crpaymentsaccounts!: Sequelize.HasManyGetAssociationsMixin<api_crpaymentsaccount>;
  setApi_crpaymentsaccounts!: Sequelize.HasManySetAssociationsMixin<api_crpaymentsaccount, api_crpaymentsaccountId>;
  addApi_crpaymentsaccount!: Sequelize.HasManyAddAssociationMixin<api_crpaymentsaccount, api_crpaymentsaccountId>;
  addApi_crpaymentsaccounts!: Sequelize.HasManyAddAssociationsMixin<api_crpaymentsaccount, api_crpaymentsaccountId>;
  createApi_crpaymentsaccount!: Sequelize.HasManyCreateAssociationMixin<api_crpaymentsaccount>;
  removeApi_crpaymentsaccount!: Sequelize.HasManyRemoveAssociationMixin<api_crpaymentsaccount, api_crpaymentsaccountId>;
  removeApi_crpaymentsaccounts!: Sequelize.HasManyRemoveAssociationsMixin<api_crpaymentsaccount, api_crpaymentsaccountId>;
  hasApi_crpaymentsaccount!: Sequelize.HasManyHasAssociationMixin<api_crpaymentsaccount, api_crpaymentsaccountId>;
  hasApi_crpaymentsaccounts!: Sequelize.HasManyHasAssociationsMixin<api_crpaymentsaccount, api_crpaymentsaccountId>;
  countApi_crpaymentsaccounts!: Sequelize.HasManyCountAssociationsMixin;
  // api_profile hasMany api_cupaymentsaccount via profile_id
  api_cupaymentsaccounts!: api_cupaymentsaccount[];
  getApi_cupaymentsaccounts!: Sequelize.HasManyGetAssociationsMixin<api_cupaymentsaccount>;
  setApi_cupaymentsaccounts!: Sequelize.HasManySetAssociationsMixin<api_cupaymentsaccount, api_cupaymentsaccountId>;
  addApi_cupaymentsaccount!: Sequelize.HasManyAddAssociationMixin<api_cupaymentsaccount, api_cupaymentsaccountId>;
  addApi_cupaymentsaccounts!: Sequelize.HasManyAddAssociationsMixin<api_cupaymentsaccount, api_cupaymentsaccountId>;
  createApi_cupaymentsaccount!: Sequelize.HasManyCreateAssociationMixin<api_cupaymentsaccount>;
  removeApi_cupaymentsaccount!: Sequelize.HasManyRemoveAssociationMixin<api_cupaymentsaccount, api_cupaymentsaccountId>;
  removeApi_cupaymentsaccounts!: Sequelize.HasManyRemoveAssociationsMixin<api_cupaymentsaccount, api_cupaymentsaccountId>;
  hasApi_cupaymentsaccount!: Sequelize.HasManyHasAssociationMixin<api_cupaymentsaccount, api_cupaymentsaccountId>;
  hasApi_cupaymentsaccounts!: Sequelize.HasManyHasAssociationsMixin<api_cupaymentsaccount, api_cupaymentsaccountId>;
  countApi_cupaymentsaccounts!: Sequelize.HasManyCountAssociationsMixin;
  // api_profile hasMany api_customemail via toUser_id
  api_customemails!: api_customemail[];
  getApi_customemails!: Sequelize.HasManyGetAssociationsMixin<api_customemail>;
  setApi_customemails!: Sequelize.HasManySetAssociationsMixin<api_customemail, api_customemailId>;
  addApi_customemail!: Sequelize.HasManyAddAssociationMixin<api_customemail, api_customemailId>;
  addApi_customemails!: Sequelize.HasManyAddAssociationsMixin<api_customemail, api_customemailId>;
  createApi_customemail!: Sequelize.HasManyCreateAssociationMixin<api_customemail>;
  removeApi_customemail!: Sequelize.HasManyRemoveAssociationMixin<api_customemail, api_customemailId>;
  removeApi_customemails!: Sequelize.HasManyRemoveAssociationsMixin<api_customemail, api_customemailId>;
  hasApi_customemail!: Sequelize.HasManyHasAssociationMixin<api_customemail, api_customemailId>;
  hasApi_customemails!: Sequelize.HasManyHasAssociationsMixin<api_customemail, api_customemailId>;
  countApi_customemails!: Sequelize.HasManyCountAssociationsMixin;
  // api_profile hasMany api_invoice via to_user_id
  api_invoices!: api_invoice[];
  getApi_invoices!: Sequelize.HasManyGetAssociationsMixin<api_invoice>;
  setApi_invoices!: Sequelize.HasManySetAssociationsMixin<api_invoice, api_invoiceId>;
  addApi_invoice!: Sequelize.HasManyAddAssociationMixin<api_invoice, api_invoiceId>;
  addApi_invoices!: Sequelize.HasManyAddAssociationsMixin<api_invoice, api_invoiceId>;
  createApi_invoice!: Sequelize.HasManyCreateAssociationMixin<api_invoice>;
  removeApi_invoice!: Sequelize.HasManyRemoveAssociationMixin<api_invoice, api_invoiceId>;
  removeApi_invoices!: Sequelize.HasManyRemoveAssociationsMixin<api_invoice, api_invoiceId>;
  hasApi_invoice!: Sequelize.HasManyHasAssociationMixin<api_invoice, api_invoiceId>;
  hasApi_invoices!: Sequelize.HasManyHasAssociationsMixin<api_invoice, api_invoiceId>;
  countApi_invoices!: Sequelize.HasManyCountAssociationsMixin;
  // api_profile hasMany api_notification via profile_id
  api_notifications!: api_notification[];
  getApi_notifications!: Sequelize.HasManyGetAssociationsMixin<api_notification>;
  setApi_notifications!: Sequelize.HasManySetAssociationsMixin<api_notification, api_notificationId>;
  addApi_notification!: Sequelize.HasManyAddAssociationMixin<api_notification, api_notificationId>;
  addApi_notifications!: Sequelize.HasManyAddAssociationsMixin<api_notification, api_notificationId>;
  createApi_notification!: Sequelize.HasManyCreateAssociationMixin<api_notification>;
  removeApi_notification!: Sequelize.HasManyRemoveAssociationMixin<api_notification, api_notificationId>;
  removeApi_notifications!: Sequelize.HasManyRemoveAssociationsMixin<api_notification, api_notificationId>;
  hasApi_notification!: Sequelize.HasManyHasAssociationMixin<api_notification, api_notificationId>;
  hasApi_notifications!: Sequelize.HasManyHasAssociationsMixin<api_notification, api_notificationId>;
  countApi_notifications!: Sequelize.HasManyCountAssociationsMixin;
  // api_profile hasMany api_payment via user_id
  api_payments!: api_payment[];
  getApi_payments!: Sequelize.HasManyGetAssociationsMixin<api_payment>;
  setApi_payments!: Sequelize.HasManySetAssociationsMixin<api_payment, api_paymentId>;
  addApi_payment!: Sequelize.HasManyAddAssociationMixin<api_payment, api_paymentId>;
  addApi_payments!: Sequelize.HasManyAddAssociationsMixin<api_payment, api_paymentId>;
  createApi_payment!: Sequelize.HasManyCreateAssociationMixin<api_payment>;
  removeApi_payment!: Sequelize.HasManyRemoveAssociationMixin<api_payment, api_paymentId>;
  removeApi_payments!: Sequelize.HasManyRemoveAssociationsMixin<api_payment, api_paymentId>;
  hasApi_payment!: Sequelize.HasManyHasAssociationMixin<api_payment, api_paymentId>;
  hasApi_payments!: Sequelize.HasManyHasAssociationsMixin<api_payment, api_paymentId>;
  countApi_payments!: Sequelize.HasManyCountAssociationsMixin;
  // api_profile hasMany api_review via author_id
  api_reviews!: api_review[];
  getApi_reviews!: Sequelize.HasManyGetAssociationsMixin<api_review>;
  setApi_reviews!: Sequelize.HasManySetAssociationsMixin<api_review, api_reviewId>;
  addApi_review!: Sequelize.HasManyAddAssociationMixin<api_review, api_reviewId>;
  addApi_reviews!: Sequelize.HasManyAddAssociationsMixin<api_review, api_reviewId>;
  createApi_review!: Sequelize.HasManyCreateAssociationMixin<api_review>;
  removeApi_review!: Sequelize.HasManyRemoveAssociationMixin<api_review, api_reviewId>;
  removeApi_reviews!: Sequelize.HasManyRemoveAssociationsMixin<api_review, api_reviewId>;
  hasApi_review!: Sequelize.HasManyHasAssociationMixin<api_review, api_reviewId>;
  hasApi_reviews!: Sequelize.HasManyHasAssociationsMixin<api_review, api_reviewId>;
  countApi_reviews!: Sequelize.HasManyCountAssociationsMixin;
  // api_profile hasMany api_reviewanswer via profile_id
  api_reviewanswers!: api_reviewanswer[];
  getApi_reviewanswers!: Sequelize.HasManyGetAssociationsMixin<api_reviewanswer>;
  setApi_reviewanswers!: Sequelize.HasManySetAssociationsMixin<api_reviewanswer, api_reviewanswerId>;
  addApi_reviewanswer!: Sequelize.HasManyAddAssociationMixin<api_reviewanswer, api_reviewanswerId>;
  addApi_reviewanswers!: Sequelize.HasManyAddAssociationsMixin<api_reviewanswer, api_reviewanswerId>;
  createApi_reviewanswer!: Sequelize.HasManyCreateAssociationMixin<api_reviewanswer>;
  removeApi_reviewanswer!: Sequelize.HasManyRemoveAssociationMixin<api_reviewanswer, api_reviewanswerId>;
  removeApi_reviewanswers!: Sequelize.HasManyRemoveAssociationsMixin<api_reviewanswer, api_reviewanswerId>;
  hasApi_reviewanswer!: Sequelize.HasManyHasAssociationMixin<api_reviewanswer, api_reviewanswerId>;
  hasApi_reviewanswers!: Sequelize.HasManyHasAssociationsMixin<api_reviewanswer, api_reviewanswerId>;
  countApi_reviewanswers!: Sequelize.HasManyCountAssociationsMixin;
  // api_profile hasMany api_reviewreport via from_user_id
  api_reviewreports!: api_reviewreport[];
  getApi_reviewreports!: Sequelize.HasManyGetAssociationsMixin<api_reviewreport>;
  setApi_reviewreports!: Sequelize.HasManySetAssociationsMixin<api_reviewreport, api_reviewreportId>;
  addApi_reviewreport!: Sequelize.HasManyAddAssociationMixin<api_reviewreport, api_reviewreportId>;
  addApi_reviewreports!: Sequelize.HasManyAddAssociationsMixin<api_reviewreport, api_reviewreportId>;
  createApi_reviewreport!: Sequelize.HasManyCreateAssociationMixin<api_reviewreport>;
  removeApi_reviewreport!: Sequelize.HasManyRemoveAssociationMixin<api_reviewreport, api_reviewreportId>;
  removeApi_reviewreports!: Sequelize.HasManyRemoveAssociationsMixin<api_reviewreport, api_reviewreportId>;
  hasApi_reviewreport!: Sequelize.HasManyHasAssociationMixin<api_reviewreport, api_reviewreportId>;
  hasApi_reviewreports!: Sequelize.HasManyHasAssociationsMixin<api_reviewreport, api_reviewreportId>;
  countApi_reviewreports!: Sequelize.HasManyCountAssociationsMixin;
  // api_profile hasMany api_service via owner_id
  api_services!: api_service[];
  getApi_services!: Sequelize.HasManyGetAssociationsMixin<api_service>;
  setApi_services!: Sequelize.HasManySetAssociationsMixin<api_service, api_serviceId>;
  addApi_service!: Sequelize.HasManyAddAssociationMixin<api_service, api_serviceId>;
  addApi_services!: Sequelize.HasManyAddAssociationsMixin<api_service, api_serviceId>;
  createApi_service!: Sequelize.HasManyCreateAssociationMixin<api_service>;
  removeApi_service!: Sequelize.HasManyRemoveAssociationMixin<api_service, api_serviceId>;
  removeApi_services!: Sequelize.HasManyRemoveAssociationsMixin<api_service, api_serviceId>;
  hasApi_service!: Sequelize.HasManyHasAssociationMixin<api_service, api_serviceId>;
  hasApi_services!: Sequelize.HasManyHasAssociationsMixin<api_service, api_serviceId>;
  countApi_services!: Sequelize.HasManyCountAssociationsMixin;
  // api_profile hasMany api_service_followers via profile_id
  api_service_followers!: api_service_followers[];
  getApi_service_followers!: Sequelize.HasManyGetAssociationsMixin<api_service_followers>;
  setApi_service_followers!: Sequelize.HasManySetAssociationsMixin<api_service_followers, api_service_followersId>;
  addApi_service_follower!: Sequelize.HasManyAddAssociationMixin<api_service_followers, api_service_followersId>;
  addApi_service_followers!: Sequelize.HasManyAddAssociationsMixin<api_service_followers, api_service_followersId>;
  createApi_service_follower!: Sequelize.HasManyCreateAssociationMixin<api_service_followers>;
  removeApi_service_follower!: Sequelize.HasManyRemoveAssociationMixin<api_service_followers, api_service_followersId>;
  removeApi_service_followers!: Sequelize.HasManyRemoveAssociationsMixin<api_service_followers, api_service_followersId>;
  hasApi_service_follower!: Sequelize.HasManyHasAssociationMixin<api_service_followers, api_service_followersId>;
  hasApi_service_followers!: Sequelize.HasManyHasAssociationsMixin<api_service_followers, api_service_followersId>;
  countApi_service_followers!: Sequelize.HasManyCountAssociationsMixin;
  // api_profile hasMany api_servicereport via from_user_id
  api_servicereports!: api_servicereport[];
  getApi_servicereports!: Sequelize.HasManyGetAssociationsMixin<api_servicereport>;
  setApi_servicereports!: Sequelize.HasManySetAssociationsMixin<api_servicereport, api_servicereportId>;
  addApi_servicereport!: Sequelize.HasManyAddAssociationMixin<api_servicereport, api_servicereportId>;
  addApi_servicereports!: Sequelize.HasManyAddAssociationsMixin<api_servicereport, api_servicereportId>;
  createApi_servicereport!: Sequelize.HasManyCreateAssociationMixin<api_servicereport>;
  removeApi_servicereport!: Sequelize.HasManyRemoveAssociationMixin<api_servicereport, api_servicereportId>;
  removeApi_servicereports!: Sequelize.HasManyRemoveAssociationsMixin<api_servicereport, api_servicereportId>;
  hasApi_servicereport!: Sequelize.HasManyHasAssociationMixin<api_servicereport, api_servicereportId>;
  hasApi_servicereports!: Sequelize.HasManyHasAssociationsMixin<api_servicereport, api_servicereportId>;
  countApi_servicereports!: Sequelize.HasManyCountAssociationsMixin;
  // api_profile hasMany api_servicevisit via author_id
  api_servicevisits!: api_servicevisit[];
  getApi_servicevisits!: Sequelize.HasManyGetAssociationsMixin<api_servicevisit>;
  setApi_servicevisits!: Sequelize.HasManySetAssociationsMixin<api_servicevisit, api_servicevisitId>;
  addApi_servicevisit!: Sequelize.HasManyAddAssociationMixin<api_servicevisit, api_servicevisitId>;
  addApi_servicevisits!: Sequelize.HasManyAddAssociationsMixin<api_servicevisit, api_servicevisitId>;
  createApi_servicevisit!: Sequelize.HasManyCreateAssociationMixin<api_servicevisit>;
  removeApi_servicevisit!: Sequelize.HasManyRemoveAssociationMixin<api_servicevisit, api_servicevisitId>;
  removeApi_servicevisits!: Sequelize.HasManyRemoveAssociationsMixin<api_servicevisit, api_servicevisitId>;
  hasApi_servicevisit!: Sequelize.HasManyHasAssociationMixin<api_servicevisit, api_servicevisitId>;
  hasApi_servicevisits!: Sequelize.HasManyHasAssociationsMixin<api_servicevisit, api_servicevisitId>;
  countApi_servicevisits!: Sequelize.HasManyCountAssociationsMixin;
  // api_profile hasMany api_socialaccount via profile_id
  api_socialaccounts!: api_socialaccount[];
  getApi_socialaccounts!: Sequelize.HasManyGetAssociationsMixin<api_socialaccount>;
  setApi_socialaccounts!: Sequelize.HasManySetAssociationsMixin<api_socialaccount, api_socialaccountId>;
  addApi_socialaccount!: Sequelize.HasManyAddAssociationMixin<api_socialaccount, api_socialaccountId>;
  addApi_socialaccounts!: Sequelize.HasManyAddAssociationsMixin<api_socialaccount, api_socialaccountId>;
  createApi_socialaccount!: Sequelize.HasManyCreateAssociationMixin<api_socialaccount>;
  removeApi_socialaccount!: Sequelize.HasManyRemoveAssociationMixin<api_socialaccount, api_socialaccountId>;
  removeApi_socialaccounts!: Sequelize.HasManyRemoveAssociationsMixin<api_socialaccount, api_socialaccountId>;
  hasApi_socialaccount!: Sequelize.HasManyHasAssociationMixin<api_socialaccount, api_socialaccountId>;
  hasApi_socialaccounts!: Sequelize.HasManyHasAssociationsMixin<api_socialaccount, api_socialaccountId>;
  countApi_socialaccounts!: Sequelize.HasManyCountAssociationsMixin;
  // api_profile hasMany api_token via user_id
  api_tokens!: api_token[];
  getApi_tokens!: Sequelize.HasManyGetAssociationsMixin<api_token>;
  setApi_tokens!: Sequelize.HasManySetAssociationsMixin<api_token, api_tokenId>;
  addApi_token!: Sequelize.HasManyAddAssociationMixin<api_token, api_tokenId>;
  addApi_tokens!: Sequelize.HasManyAddAssociationsMixin<api_token, api_tokenId>;
  createApi_token!: Sequelize.HasManyCreateAssociationMixin<api_token>;
  removeApi_token!: Sequelize.HasManyRemoveAssociationMixin<api_token, api_tokenId>;
  removeApi_tokens!: Sequelize.HasManyRemoveAssociationsMixin<api_token, api_tokenId>;
  hasApi_token!: Sequelize.HasManyHasAssociationMixin<api_token, api_tokenId>;
  hasApi_tokens!: Sequelize.HasManyHasAssociationsMixin<api_token, api_tokenId>;
  countApi_tokens!: Sequelize.HasManyCountAssociationsMixin;
  // api_profile hasMany api_usernotification via user_id
  api_usernotifications!: api_usernotification[];
  getApi_usernotifications!: Sequelize.HasManyGetAssociationsMixin<api_usernotification>;
  setApi_usernotifications!: Sequelize.HasManySetAssociationsMixin<api_usernotification, api_usernotificationId>;
  addApi_usernotification!: Sequelize.HasManyAddAssociationMixin<api_usernotification, api_usernotificationId>;
  addApi_usernotifications!: Sequelize.HasManyAddAssociationsMixin<api_usernotification, api_usernotificationId>;
  createApi_usernotification!: Sequelize.HasManyCreateAssociationMixin<api_usernotification>;
  removeApi_usernotification!: Sequelize.HasManyRemoveAssociationMixin<api_usernotification, api_usernotificationId>;
  removeApi_usernotifications!: Sequelize.HasManyRemoveAssociationsMixin<api_usernotification, api_usernotificationId>;
  hasApi_usernotification!: Sequelize.HasManyHasAssociationMixin<api_usernotification, api_usernotificationId>;
  hasApi_usernotifications!: Sequelize.HasManyHasAssociationsMixin<api_usernotification, api_usernotificationId>;
  countApi_usernotifications!: Sequelize.HasManyCountAssociationsMixin;
  // api_profile hasMany api_userreport via from_user_id
  api_userreports!: api_userreport[];
  getApi_userreports!: Sequelize.HasManyGetAssociationsMixin<api_userreport>;
  setApi_userreports!: Sequelize.HasManySetAssociationsMixin<api_userreport, api_userreportId>;
  addApi_userreport!: Sequelize.HasManyAddAssociationMixin<api_userreport, api_userreportId>;
  addApi_userreports!: Sequelize.HasManyAddAssociationsMixin<api_userreport, api_userreportId>;
  createApi_userreport!: Sequelize.HasManyCreateAssociationMixin<api_userreport>;
  removeApi_userreport!: Sequelize.HasManyRemoveAssociationMixin<api_userreport, api_userreportId>;
  removeApi_userreports!: Sequelize.HasManyRemoveAssociationsMixin<api_userreport, api_userreportId>;
  hasApi_userreport!: Sequelize.HasManyHasAssociationMixin<api_userreport, api_userreportId>;
  hasApi_userreports!: Sequelize.HasManyHasAssociationsMixin<api_userreport, api_userreportId>;
  countApi_userreports!: Sequelize.HasManyCountAssociationsMixin;
  // api_profile hasMany api_userreport via user_id
  user_api_userreports!: api_userreport[];
  getUser_api_userreports!: Sequelize.HasManyGetAssociationsMixin<api_userreport>;
  setUser_api_userreports!: Sequelize.HasManySetAssociationsMixin<api_userreport, api_userreportId>;
  addUser_api_userreport!: Sequelize.HasManyAddAssociationMixin<api_userreport, api_userreportId>;
  addUser_api_userreports!: Sequelize.HasManyAddAssociationsMixin<api_userreport, api_userreportId>;
  createUser_api_userreport!: Sequelize.HasManyCreateAssociationMixin<api_userreport>;
  removeUser_api_userreport!: Sequelize.HasManyRemoveAssociationMixin<api_userreport, api_userreportId>;
  removeUser_api_userreports!: Sequelize.HasManyRemoveAssociationsMixin<api_userreport, api_userreportId>;
  hasUser_api_userreport!: Sequelize.HasManyHasAssociationMixin<api_userreport, api_userreportId>;
  hasUser_api_userreports!: Sequelize.HasManyHasAssociationsMixin<api_userreport, api_userreportId>;
  countUser_api_userreports!: Sequelize.HasManyCountAssociationsMixin;
  // api_profile belongsTo custom_user_user via user_id
  user!: custom_user_user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<custom_user_user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<custom_user_user, custom_user_userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<custom_user_user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_profile {
    return api_profile.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    full_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    avatar: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    membership_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_membership',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'custom_user_user',
        key: 'id'
      },
      unique: "api_profile_user_id_key"
    },
    selected_languaje: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    municipality_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'api_municipality',
        key: 'id'
      }
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    email_profile: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'api_profile',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_profile_membership_id_6f8d805f",
        fields: [
          { name: "membership_id" },
        ]
      },
      {
        name: "api_profile_municipality_id_a881ab2a",
        fields: [
          { name: "municipality_id" },
        ]
      },
      {
        name: "api_profile_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "api_profile_user_id_key",
        unique: true,
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
