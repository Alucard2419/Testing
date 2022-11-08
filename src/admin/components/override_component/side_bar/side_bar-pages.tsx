import React from "react";
import {NavigationElementProps} from "./types";
import Navigation from "./components/navigation";
import {ReduxState} from "adminjs";
import {useNavigate, useLocation} from "react-router-dom";
import {ViewHelpers} from "adminjs";
import {useTranslation} from "adminjs";



type Props = {
    pages?: ReduxState['pages'];
}

const h = new ViewHelpers()

const SidebarPages: React.FC<Props> = (props) => {
    const { pages } = props

    const { translateLabel } = useTranslation()
    const location = useLocation()
    const navigate = useNavigate()

    if (!pages || !pages.length) {
        return null
    }

    const isActive = (page): boolean => (
        !!location.pathname.match(`/pages/${page.name}`)
    )

    const elements: Array<NavigationElementProps> = pages.map((page) => ({
        id: page.name,
        label: page.name,
        isSelected: isActive(page),
        icon: page.icon,
        href: h.pageUrl(page.name),
        onClick: (event, element): void => {
            event.preventDefault()
            if (element.href) {
                navigate(element.href)
            }
        },
    }))

    return (
        <>
            <Navigation
                label={translateLabel('Pages')}
                elements={elements}
            />
        </>


    )
}

export default SidebarPages
