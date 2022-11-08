import React, { useContext } from 'react'
import classNames from 'classnames'
import { GroupContextProvider } from './context/groupContext'
import MenuContext from './context/menuContext'


const MenuGroup = props => {

    const { label, children, className } = props

    const { variant, sideCollapsed } = useContext(MenuContext)

    const menuGroupDefaultClass = 'menu-group'
    const menuGroupClass = classNames(
        menuGroupDefaultClass,
        className
    )



    return (
        <div className={menuGroupClass}>
            {
                (label && !sideCollapsed) && (
                    <div
                        className={classNames('menu-title', `menu-title-${variant}`)}

                    >
                        {label}
                    </div>
                )
            }
            <GroupContextProvider  value="">
                <ul>
                    {children}
                </ul>
            </GroupContextProvider>
        </div>
    )
}


export default MenuGroup
