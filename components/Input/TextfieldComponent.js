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
    this.input_ref = null;
  }

  getActionState(action, callback) {
    if (this.input_ref) {
      if (action === 'submit') {
        callback({ data: { value: this.input_ref.value } });
      } else { callback(); }
    } else { callback(); }
  }


  updateView = function (action, val, updated, data) {
    // extend by parent
    debugger;
    if (this.input_ref) {
      if (action === 'enable') {
        this.input_ref.disabled = false;
      }
      if (action === 'disable') {
        this.input_ref.disabled = true;
      }
      if (action === 'populate') {
        this.input_ref.value = val.value;
      }
      if (action === 'clear') {
        this.input_ref.value = "";
      }
    }
    return true;
  };

  onKeyUp = (evt) => {
    if (evt.key === "Enter") {
      this.triggerEvent("submitted", { value: evt.target.value }, evt);
    }
  }

  _onChanged = (value) => {
    // schema: formatData (only if valid)
    this.triggerAction("change", { value: value }, null);
    this.setState({ value: value })
  }
  onChanged = (value) => {
    // schema: formatData (only if valid)
    this.triggerEvent("changed", { value: value }, null);
  }

  render() {

    const value = this.state.data.value
    console.info(value)
    return (
      <TextField
        placeholder={this.props.config.options.placeholder}
        value={value}
        inputRef={instance => { this.input_ref = instance; }}
        onChangeText={nextValue => this.onChanged(nextValue)}
      />)
  }

}

export default TextfieldComponent;