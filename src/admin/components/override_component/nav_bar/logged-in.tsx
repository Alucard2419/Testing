import {CurrentAdmin} from "adminjs";
import React from "react";
import {useTranslation} from "adminjs";
import {Box, CurrentUserNav, CurrentUserNavProps} from "@adminjs/design-system";

export type LoggedInProps = {
    session: CurrentAdmin;
    paths: {
        logoutPath: string;
    };
}

const LoggedIn: React.FC<LoggedInProps> = (props) => {
    const { session, paths } = props
    const { translateButton } = useTranslation()

    const dropActions: CurrentUserNavProps['dropActions'] = [{
        label: translateButton('logout'),
        onClick: (event: Event): void => {
            event.preventDefault()
            window.location.href = paths.logoutPath
        },
        icon: 'Logout',
    }]
    return (
        <Box flexShrink={0} data-css="logged-in">
            <CurrentUserNav
                name={session.email}
                title={session.title}
                avatarUrl={session.avatarUrl}
                dropActions={dropActions}
            />
        </Box>
    )
}
