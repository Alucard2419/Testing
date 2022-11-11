import React from 'react'
import { MenuContextConsumer } from './context/menuContext'
import { GroupContextConsumer } from './context/groupContext'
import { CollapseContextConsumer } from './context/collapseContext'
import Item from '../MenuItem'


const MenuItem = props => {


    const { eventKey, ...rest } = props

    return(
        <MenuContextConsumer>
            {
                context => (
                    <GroupContextConsumer>
                        {() => (
                            <CollapseContextConsumer>
                                {() =>  (
                                    <Item
                                        onSelect={context.onSelect}
                                        menuItemHeight={context.menuItemHeight}
                                        variant={context.variant}
                                        isActive={context.defaultActiveKeys.includes(eventKey)}
                                        eventKey={eventKey}
                                        {...rest}
                                    />
                                )}
                            </CollapseContextConsumer>
                        )}
                    </GroupContextConsumer>
                )
            }
        </MenuContextConsumer>
    )
}



export default MenuItem
