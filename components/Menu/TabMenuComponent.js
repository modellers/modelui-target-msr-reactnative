import React from 'react';
// material ui components

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { SafeAreaView } from 'react-native';
import { Text } from '@ui-kitten/components'; // testing
import { structs } from 'modelui-core-runtime';

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
  "id": "menu-item",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Menu item",
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
    contains: ["menu-item"],
    within: "component" // parent
  },
  contains: {
    "menu-item": item
  },
  options: options,
  state: structs.ListBase.StateList
}

const RenderHeader = ({ key, item }) => {
  // https://reactnavigation.org/docs/bottom-tab-navigator/#header-related-options
  return undefined; // displays nothing
  return <Text>{item.title}</Text>;
};

const RenderScreen = ({ item, manager, navigation }) => {
  if (typeof (item) === 'string') {
    return <Text>{item}</Text>
  } else {
    const params = { id: item.id, key: item.id, classes: {}, data: item.data, config: item.config, manager: manager, navigation: navigation };
    const component = manager.getComponentInstance(item.type, params);
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {component}
      </SafeAreaView>
    )
  }
};

class TabMenuComponent extends structs.ListBase.ListBase {

  constructor(props) {
    if (!props.navigation) {  // https://reactnavigation.org/docs/navigation-prop
      console.error('MenuComponent: navigation was not receaved through props for ' + props.id)
    }
    super(props);
    if (props.config.options.position === 'top') {
      this.Tab = createMaterialTopTabNavigator();
    } else if (props.config.options.position === 'bottom') {
      this.Tab = createBottomTabNavigator();
    } else {
      this.Tab = createStackNavigator();
    }
    this.navigation = props.navigation;

  }

  updateView = function (action, arr, updated, data) {
    // extend by parent
    if (action === 'select') {
      // this.setState(data);
      this.navigation.navigate(arr[0].id); //('page_id3')
    }
    return true;
  };

  render() {
    const manager = this.props.manager;
    const Tab = this.Tab;

    return (
      <Tab.Navigator
        initialRouteName={this.props.config.options.initial}
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
        }}
      >
        {
          this.state.data.map((itm, idx) => {
            return (<Tab.Screen
              key={item.id}
              name={itm.id}
              children={() => <RenderScreen key={itm.id} item={itm.content} manager={manager} navigation={this.navigation} />}
              title={itm.title}
              options={{
                title: itm.title,
                tabBarShowLabel: true, // for more https://reactnavigation.org/docs/bottom-tab-navigator/
                // Formats header --- header: () => <RenderHeader key={itm.id} item={itm} />,
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
