import React from 'react';

// test utils
import { prepStoryComponent } from '../../util/StoryUtil';
import { util } from 'modelui-core-runtime'
import { layout } from 'modelui-core-runtime';
import { action } from '@storybook/addon-actions'
import registerComponents from '../Components';
import { ApplicationWrapper } from '../../theme/components';

// components
import ImageComponent from './ImageComponent';
import { triggers, events, config } from './ImageComponent'


/// Event addon
export default {
  title: 'Components/Image',
  component: ImageComponent,
  argTypes: util.StoryUtil.createLayoutViewArgumentTypes(config)
};

export const ImageBasic = (args) => {

  const props = {
    id: 'ImageBasic_id',
    type: 'images',
    data: [{
      'id': 'id0',
      'url': 'https://material-ui.com/static/images/image-list/breakfast.jpg',
      'title': 'Image',
      'cols': 2,
    }, {
      'id': 'select_value',
      'url': 'https://material-ui.com/static/images/image-list/burgers.jpg',
      'title': 'Image',
      'cols': 1,
    }, {
      'id': 'delete_value',
      'url': 'https://material-ui.com/static/images/image-list/honey.jpg',
      'title': 'Image',
      'cols': 1,
    }, {
      'id': 'id3',
      'url': 'https://material-ui.com/static/images/image-list/vegetables.jpg',
      'title': 'Image',
      'cols': 2,
    }],
    config: { options: args },
    schema: {}
  }

  return (
    <ApplicationWrapper>
      {prepStoryComponent(
        layout.Manager.ComponentManager.getInstance(), action, registerComponents,
        props, triggers, events, {
        triggers: {
          push: function () {
            return {
              'id': 'id' + parseInt(Math.random() * 1000),
              'url': 'https://material-ui.com/static/images/image-list/honey.jpg',
              'title': 'Image',
              'cols': 1,
            }
          },
          push_front: function () {
            return {
              'id': 'id' + parseInt(Math.random() * 1000),
              'url': 'https://material-ui.com/static/images/image-list/vegetables.jpg',
              'title': 'Image',
              'cols': 1,
            }
          }
        }
      })}
      <ImageComponent {...props} />
    </ApplicationWrapper>
  );
};
ImageBasic.args = {
  color: 'inherit'
}