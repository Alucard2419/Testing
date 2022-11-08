import Labels from '../../utils/labels';

export function is_granted(
    parent,
    resource_name,
    action_request,
    role
)
{
 if (role.super_admin) return true;
 resource_name = Labels.parse_field(resource_name);
 return  role.grants.some( (grant) => {
     if(grant.parent !== parent && grant,parent !== '*') return false;

     if (grant.resource !== resource_name && grant.resource !== "*") return false;
     return is_action_granted(grant.actions, action_request);
 })
}

function is_action_granted(actions, action_request) {
    return actions.some( (action) => {
        if (action.action === "*") return true;
        if (action.action === action_request) return true;
        return false;
    })
}

