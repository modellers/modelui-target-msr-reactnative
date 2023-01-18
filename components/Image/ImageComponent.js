// https://material-ui.com/api/typography/
import React from 'react';

import { Image } from '../../theme/components';

import { structs } from 'modelui-core-runtime';

export const events = structs.ListBase.events;
export const triggers = structs.ListBase.triggers;


export const options = {
  "id": "images",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "Image options",
  "x-layout": "component",
  "type": "object",
  "version": 0.1,
  "properties": {},
  "required": []
}

export const item = {
  "id": "image",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Image",
  "description": "Image option",
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
    "url": {
      "description": "URL to image",
      "type": "string",
      "default": ""
    },
    "title": {
      "description": "Title of the image when missing or hovering",
      "type": "string",
      "default": ""
    },
    "cols": {
      "description": "Column",
      "type": "integer",
      "default": 1,
      "minimum": 1,
      "maximum": 3,
    }
  },
  "required": ["title"]
}

export const config = {
  name: "Images",
  type: "images",
  author: "Kjartan Jónsson",
  description: "Image component",
  version: 0.1,
  relation: {
    contains: ["image"],
    within: "component" // parent
  },
  contains: {
    "image": item
  },
  options: options,
  state: structs.ListBase.StateList
}

class ImageComponent extends structs.ListBase.ListBase {

  render() {

    return (
      <div>
        {this.state.data.map((item) => {
          const style = {
            width: 200,
            height: 200 / item.cols,
          }
          return <Image key={item.id} source={item.url} alt={item.title} style={style} />
        })}
      </div>
    );
  }
}

export default ImageComponent;
