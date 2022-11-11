import React, {createRef, forwardRef} from 'react';
import classNames from "classnames";
import {MenuContextProvider} from "./context/menuContext";
import {useConfig} from "../ConfigProvider";

type WithStatics<
    C extends React.ComponentType<any>,
    StaticCmps extends {
        [attachedComponents: string]: React.ComponentType<any>;
    } = {}
    > = C & StaticCmps;

type GridProps = {};
type CellProps = {};

const Cell: React.FunctionComponent<CellProps> = props => <div {...props}/>;

const Grid: WithStatics<
    React.FunctionComponent<GridProps>,
    { Cell: typeof Cell }
    > = props => <div {...props} />;

Grid.defaultProps = { color: "red" };
Grid.Cell = Cell;

const Menu = React.forwardRef<React.ReactElement<any>>( (props:any , ref) => {

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
        <nav ref={ref}  className={menuClass} {...rest}>
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


