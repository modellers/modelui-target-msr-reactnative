// https://material-ui.com/components/tabs/
// https://www.digitalocean.com/community/tutorials/react-tabs-component
import React from 'react';
// react native components
import { View } from 'react-native';
// state
import { layout } from 'modelui-core-runtime';

export const events = layout.LayoutBase.events;
export const triggers = layout.LayoutBase.triggers;

export const options = {
  "id": "container",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "Container options",
  "x-layout": "component",
  "type": "object",
  "version": 0.1,
  "properties": {},
  "required": []
}

export const config = {
  name: "Containers",
  type: "container",
  author: "Kjartan Jónsson",
  description: "Container component",
  version: 0.1,
  relation: {
    contains: [],
    within: "component" // parent
  },
  contains: {},
  options: options,
  state: layout.LayoutBase.StateLayout
}


const style = (theme) => ({
});

class ContainerComponent extends layout.LayoutBase.LayoutBase {
  /**
   * Displays one rendered content at a time.
   */

  constructor(props) {
    props.config.options = { ...{}, ...props.config.options }
    super(props);
  }

  render() {

    const style = { overflow: 'scroll', whiteSpace: 'nowrap' }

    // FIXME: render all views (do we need this)?
    this.state.data.forEach((itm, idx, arr) => {
      arr[idx].__render = this.renderContent({}, itm);
      arr[idx].__visible = false;
    });

    if ((0 <= this.state.selectedIndex) && (this.state.selectedIndex < this.state.data.length)) {
      this.state.data[this.state.selectedIndex].__visible = true;
    } else {
      // TODO: notify index out of bounds
    }

    return (
      <View style={style}>
        {this.state.data.map((itm, idx) =>
        (
          <View key={itm.id} style={{ display: (itm.__visible ? 'block' : 'none') }}>{itm.__render}</View>
        )
        )}
      </View>
    )
    /*
    return (
      <div className={classes.root}>
        {itm.__render}
      </div>
    )
    */
  }
}

export default ContainerComponent;
