// https://material-ui.com/components/tabs/
// https://www.digitalocean.com/community/tutorials/react-tabs-component
import React from 'react';
// material ui components
import { StyleSheet } from 'react-native';

import { Text } from '../../theme/components';
import { Tab } from '../../theme/components';
import { TabView } from '../../theme/components';
import { Layout } from '../../theme/components';
import getIcon from '../../util/IconUtil';
// state
import { layout } from 'modelui-core-runtime';

export const events = layout.LayoutBase.events;
export const triggers = layout.LayoutBase.triggers;


export const options = {
  "id": "tabs",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Tabs",
  "description": "Tabs options",
  "x-layout": "component",
  "type": "object",
  "version": 0.1,
  "properties": {
    "textColor": {
      "title": "textColor",
      "description": "textColor",
      "type": "string",
      "enum": ["inherit", "primary", "secondary"],
      "default": "inherit"
    },
    "indicatorColor": {
      "title": "indicatorColor",
      "description": "indicatorColor",
      "type": "string",
      "enum": ['initial', 'inherit', 'primary', 'secondary'],
      "default": "secondary"
    },
    "tabVariant": {
      "title": "tabVariant",
      "description": "tabVariant",
      "type": "string",
      "enum": ["fullWidth", "scrollable", "standard"],
      "default": "standard"
    },
    "contentMargin": {
      "title": "contentMargin",
      "description": "contentMargin",
      "type": "number",
      "default": 1
    },
  },
  "required": ["textColor", "indicatorColor", "tabVariant", "contentMargin"]
}

export const item = {
  "id": "tab",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Tab",
  "description": "Tab",
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
      "default": "Tab"
    },
    "icon": {
      "description": "Icon",
      "type": "string",
      "default": ""
    },
    "disabled": {
      "description": "Disabled",
      "type": "boolean",
      "default": false
    },
    "content": {
      "title": "content",
      "description": "TBD",
      "readOnly": false,
      "writeOnly": false,
      "type": "object",
      "default": {}
    }
  },
  "required": ["title", "disabled"]
}

export const config = {
  name: "Tabs",
  type: "tabs",
  author: "Kjartan Jónsson",
  description: "Tabs component",
  version: 0.1,
  relation: {
    contains: ["tab"],
    within: "component" // parent
  },
  options: options,
  contains: {
    'tab': item
  },
  state: layout.LayoutBase.StateLayout
}

class TabsComponent extends layout.LayoutBase.LayoutBase {
  /**
   * Used to manage internal state of avatars
   */

  static propTypes = {
    //data: PropTypes.instanceOf(Array).isRequired,
  }

  styles = StyleSheet.create({
    tabContainer: {
      height: 64,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  constructor(props) {
    super(props);
    // props.config = props.config || {};
    props.config.options = { ...{}, ...props.config.options }
    props.config.options.contentMargin = props.config.options.contentMargin || 3;
  }

  handleChange(idx) {
    if (idx < this.state.data.length) {
      this.setSelectedId(this.state.data[idx].id);
    }
  }

  render() {

    const {
      state
    } = this;

    const { classes, config } = this.props;

    const shouldLoadComponent = (index) => index === state.selectedIndex;

    return (
      <TabView
        selectedIndex={state.selectedIndex}
        shouldLoadComponent={shouldLoadComponent}
        onSelect={index => this.handleChange(index)}
      >
        {state.data.map((itm, idx) => {
          let renderedContent = this.renderContent(classes, itm);
          if (typeof (renderedContent) == 'string') {
            renderedContent = <Text>{renderedContent}</Text>
          }
          let tabIcon = null;
          /* // FIXME: look up icon
          if (itm.icon) {
            tabIcon = getIcon(itm.icon); 
          }
          */
          return (
            <Tab title={itm.title} icon={tabIcon} key={`${this.props.id}-tabpanel-${idx}`}  >
              <Layout style={this.styles.tabContainer}>
                {renderedContent}
              </Layout>
            </Tab>
          )
        }
        )}
      </TabView>
    )
  }
}

export default TabsComponent;

export const schema = {
  "$id": "",
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  description: "",
  type: "object",
  properties: {
    disabled: {
      type: "boolean"
    },
    title: {
      type: "string"
    },
    description: {
      type: "string"
    }
  }
}