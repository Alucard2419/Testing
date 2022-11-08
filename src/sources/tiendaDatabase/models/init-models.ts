import type { Sequelize } from "sequelize";
import { api_appversion as _api_appversion } from "./api_appversion";
import type { api_appversionAttributes, api_appversionCreationAttributes } from "./api_appversion";
import { api_blogentry as _api_blogentry } from "./api_blogentry";
import type { api_blogentryAttributes, api_blogentryCreationAttributes } from "./api_blogentry";
import { api_category as _api_category } from "./api_category";
import type { api_categoryAttributes, api_categoryCreationAttributes } from "./api_category";
import { api_deliverydetails as _api_deliverydetails } from "./api_deliverydetails";
import type { api_deliverydetailsAttributes, api_deliverydetailsCreationAttributes } from "./api_deliverydetails";
import { api_department as _api_department } from "./api_department";
import type { api_departmentAttributes, api_departmentCreationAttributes } from "./api_department";
import { api_favoriteproducts as _api_favoriteproducts } from "./api_favoriteproducts";
import type { api_favoriteproductsAttributes, api_favoriteproductsCreationAttributes } from "./api_favoriteproducts";
import { api_imageinvoice as _api_imageinvoice } from "./api_imageinvoice";
import type { api_imageinvoiceAttributes, api_imageinvoiceCreationAttributes } from "./api_imageinvoice";
import { api_imageproduct as _api_imageproduct } from "./api_imageproduct";
import type { api_imageproductAttributes, api_imageproductCreationAttributes } from "./api_imageproduct";
import { api_imagereview as _api_imagereview } from "./api_imagereview";
import type { api_imagereviewAttributes, api_imagereviewCreationAttributes } from "./api_imagereview";
import { api_invoice as _api_invoice } from "./api_invoice";
import type { api_invoiceAttributes, api_invoiceCreationAttributes } from "./api_invoice";
import { api_invoice_products_list as _api_invoice_products_list } from "./api_invoice_products_list";
import type { api_invoice_products_listAttributes, api_invoice_products_listCreationAttributes } from "./api_invoice_products_list";
import { api_invoiceproduct as _api_invoiceproduct } from "./api_invoiceproduct";
import type { api_invoiceproductAttributes, api_invoiceproductCreationAttributes } from "./api_invoiceproduct";
import { api_location as _api_location } from "./api_location";
import type { api_locationAttributes, api_locationCreationAttributes } from "./api_location";
import { api_product as _api_product } from "./api_product";
import type { api_productAttributes, api_productCreationAttributes } from "./api_product";
import { api_product_review as _api_product_review } from "./api_product_review";
import type { api_product_reviewAttributes, api_product_reviewCreationAttributes } from "./api_product_review";
import { api_section as _api_section } from "./api_section";
import type { api_sectionAttributes, api_sectionCreationAttributes } from "./api_section";
import { api_shop as _api_shop } from "./api_shop";
import type { api_shopAttributes, api_shopCreationAttributes } from "./api_shop";
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
  _api_category as api_category,
  _api_deliverydetails as api_deliverydetails,
  _api_department as api_department,
  _api_favoriteproducts as api_favoriteproducts,
  _api_imageinvoice as api_imageinvoice,
  _api_imageproduct as api_imageproduct,
  _api_imagereview as api_imagereview,
  _api_invoice as api_invoice,
  _api_invoice_products_list as api_invoice_products_list,
  _api_invoiceproduct as api_invoiceproduct,
  _api_location as api_location,
  _api_product as api_product,
  _api_product_review as api_product_review,
  _api_section as api_section,
  _api_shop as api_shop,
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
  api_categoryAttributes,
  api_categoryCreationAttributes,
  api_deliverydetailsAttributes,
  api_deliverydetailsCreationAttributes,
  api_departmentAttributes,
  api_departmentCreationAttributes,
  api_favoriteproductsAttributes,
  api_favoriteproductsCreationAttributes,
  api_imageinvoiceAttributes,
  api_imageinvoiceCreationAttributes,
  api_imageproductAttributes,
  api_imageproductCreationAttributes,
  api_imagereviewAttributes,
  api_imagereviewCreationAttributes,
  api_invoiceAttributes,
  api_invoiceCreationAttributes,
  api_invoice_products_listAttributes,
  api_invoice_products_listCreationAttributes,
  api_invoiceproductAttributes,
  api_invoiceproductCreationAttributes,
  api_locationAttributes,
  api_locationCreationAttributes,
  api_productAttributes,
  api_productCreationAttributes,
  api_product_reviewAttributes,
  api_product_reviewCreationAttributes,
  api_sectionAttributes,
  api_sectionCreationAttributes,
  api_shopAttributes,
  api_shopCreationAttributes,
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
  const api_category = _api_category.initModel(sequelize);
  const api_deliverydetails = _api_deliverydetails.initModel(sequelize);
  const api_department = _api_department.initModel(sequelize);
  const api_favoriteproducts = _api_favoriteproducts.initModel(sequelize);
  const api_imageinvoice = _api_imageinvoice.initModel(sequelize);
  const api_imageproduct = _api_imageproduct.initModel(sequelize);
  const api_imagereview = _api_imagereview.initModel(sequelize);
  const api_invoice = _api_invoice.initModel(sequelize);
  const api_invoice_products_list = _api_invoice_products_list.initModel(sequelize);
  const api_invoiceproduct = _api_invoiceproduct.initModel(sequelize);
  const api_location = _api_location.initModel(sequelize);
  const api_product = _api_product.initModel(sequelize);
  const api_product_review = _api_product_review.initModel(sequelize);
  const api_section = _api_section.initModel(sequelize);
  const api_shop = _api_shop.initModel(sequelize);
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
  api_invoice.belongsTo(api_deliverydetails, { as: "delivery_detail", foreignKey: "delivery_details_id"});
  api_deliverydetails.hasOne(api_invoice, { as: "api_invoice", foreignKey: "delivery_details_id"});
  api_section.belongsTo(api_department, { as: "department", foreignKey: "department_id"});
  api_department.hasMany(api_section, { as: "api_sections", foreignKey: "department_id"});
  api_imageinvoice.belongsTo(api_invoice, { as: "review", foreignKey: "review_id"});
  api_invoice.hasMany(api_imageinvoice, { as: "api_imageinvoices", foreignKey: "review_id"});
  api_invoice_products_list.belongsTo(api_invoice, { as: "invoice", foreignKey: "invoice_id"});
  api_invoice.hasMany(api_invoice_products_list, { as: "api_invoice_products_lists", foreignKey: "invoice_id"});
  api_invoice_products_list.belongsTo(api_invoiceproduct, { as: "invoiceproduct", foreignKey: "invoiceproduct_id"});
  api_invoiceproduct.hasMany(api_invoice_products_list, { as: "api_invoice_products_lists", foreignKey: "invoiceproduct_id"});
  api_shop.belongsTo(api_location, { as: "location", foreignKey: "location_id"});
  api_location.hasMany(api_shop, { as: "api_shops", foreignKey: "location_id"});
  api_favoriteproducts.belongsTo(api_product, { as: "favorite_product", foreignKey: "favorite_product_id"});
  api_product.hasMany(api_favoriteproducts, { as: "api_favoriteproducts", foreignKey: "favorite_product_id"});
  api_imageproduct.belongsTo(api_product, { as: "product", foreignKey: "product_id"});
  api_product.hasMany(api_imageproduct, { as: "api_imageproducts", foreignKey: "product_id"});
  api_invoiceproduct.belongsTo(api_product, { as: "productId", foreignKey: "productId_id"});
  api_product.hasMany(api_invoiceproduct, { as: "api_invoiceproducts", foreignKey: "productId_id"});
  api_product_review.belongsTo(api_product, { as: "to_product", foreignKey: "to_product_id"});
  api_product.hasMany(api_product_review, { as: "api_product_reviews", foreignKey: "to_product_id"});
  api_imagereview.belongsTo(api_product_review, { as: "review", foreignKey: "review_id"});
  api_product_review.hasMany(api_imagereview, { as: "api_imagereviews", foreignKey: "review_id"});
  api_product.belongsTo(api_section, { as: "section", foreignKey: "section_id"});
  api_section.hasMany(api_product, { as: "api_products", foreignKey: "section_id"});
  api_product.belongsTo(api_shop, { as: "shop", foreignKey: "shop_id"});
  api_shop.hasMany(api_product, { as: "api_products", foreignKey: "shop_id"});
  auth_group_permissions.belongsTo(auth_group, { as: "group", foreignKey: "group_id"});
  auth_group.hasMany(auth_group_permissions, { as: "auth_group_permissions", foreignKey: "group_id"});
  custom_user_user_groups.belongsTo(auth_group, { as: "group", foreignKey: "group_id"});
  auth_group.hasMany(custom_user_user_groups, { as: "custom_user_user_groups", foreignKey: "group_id"});
  auth_group_permissions.belongsTo(auth_permission, { as: "permission", foreignKey: "permission_id"});
  auth_permission.hasMany(auth_group_permissions, { as: "auth_group_permissions", foreignKey: "permission_id"});
  custom_user_user_user_permissions.belongsTo(auth_permission, { as: "permission", foreignKey: "permission_id"});
  auth_permission.hasMany(custom_user_user_user_permissions, { as: "custom_user_user_user_permissions", foreignKey: "permission_id"});
  custom_user_user_groups.belongsTo(custom_user_user, { as: "user", foreignKey: "user_id"});
  custom_user_user.hasMany(custom_user_user_groups, { as: "custom_user_user_groups", foreignKey: "user_id"});
  custom_user_user_user_permissions.belongsTo(custom_user_user, { as: "user", foreignKey: "user_id"});
  custom_user_user.hasMany(custom_user_user_user_permissions, { as: "custom_user_user_user_permissions", foreignKey: "user_id"});
  django_admin_log.belongsTo(custom_user_user, { as: "user", foreignKey: "user_id"});
  custom_user_user.hasMany(django_admin_log, { as: "django_admin_logs", foreignKey: "user_id"});
  fcm_django_fcmdevice.belongsTo(custom_user_user, { as: "user", foreignKey: "user_id"});
  custom_user_user.hasMany(fcm_django_fcmdevice, { as: "fcm_django_fcmdevices", foreignKey: "user_id"});
  auth_permission.belongsTo(django_content_type, { as: "content_type", foreignKey: "content_type_id"});
  django_content_type.hasMany(auth_permission, { as: "auth_permissions", foreignKey: "content_type_id"});
  django_admin_log.belongsTo(django_content_type, { as: "content_type", foreignKey: "content_type_id"});
  django_content_type.hasMany(django_admin_log, { as: "django_admin_logs", foreignKey: "content_type_id"});

  return {
    api_appversion: api_appversion,
    api_blogentry: api_blogentry,
    api_category: api_category,
    api_deliverydetails: api_deliverydetails,
    api_department: api_department,
    api_favoriteproducts: api_favoriteproducts,
    api_imageinvoice: api_imageinvoice,
    api_imageproduct: api_imageproduct,
    api_imagereview: api_imagereview,
    api_invoice: api_invoice,
    api_invoice_products_list: api_invoice_products_list,
    api_invoiceproduct: api_invoiceproduct,
    api_location: api_location,
    api_product: api_product,
    api_product_review: api_product_review,
    api_section: api_section,
    api_shop: api_shop,
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
