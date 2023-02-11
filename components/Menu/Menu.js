import React from 'react';

import MenuComponent, { events as eventsTabMenu, triggers as triggersTabMenu, config as configTabMenu } from './MenuComponent'

export function TabMenu(props) {
    // lets enumerate schema to extract uiSchema and validation
    return (<MenuComponent {...props} />);
}

export function registerMenu(component_manager) {
    // self register component to layout manager
    component_manager.registerComponent({
        component: TabMenu,
        type: configTabMenu.type,
        events: eventsTabMenu,
        triggers: triggersTabMenu,
        config: configTabMenu
    });
}
