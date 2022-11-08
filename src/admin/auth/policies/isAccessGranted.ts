import {is_granted} from './isGranted';




export function is_access_granted
({
     parent,
     resourceName,
     actionRequested
})
{
    return ({ currentAdmin }) => {
        if (!currentAdmin) {
            // Logger.error("not currentAdmin",);
            return false;
        }
        return is_granted(parent, resourceName, actionRequested, currentAdmin.role);
    };
}
