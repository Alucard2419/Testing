import React from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components'
import {BrandingOptions, PageJSON, ReduxState, ResourceJSON} from "adminjs";
import {Box, cssClass, themeGet} from "@adminjs/design-system";
import SidebarBranding from "./sidebar-branding";
import SidebarResourceSection from "./sidebar-resource-section";
import SidebarPages from "./side_bar-pages";


type Props = {
    isVisible: boolean;
};

const StyledSidebar = styled(Box)`
  --tw-bg-opacity: 1;
  --tw-text-opacity: 1;
  color: rgb(107 114 128/var(--tw-text-opacity));
  font-size: .875rem;
  line-height: 1.5;
  transition: left 0.3s;
  top: 0;
  bottom: 0;
  flex-shrink: 0;
  overflow-y: auto;
  &.hidden {
    left: -${themeGet('sizes', 'sidebarWidth')};
  }
  &.visible {
    left: 0;
  }
`
StyledSidebar.defaultProps = {
    position: ['absolute', 'absolute', 'absolute', 'absolute', 'inherit'],
    width: 'sidebarWidth',
    borderRight: 'default',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 50,
    bg: 'side-nav-transparent'
}



const SideBar: React.FC<Props> = (props)=> {
    const { isVisible } = props;
    const [branding, resources, pages]: [
        BrandingOptions,
        ResourceJSON[],
        PageJSON[]
    ] = useSelector((state: ReduxState) => [
        state.branding,
        state.resources,
        state.pages,
    ])

    return(
        <>
           <StyledSidebar className={isVisible ? 'visible' : 'hidden'} data-css="sidebar">
                <SidebarBranding branding={branding}/>
               <Box flexGrow={1} className={cssClass('Resources')}>

                   <SidebarResourceSection resources={resources}/>

               </Box>
              <SidebarPages pages={pages}/>
           </StyledSidebar>
        </>
    )

}


export default SideBar;
