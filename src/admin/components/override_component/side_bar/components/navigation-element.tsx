import React from "react";
import {Box, Icon, Title} from '@adminjs/design-system';
import {NavigationElementProps} from "../types";
import {StyledNavigationElement} from "./styledNavigationElement";


const PART_LENGTH_TO_ELLIPSIS = 15

const NavigationElement: React.FC<NavigationElementProps> = (props) => {
    const { isOpen, icon, onClick, label, isSelected, href } = props

    const expandable = typeof isOpen !== 'undefined'
    const chevron = isOpen ? 'ChevronUp' : 'ChevronDown'

    const hasLongName = label.split(' ').reduce((memo, part) => (memo.length > part.length ? memo : part), '').length
        > PART_LENGTH_TO_ELLIPSIS


    return (
        <StyledNavigationElement
            flex
            flexDirection="row"
            as="a"
            isSelected={isSelected}
            isOpen={isOpen}
            href={href}
            onClick={(event) => (onClick ? onClick(event, props) : undefined)}
        >
            {icon && (
                <Box className="icon-box" as="span">
                    <Icon icon={icon} />
                </Box>
            )}
            <Title style={{ whiteSpace: hasLongName ? 'nowrap' : 'normal' }}>{label}</Title>
            {expandable && (
                <Box className="arrow-box" as="span">
                    <Icon icon={chevron} />
                </Box>
            )}
        </StyledNavigationElement>
    )
}

export { NavigationElement, NavigationElement as default }
