import React, { FC } from 'react';
import Navigation from "./components/navigation";
import {useTranslation} from "adminjs";
import {ResourceJSON} from "adminjs";
import {useNavigationResources} from "adminjs";



export type SidebarResourceSectionProps = {
    resources: Array<ResourceJSON>;
}





const SideBarResourceSection: FC<SidebarResourceSectionProps> = ({resources}) => {
    const elements = useNavigationResources(resources);


    const {translateLabel} = useTranslation();

    return(
        <>
            <Navigation
                label={translateLabel('Databases')}
                elements={elements}
            />

        </>

    )
};
export default SideBarResourceSection;


