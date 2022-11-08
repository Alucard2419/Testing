import React from "react";
import styled from 'styled-components';
import {BrandingOptions, ViewHelpers} from "adminjs";
import {Link} from "react-router-dom";
import {themeGet, cssClass} from "@adminjs/design-system";



type Props = {
    branding: BrandingOptions;
}

export const StyledLogo = styled(Link)`
  text-align: center;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-shrink: 0;
  padding: ${themeGet('space', 'lg')} ${themeGet('space', 'lg')} ${themeGet('space', 'lg')};
  text-decoration: none;

  & > h1 {
    text-decoration: none;
    font-weight: ${themeGet('fontWeights', 'bolder')};
    font-size: ${themeGet('fontWeights', 'bolder')};
    color: ${themeGet('colors', 'grey80')};
    font-size: ${themeGet('fontSizes', 'xl')};
    line-height: ${themeGet('lineHeights', 'xl')};
  }

  & > img {
    max-width: 170px;
  }

  &:hover h1 {
    color: ${themeGet('colors', 'primary100')};
  }
`

const h = new ViewHelpers()

const SidebarBranding: React.FC<Props> = (props) => {
    const {branding} = props;
    const {logo, companyName } = branding;

    return(
        <StyledLogo to={h.dashboardUrl()} >
            {logo ? (
                <div className='logo px-6 justify-center' style={{
                    height: '64px',
                    width: 'auto',
                    textAlign: 'center',
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'center',
                    flexShrink: '0'}}>
                    <img
                        src={logo}
                        alt={companyName}
                    />
                </div>
            ) : <h1>{companyName}</h1>}
        </StyledLogo>
    )
}

export default SidebarBranding;
