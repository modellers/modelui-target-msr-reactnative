// https://material-ui.com/components/autocomplete/
import React from 'react';

// Styled components
import { Autocomplete } from '../../theme/components';
import { AutocompleteItem } from '../../theme/components';

import { structs } from 'modelui-core-runtime';

export const events = structs.ListBase.events;
export const triggers = structs.ListBase.triggers;

export const options = {
  "id": "dropdown",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Dropdown",
  "description": "Dropdown",
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
      "default": "contained"
    },
  },
  "required": ["buttonVariant", "color", "label"]
}

export const item = {
  "id": "dropdown-item",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Dropdown item",
  "description": "Placed in dropdown",
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
    }
  },
  "required": ["title", "disabled"]
}

export const config = {
  name: "Dropdown",
  type: "dropdown",
  author: "Kjartan Jónsson",
  description: "Dropdown component",
  version: 0.1,
  relation: {
    contains: ["dropdown-item"],
    within: "component" // parent
  },
  contains: {
    "dropdown-item": item
  },
  options: options,
  state: structs.ListBase.StateList
}

// Auto complete -- const filterTitle = (item, query) => item.title.toLowerCase().includes(query.toLowerCase());


class DropdownComponent extends structs.ListBase.ListBase {
  /**
   * Used to manage internal state
   */

  constructor(props) {
    if (!props.config.options) { props.config.options = { label: 'Dropdown', variant: 'outlined' } }
    super(props);
    this.user_typing = false;
  }

  handleEventOnChange = (evt, newValue, oldValue) => {
    if (newValue) {
      this.handleSelect(newValue, { id: newValue.id }, -1);
    }
  }

  updateView = function (action, arr, updated, data) {
    // extend by parent
    if (action === 'select') {
      this.setState(data);
    }
    return true;
  };

  getDefaultOption = () => {
    if (this.state.selectedId !== -1) {
      return this.state.data[this.state.selectedIndex];
    }
  }

  getOptionSelected = () => {
    // FIXME: key to select
    if (this.state.selectedIndex === undefined) return null;
    if (this.state.selectedIndex === null) return null;
    if (this.state.data.length < this.state.selectedIndex) { this.state.selectedIndex = this.state.data.length - 1; }
    if (this.state.data.length === 0) { return ""; }
    if (this.state.data) {
      // TODO: check bounds
      return this.state.data[this.state.selectedIndex].title;
    }
    return null;
  }

  renderOption = (item, index) => {
    return <AutocompleteItem
      key={item.id}
      title={item.title}
    />
  }

  onSelect = (selectedIndex) => {
    // TODO: lookup the id and trigger select
    if (selectedIndex < this.state.data.length) {
      this.setSelectedId(this.state.data[selectedIndex].id);
    }
  }
  /* Auto complete -- 
  onChangeText = (query) => {
    setValue(query);
    setData(this.state.data.filter(item => filterTitle(item, query)));
  };
  */
  render() {

    const data = this.state.data
    const value = this.getOptionSelected();
    return (
      <Autocomplete
        id={this.props.id}
        placeholder={this.props.config.options.label}
        value={value}
        onSelect={this.onSelect}
      // Auto complete -- onChangeText={this.onChangeText}
      /*
      options={this.state.data || []}
      getOptionLabel={(option) => option.title}
      defaultValue={this.getDefaultOption}
      getOptionSelected={this.getOptionSelected} // FIXME: key to select
      onChange={this.handleEventOnChange}
      onFocus={(evt) => { this.user_typing = true; }}
      onBlur={(evt) => { this.user_typing = false; }}
      renderInput={(params) => {
        if (this.user_typing === false) {
          const selected_item = this.getDefaultOption();
          if (selected_item) {
            params.inputProps.value = selected_item.title; // FIXME: trying to select dynamically. This is what I came up with
          } else {
            params.inputProps.value = "";
          }
        }
        return (<TextField fullWidth {...params} label={this.props.config.options.label} variant={this.props.config.options.variant} />)
      }
      }
      */
      >
        {data.map(this.renderOption)}
      </Autocomplete>
    )
  }
}

export default DropdownComponent;

