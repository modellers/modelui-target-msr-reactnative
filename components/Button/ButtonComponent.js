import React from 'react';
import { Button } from '../../theme/components';
import { ButtonGroup } from '../../theme/components';
import { Icon } from '../../theme/components';
import getIcon from '../../util/IconUtil';

// state
import { structs } from 'modelui-core-runtime';

export const events = structs.ListBase.events;
export const triggers = structs.ListBase.triggers;


export const options = {
  "id": "buttons",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Buttons",
  "description": "Button options",
  "x-layout": "component",
  "type": "object",
  "version": 0.1,
  "properties": {
    "buttonVariant": {
      "title": "Variant",
      "description": "The button variants available",
      "type": "string",
      "enum": ['contained', 'outlined', 'text', 'fab'],
      "default": "contained"
    },
    "size": {
      "description": "Button size",
      "type": "string",
      "enum": ['small', 'large', 'medium'],
      "default": "medium"
    },
    "color": {
      "description": "Button color",
      "type": "string",
      "enum": ["primary", "secondary"],
      "default": "primary"
    },
  },
  "required": ["buttonVariant", "size", "color"]
}

export const item = {
  "id": "button",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Button",
  "description": "Button",
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
      "default": "Button"
    },
    "disabled": {
      "description": "Disabled",
      "type": "boolean",
      "default": false
    },
    "icon": {
      "description": "Button icon 'font-awesome:fa fa-heart-o' or 'material-ui:Star'",
      "type": "string",
      "default": "font-awesome:fa fa-heart-o"
    },
  },
  "required": ["title", "disabled", "icon"]
}

export const config = {
  name: "Buttons",
  type: "buttons",
  author: "Kjartan Jónsson",
  description: "Button component",
  version: 0.1,
  relation: {
    contains: ["button"],
    within: "component" // parent
  },
  contains: {
    "button": item
  },
  options: options,
  state: structs.ListBase.StateList
}

function ButtonRegular(props) {
  let data = props.data;
  const options = props.config.options;

  if (!data) { return; }

  function handleClick(e) { props.callback('click', data, e); }

  const link = data.link || {};

  if (data.title) {
    return (
      <Button
        key={data.id}
        variant={data.variant || options.buttonVariant}
        color={data.color || options.color}
        size={data.size || options.size}
        disabled={data.disabled || false}
        href={link.url}
        target={link.target}
        startIcon={getIcon(data.icon)}
        // button events 
        onClick={handleClick}
      >
        {data.title}
      </Button>
    )
  } else {
    /*
    return (
      <IconButton
        key={data.id}
        variant={data.variant || options.buttonVariant}
        color={data.color || options.color}
        disabled={data.disabled || false}
        href={link.url}
        target={link.target}
        alt={data.title}
        // button events 
        onClick={handleClick}
      >
        <Icon>{getIcon(data.icon)}</Icon>
      </IconButton>
    )
    */
  }
}
/*
function ButtonFab(props) {
  const options = props.config.options;
  let data = props.data;
  if (!data) { return; } // if no button exists we return nothing

  let size = data.size || options.size;
  let variant = data.variant || options.buttonVariant || 'circular';

  function handleClick(e) { props.callback('click', data, e); }

  if (data.title) { variant = "extended"; }
  if (size === 'large') { size = undefined; }
  return (
    <Fab
      key={data.id}
      variant={variant}
      color={data.color || options.color}
      disabled={data.disabled || false}
      size={size}
      // button events 
      onClick={handleClick}
    >
      {
        getIcon(data.icon, classes.extendedIcon)
      }
      {data.title}
    </Fab>
  )
}
*/
function ButtonSingle(props) {
  if ((props.data.variant || props.config.options.buttonVariant) === "fab") {
    // return ButtonFab(props)
  } else {
    return ButtonRegular(props)
  }
}


////////////////////////////////////////////////




////////////////////////////////////////////////

class ButtonComponent extends structs.ListBase.ListBase {

  setSelectedId = (id) => {
    this.triggerEvent('selected', { id: id }, null);
  }

  updateView = function (action, arr, updated, data) {
    // extend by parent
    return true;
  };

  render() {
    let content = [];

    const items = this.state.data;

    if (items.length === 1) {
      const itm = items[0];
      content.push(<ButtonSingle key={itm.id} data={itm} config={this.props.config} callback={(event, data, evt) => {
        this.triggerEvent('selected', data, evt)
      }} />)
    } else {
      if (this.props.config.options.variant === 'fab') { // special case if this is multiple fabs
        /*
        items.map(itm =>
          content.push(<ButtonFab key={itm.id} data={itm} config={this.props.config} callback={(event, data, evt) => {
            this.triggerEvent('selected', data, evt)
          }} />)
        );
        */
      } else { // return regular button group
        const options = this.props.config.options;
        content.push(
          <ButtonGroup key={this.props.id} variant={options.x} color={options.color} size={options.size}>
            {
              items.map((itm) => {
                const disabled = itm.disabled || false;
                const variant = itm.variant || options.buttonVariant;
                const link = itm.link || {};
                let size = itm.size || options.size;
                if (size === 'large') { size = undefined; }
                if (itm.icon && (!itm.title)) {
                  return (
                    <IconButton
                      key={itm.id}
                      variant={variant}
                      color={itm.color || options.color}
                      disabled={disabled}
                      size={size}
                      alt={itm.title}
                      href={link.url}
                      target={link.target}
                      // button events 
                      onClick={(evt) => {
                        this.triggerEvent('selected', itm, evt)
                      }}
                    >
                      <Icon>{getIcon(itm.icon, 'small')}</Icon>
                    </IconButton>)
                } else {
                  return (
                    <Button
                      key={itm.id}
                      variant={variant}
                      color={itm.color || options.color}
                      disabled={disabled}
                      size={itm.size || options.size}
                      href={link.url}
                      target={link.target}
                      startIcon={getIcon(itm.icon)}
                      onClick={(evt) => {
                        this.triggerEvent('selected', itm, evt)
                      }} >{itm.title || itm.label}</Button>)
                }
              }
              )}
          </ButtonGroup>
        )
      }
    }

    return content;
  }
}

export default ButtonComponent;