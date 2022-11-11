import React from 'react';
import {NavigationElementWithChildrenProps} from "@adminjs/design-system/src/organisms/navigation/navigation-props";
import NavigationElement from "./navigation-element";
import {element} from "prop-types";




const NavigationElementWrapper: React.FC<NavigationElementWithChildrenProps> = (props) => {

    const { elements, isOpen } = props;
    // if (elements?.length) {
    //     var selectables = elements.filter(element => element.label === 'Service'  'Blog' )
    // }

    return (
        <li>
            <NavigationElement {...props} />
             {elements?.length && isOpen ? (
                <ul>
                    {elements.map((element, id) => (
                        <NavigationElementWrapper
                            {...element}
                            key={[id, element.href].join('-')}
                        />
                    ))}
                </ul>
            ) : ''}
        </li>
    )
};

export {
    NavigationElementWrapper,
    NavigationElementWrapper as default,
}
