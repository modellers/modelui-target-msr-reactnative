import React from 'react';
// material ui components
import { List } from '../../theme/components';
import { ListItem } from '../../theme/components';
// components
// import { AvatarRender } from '../Avatar/AvatarComponent'

import { structs } from 'modelui-core-runtime';
import { util } from 'modelui-core-runtime';

export const events = structs.ListBase.events;
export const triggers = structs.ListBase.triggers;

export const options = {
  "id": "list",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "List options",
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
  "id": "list-item",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "List item",
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
  name: "List",
  type: "list",
  author: "Kjartan Jónsson",
  description: "List component",
  version: 0.1,
  relation: {
    contains: ["list-item"],
    within: "component" // parent
  },
  contains: {
    "list-item": item
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
class ListComponent extends structs.ListBase.ListBase {
  // https://akveo.github.io/react-native-ui-kitten/docs/components/list/overview#list
  /*
    secondaryAction = (itm, classes) => {
      if (itm.secondary) {
        const action = renderContent(classes, { "content": itm.secondary });
        if (action) {
          return (<ListItemSecondaryAction>{action}</ListItemSecondaryAction>)
        }
      }
      return null;
    }

  const renderItemAccessory = (props) => (
    <Button size='tiny'>FOLLOW</Button>
  );

  const renderItemIcon = (props) => (
    <Icon {...props} name='person'/>
  );

  */
  renderItemIcon(item) {
    return (<View></View>)
  }

  renderItem({ item, index }) {

    return (<ListItem
      title={item.title}
      description={item.subtitle}
    // accessoryLeft={renderItemIcon}
    // accessoryRight={renderItemAccessory}
    // ? selected={this.showSelectedRow(itm)}
    // ? onClick={(event) => this.handleSelect(itm[idx], itm, idx)}
    />)
  }

  render() {
    const data = this.state.data;
    return (
      <List data={data} renderItem={this.renderItem} />
    )
  }
}

export default ListComponent;
