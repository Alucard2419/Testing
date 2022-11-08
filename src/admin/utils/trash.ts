// export class AdminManager
// {
//   admin_js: any;
//   configs: any;
//   databases: Array<any>;
//   app: any;
//   events: EventEmitter;
//   router: any;
//
//   constructor(props) {
//     this.events = props.events;
//     this.app = props.app;
//     this.configs = props.config;
//     this.databases = sc.get(props, 'databases', []);
//     this.init().then();
//   }


//   // setup_admin()
//   // {
//   //   AdminJS.registerAdapter({
//   //     Database: DriverDatabase,
//   //     Resource: DriverResource
//   //   });
//   //
//   //   let admin_js_config = {
//   //     databases: this.databases,
//   //     locale,
//   //     assets: {
//   //       styles: ['/index.css',],
//   //       scripts: process.env.NODE_ENV === 'production' ? ['/gtm.js'] : [],
//   //     },
//   //     rootPath: '/admin',
//   //     branding: {
//   //       companyName: 'Sibucan',
//   //       favicon: '/favicon.ico',
//   //       theme,
//   //     },
//   //     version: {
//   //       admin: true,
//   //       app: '1.0.0',
//   //     },
//   //     resources: [
//   //       // // custom
//   //       //
//   //       // // mongo
//   //       // CreateAdminResource(),
//   //       // CreateUserResource(),
//   //       // CreateCategoryResource(),
//   //       // CreateArticleResource(),
//   //       // CreateCommentResource(),
//   //       // CreateComplicatedResource(),
//   //       // // sequelize
//   //       // CreateSequelizeCategoryResource(),
//   //       // CreateProductResource(),
//   //       // CreateOrderResource(),
//   //       // CreateCartResource(),
//   //       // // typeorm
//   //       //
//   //       // // mikroorm
//   //       //
//   //       // // prisma
//   //       //
//   //       // // objectionjs
//   //
//   //     ],
//   //     pages: {
//   //       'Custom Page': {
//   //         component: SOME_STATS,
//   //         icon: 'Purchase',
//   //         // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   //         handler: async (request, response, context) => {
//   //           return {
//   //             text: 'I am fetched from the backend',
//   //           };
//   //         },
//   //       },
//   //       'Design system example': {
//   //         component: DESIGN_SYSTEM_EXAMPLE_PAGE,
//   //         icon: 'Workspace',
//   //       },
//   //     },
//   //   }
//   //
//   //   this.events.emit('panel.beforeAdminjs', {adminManager: admin_js_config});
//   //   this.admin_js = new AdminJS(admin_js_config);
//   //   let adminJS = this.admin_js;
//   //   AdminJS.prototype.renderLogin = async function ({ action, errorMessage }) {
//   //     return getHtml(adminJS, SingInForm, {
//   //       credentials: ADMIN,
//   //       action: action ?? adminJS.options.loginPath,
//   //       errorMessage,
//   //     });
//   //   };
//   //
//   //   this.router = expressAuthenticatedRouter(adminJS);
//   //   this.app.use(adminJS.options.rootPath, this.router);
//   //   this.app.get('/', (req, res) => res.redirect(adminJS.options.rootPath));
//   //   this.app.use(express.static(path.join(__dirname, '../public')));
//   //   this.events.emit('panel.afterAdminjs', {adminManager:this})
//   // }
//
//  async init() {
//     await createAdmin();
//  }
//   static prepareResources(rawResources)
//   {
//     let rawResourcesKeys = Object.keys(rawResources);
//     if(!rawResources || 0 === rawResourcesKeys.length){
//       return [];
//     }
//     let registeredResources = [];
//     for(let i of rawResourcesKeys){
//       let rawResource = rawResources[i];
//       let driverResource = {
//         resource: new DriverResource(rawResource.rawEntity, rawResource.config),
//         id: () => {
//           return rawResource.rawEntity.tableName();
//         },
//         options: {
//           navigation: sc.hasOwn(rawResource.config, 'parentItemLabel') ? {
//             name: rawResource.config.parentItemLabel,
//             icon: rawResource.config.icon || 'List'
//           } : null,
//           listProperties: rawResource.config.listProperties || [],
//           showProperties: rawResource.config.showProperties || [],
//           filterProperties: rawResource.config.filterProperties || [],
//           editProperties: rawResource.config.editProperties || [],
//           properties: rawResource.config.properties || [],
//           sort: sc.get(rawResource.config, 'sort', null)
//         },
//         features: sc.get(rawResource.config, 'features', [])
//       };
//       registeredResources.push(driverResource);
//     }
//     return registeredResources;
//   }
//
// }


