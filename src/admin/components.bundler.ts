import AdminJS, { OverridableComponent } from 'adminjs';
import * as path from "path";


export const bundle = (url: string, componentName?: OverridableComponent): string =>
  AdminJS.bundle(path.join(__dirname, url), componentName);

/**
 * Common components
 */

export const SIDEBAR = bundle('./components/override_component/side_bar/sidebar', 'Sidebar')
export const NAVBAR = bundle('./components/override_component/nav_bar/index', 'TopBar');
export const DASHBOARD = bundle('./components/override_component/dashboard/index', 'DashboardRoute')
export const SELECTOR = bundle('./components/multi_select')
export const PageTest = bundle('./views/pages/page.test');
