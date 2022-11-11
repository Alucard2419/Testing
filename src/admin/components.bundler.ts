import AdminJS, {ComponentLoader, OverridableComponent} from 'adminjs';


const componentLoader = new ComponentLoader();



/**
 * Common components
 */



const Components = {
    MySideBar: componentLoader.override('Sidebar', './components/override_component/side_bar/sidebar'),
    MyNavBar: componentLoader.override('TopBar', './components/override_component/nav_bar/index'),
    Dashboard: componentLoader.add('Dashboard', './components/override_component/dashboard/index'),
    PageTest: componentLoader.add('PageTest','./views/pages/page.test'),
    ProductTest: componentLoader.add('ProductTest','./views/pages/product-test'),
    Selector: componentLoader.add('Selector','./components/multi_select'),
}

export {componentLoader, Components}
