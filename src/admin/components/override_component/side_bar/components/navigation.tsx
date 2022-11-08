import React from 'react';
import styled from 'styled-components';
import {themeGet} from "@adminjs/design-system";
import {Box, Label} from "@adminjs/design-system";
import {NavigationProps} from "../types";
import NavigationElementWrapper from "./navigation-element-wrapper";





export const StyledNavigation = styled(Box)`
  ul ul > li {
    padding-left: ${themeGet('space', 'xxl')};
    &:last-child {
      margin-bottom: ${themeGet('space', 'lg')};
    }
  }
`

const Navigation: React.FC<NavigationProps> = (props) => {
    const { label, elements } = props
    return (
        <StyledNavigation px="xl" py="lg">
            <div>
                <div className="menu-title menu-title-transparent">{label}</div>
                <ul>
                    {elements.map((element, id) => (
                        <NavigationElementWrapper key={[id, element.href].join('-')} {...element} />
                    ))}
                </ul>
            </div>
        </StyledNavigation>
    )
}

export {
    Navigation,
    Navigation as default,
}
