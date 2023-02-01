import React from 'react';
// material-ui
import { TextField } from '../../theme/components';
// state
import { structs } from 'modelui-core-runtime';

export const events = structs.InputBase.events;
export const triggers = structs.InputBase.triggers;

export const options = {
  "id": "textfield",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Textfield",
  "description": "Textfield options",
  "x-layout": "component",
  "type": "object",
  "version": 0.1,
  "properties": {
    "variant": {
      "title": "variant",
      "description": "variant",
      "type": "string",
      "enum": ['standard', 'outlined', 'filled'],
      "default": "standard"
    },
    "color": {
      "title": "color",
      "description": "color",
      "type": "string",
      "enum": ['initial', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error'],
      "default": "primary"
    },
    "label": {
      "title": "label",
      "description": "label",
      "type": "string",
      "default": "Label text"
    },
    "placeholder": {
      "title": "Placeholder",
      "description": "placeholder",
      "type": "string",
      "default": ""
    }
  },
  "required": ["buttonVariant", "color"]
}


export const config = {
  name: "Textfield",
  type: "textfield",
  author: "Kjartan Jónsson",
  description: "Text input component",
  version: 0.1,
  relation: {
    contains: [],
    within: "component" // parent
  },
  options: options,
  state: structs.InputBase.StateInput
}

class TextfieldComponent extends structs.InputBase.InputBase {
  /**
   * Used to manage internal state of avatars
   */
  constructor(props) {
    super(props);
  }

  updateView = function (action, val, updated, data) {
    // extend by parent
    if (action === 'enable') {
      this.setStateDisabled(false);
    }
    if (action === 'disable') {
      this.setStateDisabled(true);
    }
    if (action === 'populate') {
      this.updateStateValue(val.value);
    }
    if (action === 'replace') {
      this.updateStateValue(val.value);
    }
    if (action === 'clear') {
      this.updateStateValue("");
    }
    return true;
  };

  updateStateValue = (value) => {
    const state = { ...this.state, data: { ...this.state.data, ...{ value: value } } }
    this.setInstanceState(state);
  }

  setStateDisabled = (disabled) => {
    const state = { ...this.state, data: { ...this.state.data, ...{ disabled: disabled } } }
    this.setInstanceState(state);
  }

  onChanged = (value) => {
    // schema: formatData (only if valid)
    this.triggerEvent("changed", { value: value }, null);
    this.updateStateValue(value);
  }

  render() {

    return (
      <TextField
        placeholder={this.props.config.options.placeholder}
        value={this.state.data.value}
        disabled={this.state.data.disabled}
        onChangeText={nextValue => this.onChanged(nextValue)}
      />)
  }

}

export default TextfieldComponent;