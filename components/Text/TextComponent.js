// https://material-ui.com/api/typography/
import React from 'react';
import { Text } from '../../theme/components';
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
      heading: { category: 'h1' },
      section: { category: 'h2' },
      part: { category: 'h3' },
      chapter: { category: 'h4' },
      title: { category: 'h5' },
      subtitle: { category: 'h6' },
      caption: { category: 's1' },
      summary: { category: 's2' },
      description: { category: 'c1' },
      text: { category: 'c2' }
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
            <Text key={this.props.id + idx} category={config.category} >
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
