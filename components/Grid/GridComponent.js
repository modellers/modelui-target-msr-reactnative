// https://material-ui.com/components/autocomplete/
import React from 'react';
// react native components
import { View } from 'react-native';
// styles
// state
import { layout } from 'modelui-core-runtime';

export const events = layout.LayoutBase.events;
export const triggers = layout.LayoutBase.triggers;

export const options = {
  "id": "grid-columns",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "Grid",
  "x-layout": "component",
  "type": "object",
  "version": 0.1,
  "properties": {
    "spacing": {
      "title": "spacing",
      "description": "Space between the grid items",
      "type": "number",
      "default": 1
    },
    "direction": {
      "description": "Grid item direction",
      "type": "string",
      "enum": ["row", "column"],
      "default": "row"
    },
    "alignItems": {
      "description": "Align content",
      "type": "string",
      "enum": ["stretch"],
      "default": "stretch"
    },
    "justifyContent": {
      "description": "Justify content",
      "type": "string",
      "enum": ["center", "left", "right"],
      "default": "center"
    },
    "gridXS": {
      "title": "gridXS",
      "description": "gridXS",
      "type": "number",
      "default": 2
    },
    "gridSM": {
      "title": "gridSM",
      "description": "gridSM",
      "type": "number",
      "default": 2
    }
  },
  "required": ["spacing", "direction", "alignItems", "justifyContent"]
}

export const config = {
  name: "Grid columns",
  type: "grid-columns",
  author: "Kjartan Jónsson",
  description: "Grid component",
  version: 0.1,
  relation: {
    contains: ["grid-column"],
    within: "component" // parent
  },
  options: options,
  state: layout.LayoutBase.StateLayout
  // styles
}

const style = (theme) => ({
});

export const StateGrid = layout.LayoutBase.StateLayout;

export class GridComponent extends layout.LayoutBase.LayoutBase {
  /**
   * Used to manage internal state of avatars
   */

  constructor(props) {
    props.config.options = props.config.options || {};
    props.config.options = { ...{ spacing: 1, direction: 'row', justifyContent: 'center', alignItems: 'stretch', gridXS: 12, gridSM: 12 }, ...props.config.options }
    super(props);
  }

  renderGrid = (itm, idx, classes) => {
    if (!itm.hidden) {
      const style = {
      }
      //  item key={itm.id} xs={itm.gridXS || this.props.config.options.gridXS || 12} sm={itm.gridSM || this.props.config.options.gridSM || 12} style={{ textAlign: itm.justifyContent || 'inherit' }}
      return (
        <View key={itm.id} style={style}>
          {this.renderContent(classes, itm)}
        </View >
      )
    }
  }

  render() {
    const { classes } = this.props;

    // https://reactnative.dev/docs/flexbox
    const justifyContentMap = {
      'left': 'flex-start',
      'right': 'flex-end',
      'center': 'center',
      'between': 'space-between',
      'around': 'space-around',
      'evenly': 'space-evenly',
    }
    const alignContentMap = {
      'stretch': 'stretch',
      'left': 'flex-start',
      'right': 'flex-end',
      'center': 'center',
      'bottom': 'baseline'
    }
    const style = {
      flexDirection: this.props.config.options.direction,
      justifyContent: justifyContentMap[this.props.config.options.justifyContent],
      alignContent: alignContentMap[this.props.config.options.alignItems],
      padding: this.props.config.options.spacing,
    }
    return (
      <View style={style}>
        {
          this.state.data.map((itm, idx) => { return this.renderGrid(itm, idx, classes); })
        }
      </View>
    )
  }
}

export default GridComponent;
