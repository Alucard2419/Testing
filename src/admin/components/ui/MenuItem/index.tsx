import React from 'react'
import classNames from 'classnames'


const MenuItem = React.forwardRef((props:any, ref) => {

    const {
        asElement: Component,
        children,
        className,
        disabled,
        eventKey,
        isActive,
        menuItemHeight,
        onSelect,
        style,
        variant,
        ...rest
    } = props

    const menuItemActiveClass = `menu-item-active`
    const menuItemHoverClass = `menu-item-hoverable`
    const disabledClass = 'menu-item-disabled'
    const menuItemClass = classNames(
        'menu-item',
        `menu-item-${variant}`,
        isActive && menuItemActiveClass,
        disabled && disabledClass,
        (!disabled) && menuItemHoverClass,
        className
    )

    const hanldeOnClick = e => {
        if(onSelect) {
            onSelect(eventKey, e)
        }
    }

    return (
        <Component
            ref={ref}
            className={menuItemClass}
            style={{height: `${menuItemHeight}px`, ...style}}
            onClick={hanldeOnClick}
            {...rest}
        >
            {children}
        </Component>
    )
})



export default MenuItem
