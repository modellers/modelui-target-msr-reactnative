import React from 'react';
// material ui components

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Layout, Text } from '@ui-kitten/components'; // testing
//import { Layouter as LayoutRender } from '../Layout/LayoutComponent';
import { layout } from 'modelui-core-runtime';
const Layouter = layout.Layout.Layouter;
// components
// import { AvatarRender } from '../Avatar/AvatarComponent'

import { structs } from 'modelui-core-runtime';
import { util } from 'modelui-core-runtime';

export const events = structs.ListBase.events;
export const triggers = structs.ListBase.triggers;

export const options = {
  "id": "menu-tab",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "Menu Tab options",
  "x-layout": "component",
  "type": "object",
  "version": 0.1,
  "properties": {
    "select": {
      "title": "Select",
      "description": "Shows selected rows highlighted",
      "type": "boolean",
      "default": false
    },
  },
  "required": []
}

export const item = {
  "id": "menu-tab-item",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Menu Tab item",
  "description": "Placed in list",
  "x-layout": "component-item",
  "type": "object",
  "version": 0.1,
  "properties": {
    "id": {
      "description": "identifier",
      "type": "string",
      "readOnly": false,
      "writeOnly": false
    },
    "title": {
      "description": "Title",
      "type": "string",
      "default": "Option"
    },
    "subtitle": {
      "description": "Sub title",
      "type": "string",
      "default": ""
    }
  },
  "required": ["title"]
}

export const config = {
  name: "TabMenu",
  type: "menu-tabs",
  author: "Kjartan Jónsson",
  description: "Tab Menu component",
  version: 0.1,
  relation: {
    contains: ["menu-tab-item"],
    within: "component" // parent
  },
  contains: {
    "menu-tab-item": item
  },
  options: options,
  state: structs.ListBase.StateList
}
/*
const style = (theme) => ({
  root: {
    width: '100%'
  },
});

function ListAvatar(props) {
  if (!props.avatar) return null;
  return (  // render array of avatars
    <ListItemAvatar>
      <AvatarRender config={props.avatar.config} data={props.avatar.data} />
    </ListItemAvatar>
  )

}
*/

const RenderScreen = ({ item, manager }) => {
  /*
      <LayoutRender
        id={item.id}
        schema={{}}
        config={{}}
        data={item.data}
        manager={manager}
      />  

      <Text key={key}>{item.title}</Text>
  */

  const params = { id: item.id, key: item.id, classes: {}, data: item.data, config: item.config, manager: manager };
  const component = manager.getComponentInstance(item.type, params);

  return (
    <Layout key={'layout-' + item.id} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {component}
    </Layout>
  )
};

class TabMenuComponent extends structs.ListBase.ListBase {

  constructor(props) {
    super(props);
    if (props.config.options.position === 'top') {
      this.Tab = createMaterialTopTabNavigator();
    } else {
      this.Tab = createBottomTabNavigator();
    }
  }

  render() {
    const manager = this.props.manager;
    const Tab = this.Tab;

    return (
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
        }}
      >
        {
          this.state.data.map((itm, idx) => {
            return (<Tab.Screen
              key={item.idr}
              name={itm.title}
              children={() => <RenderScreen key={itm.id} item={itm.content} manager={manager} />}
              title={itm.title}
              options={{
                tabBarIcon: ({ size, focused, color }) => { },
                tabBarLabel: itm.title
              }}
            />)
          }
          )
        }
      </Tab.Navigator>
    )
  }

}

export default TabMenuComponent;
