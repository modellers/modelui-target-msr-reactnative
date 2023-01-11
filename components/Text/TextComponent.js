// https://material-ui.com/api/typography/
import React from 'react';
import { Text } from 'react-native';
import { structs } from 'modelui-core-runtime';

export const events = structs.ListBase.events;
export const triggers = structs.ListBase.triggers;

export const options = {
  "id": "texts",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Texts",
  "description": "Texts section options",
  "x-layout": "component",
  "type": "object",
  "version": 0.1,
  "properties": {
    "color": {
      "title": "color",
      "description": "color",
      "type": "string",
      "enum": ['initial', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error'],
      "default": "primary"
    }
  },
  "required": ["color"]
}

export const item = {
  "id": "text",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Text",
  "description": "Text",
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
    "typography": {
      "description": "Typography",
      "type": "string",
      "enum": [
        "heading",
        "section",
        "part",
        "chapters",
        "title",
        "subtitle",
        "caption",
        "subtitle",
        "description",
        "text"
      ],
      "default": "text"
    },
    "text": {
      "description": "text",
      "type": "string",
      "default": ""
    }
  },
  "required": ["typography", "text"]
}

export const config = {

  name: "Texts",
  type: "texts",
  author: "Kjartan Jónsson",
  description: "Texts component",
  version: 0.1,
  relation: {
    contains: ["text"],
    within: "component" // parent
  },
  options: options,
  contains: {
    "text": item
  },
  state: structs.ListBase.StateList
}

const style = theme => ({
});

class TextComponent extends structs.ListBase.ListBase {

  constructor(props) {

    if (!props.config.options) { props.config.options = {} }
    super(props);

    /*
    heading = h1
      section = h2
        part = h3
          chapters = h4
            title = h5
              subtitle = h6
                caption = subtitle
                  subtitle = subtitle2
                    description = body1
                      text = body2
    */

    this.configs = {
      heading: { variant: 'h1', component: 'h1' },
      section: { variant: 'h2', component: 'h2' },
      part: { variant: 'h3', component: 'h3' },
      chapter: { variant: 'h4', component: 'h4' },
      title: { variant: 'h5', component: 'h5' },
      subtitle: { variant: 'h6', component: 'h6' },
      caption: { variant: 'subtitle', component: 'p' },
      summary: { variant: 'subtitle2', component: 'p' },
      description: { variant: 'body1', component: 'p' },
      text: { variant: 'body2', component: 'p' }
    }
  }

  getText(itm) {
    return itm.text || '--missing text--';
  }

  render() {
    return (
      <div>
        {this.state.data.map((itm, idx) => {
          const config = this.configs[itm.typography || 'text'];
          return (
            <Text key={this.props.id + idx} style={{ fontSize: 16 }}>
              {this.getText(itm)}
            </Text>
          )
        })
        }
      </div>
    )
  }
}

export default TextComponent;
/*
const input_schema = {
  "$id": "https://example.com/address.schema.json",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "Text Component",
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "typography": {
      "type": "string" // one of
    },
    "text": {
      "type": "string"
    }
  }
}
*/
