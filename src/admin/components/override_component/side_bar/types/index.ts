import {NavigationElementWithChildrenProps} from "@adminjs/design-system/src/organisms/navigation/navigation-props";
import {
    NavigationElementOnClickHandler
} from "@adminjs/design-system/src/molecules/navigation-element/navigation-element-props";

export type NavigationProps = {
    label: string;
    elements: Array<NavigationElementWithChildrenProps>;
}


export type NavigationElementProps = {
    /** Link href property */
    href?: string;
    /** Icon name */
    icon?: string;
    /**
     * Indicates if navigation element should be open(able). If set to undefined: element wont be
     * "openable". Tf set to either false or true - element will be open or close.
     */
    isOpen?: boolean;
    /** If element should be selected */
    isSelected?: boolean
    /** Label of the element */
    label: string,
    /** Element uniq ID  */
    id?: string,
    /** On Click handler */
    onClick?: NavigationElementOnClickHandler;
}
