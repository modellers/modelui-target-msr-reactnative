import React from 'react';

import TabMenuComponent, { events as eventsTabMenu, triggers as triggersTabMenu, config as configTabMenu } from './MenuComponent'

export function TabMenu(props) {
    // lets enumerate schema to extract uiSchema and validation
    return (<TabMenuComponent {...props} />);
}

export function registerTabMenu(component_manager) {
    // self register component to layout manager
    component_manager.registerComponent({
        component: TabMenu,
        type: configTabMenu.type,
        events: eventsTabMenu,
        triggers: triggersTabMenu,
        config: configTabMenu
    });
}
