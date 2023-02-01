import React from 'react';
import { StyleSheet } from 'react-native';
// material ui components
import { Toggle } from '../../theme/components';
import { Checkbox } from '../../theme/components';
import { Layout } from '../../theme/components';
import { View } from 'react-native';

import getIcon from '../../util/IconUtil';

import { structs } from 'modelui-core-runtime';

export const events = structs.ListBase.events;
export const triggers = structs.ListBase.triggers;

export const options = {
  "id": "checkboxes",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Checkboxes",
  "description": "Checkbox options",
  "x-layout": "component",
  "type": "object",
  "version": 0.1,
  "properties": {
    "iconIsSelected": {
      "title": "iconIsSelected",
      "description": "iconIsSelected",
      "type": "string",
      "default": "material-ui:Star"
    },
    "iconUnSelected": {
      "title": "iconUnSelected",
      "description": "iconUnSelected",
      "type": "string",
      "default": "material-ui:StarOutline"
    },
    "labelPlacement": {
      "title": "labelPlacement",
      "description": "labelPlacement",
      "type": "string",
      "enum": ["bottom", "end", "start", "top"],
      "default": "bottom"
    },
    "size": {
      "title": "size",
      "description": "size",
      "type": "string",
      "enum": ['small', 'large', 'medium'],
      "default": "medium"
    },
    "color": {
      "title": "color",
      "description": "color",
      "type": "string",
      "enum": ['initial', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error'],
      "default": "primary"
    },
    "direction": {
      "title": "direction",
      "description": "direction",
      "type": "string",
      "enum": ['row', 'row-reverse', 'column', 'column-reverse'],
      "default": "row"
    }
  },
  "required": ["iconIsSelected", "iconUnSelected", "labelPlacement", "size", "color", "direction"]
}

export const item = {
  "id": "checkbox",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Checkbox",
  "description": "Checkbox item",
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
      "description": "title",
      "type": "string",
      "default": "Checkbox"
    },
    "selected": {
      "description": "Selected",
      "type": "boolean",
      "default": false
    }
  },
  "required": []
}

export const config = {

  name: "Checkboxes",
  type: "checkboxes",
  author: "Kjartan Jónsson",
  description: "Checkbox component",
  version: 0.1,
  relation: {
    contains: ["checkbox"],
    within: "component" // parent
  },
  options: options,
  contains: {
    "checkbox": item
  },
  state: structs.ListBase.StateList
}

const style = (theme) => ({
  root: {
    justifyContent: 'center'
  },
});

const styles_row = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  toggle: {
    margin: 2,
  },
});

const styles_column = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  toggle: {
    margin: 2,
  },
});

class CheckboxComponent extends structs.ListBase.ListBase {

  handleSelect = (item, idx, evt) => {
    this.setSelectedId(item.id, evt, !item.selected);
  };

  renderFormLabel = (legend_text) => {
    if (legend_text) {
      return (<Text>{legend_text}</Text>)
    }
  }

  renderFormHelperText = (helper_text) => {
    if (helper_text) {
      return (<Text>{helper_text}</Text>)
    }
  }

  updateView = function (action, arr, updated, data) {
    // extend by parent
    if (action === 'select') {
      this.setState(data);
    }
    return true;
  };

  render() {
    const { classes, config } = this.props;
    // defaults
    const options = { ...{ direction: 'column', size: undefined, labelPlacement: "start", iconIsSelected: undefined, iconUnSelected: undefined }, ...config.options }
    let legend_text = '';
    let helper_text = '';
    const level = 1; // options.direction.includes('row')

    /*
    // TODO: use other pallet instead of this hack
    if (options.color.includes("text")) { options.color = options.color.replace("text", "").toLowerCase(); }

    // If icons are use lets look them up
    if (options.iconIsSelected) { iconIsSelected = getIcon(options.iconIsSelected); }
    if (options.iconUnSelected) { iconUnSelected = getIcon(options.iconUnSelected); }

    // should we display error text
    if (error) { helper_text = error; }
    */

    /**
                return (
                  <Checkbox
                    key={itm.id}
                    checked={itm.selected}
                  
                  onChange={(event) => this.handleSelect(itm, idx, event)} name={itm.id}
                  color={options.color}
                  size={options.size}
                  disabled={itm.disabled || false}
                  icon={iconUnSelected}
                  checkedIcon={iconIsSelected}
                  
                  />
                  { itm.title }
                <Checkbox />
    
     */

    let styles = styles_column; // default
    if (options.direction === 'row') { styles = styles_row; }

    if (1) {
      return (
        <View style={style}>
          <Layout style={styles.container} level='1'>
            {this.renderFormLabel(legend_text)}
            {
              this.state.data.map((itm, idx) => {
                return (
                  <Toggle
                    style={styles.toggle}
                    key={itm.id}
                    checked={itm.selected}
                    disabled={itm.disabled || false}
                    onChange={(event) => this.handleSelect(itm, idx, event)} name={itm.id}
                  >
                    {itm.title}
                  </Toggle>
                )
              })
            }
            {this.renderFormHelperText(helper_text)}
          </Layout>
        </View>
      )
    } else {
      return (
        <View>
          {this.renderFormLabel(legend_text)}
          {
            this.state.data.map((itm, idx) => {
              return (
                <Checkbox
                  key={itm.id}
                  checked={itm.selected}
                  disabled={itm.disabled || false}
                  onChange={(event) => this.handleSelect(itm, idx, event)} name={itm.id}
                >
                  {itm.title}
                </Checkbox>
              )
            })
          }
          {this.renderFormHelperText(helper_text)}
        </View>
      )
    }
  }
}

export default CheckboxComponent;
