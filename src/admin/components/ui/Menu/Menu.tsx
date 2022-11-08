import React, {Ref} from 'react';
import classNames from "classnames";
import {MenuContextProvider} from "./context/menuContext";
import {useConfig} from "../ConfigProvider";





const Menu = React.forwardRef( (props: any, ref: any ) => {

    const {
        children,
        className,
        defaultActiveKeys,
        defaultExpandedKeys,
        menuItemHeight,
        onSelect,
        sideCollapsed,
        variant,
        ...rest
    } = props;

    const menuDefaultClass = 'menu';

    const { themeColor, primaryColorLevel } = useConfig();

    const menuColor = () => {
        if(variant === 'themed') {
            return `bg-${themeColor}-${primaryColorLevel} ${menuDefaultClass}-${variant}`
        }
        return `${menuDefaultClass}-${variant}`
    };

    const menuClass = classNames(
        menuDefaultClass,
        menuColor(),
        className
    );

    return (
        <nav ref={ref} className={menuClass} {...rest}>
            <MenuContextProvider value={{
                onSelect,
                menuItemHeight,
                variant,
                sideCollapsed,
                defaultExpandedKeys,
                defaultActiveKeys
            }}>
                {children}
            </MenuContextProvider>
        </nav>
    );
});

export default Menu;
