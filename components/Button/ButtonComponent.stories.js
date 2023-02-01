import React from 'react';

// test utils
import { util } from 'modelui-core-runtime'
import { layout } from 'modelui-core-runtime';
import { action } from '@storybook/addon-actions'
import registerComponents from '../Components';
import { ApplicationWrapper } from '../../theme/components';

// components
import { Button } from './Button';
import { triggers, events, config } from './ButtonComponent'

export default {
  title: 'Components/Buttons',
  component: Button,
  argTypes: util.StoryUtil.createLayoutViewArgumentTypes(config)
};

export const SingleButton = (args) => {

  const props = {
    id: 'SingleButton_id',
    type: 'buttons',
    data: [{
      'id': 'id1',
      'title': 'title 1',
    }],
    config: { options: args },
    schema: {}
  }

  return (
    <ApplicationWrapper>
      {util.StoryUtil.prepStoryComponent(
        layout.Manager.ComponentManager.getInstance(), action, registerComponents,
        props, triggers, events)}
      <Button {...props} />
    </ApplicationWrapper>
  );
};
SingleButton.args = {
  buttonVariant: 'contained',
  size: 'large',
  color: 'primary'
}

export const TextButtons = (args) => {

  const props = {
    id: 'TextButtons_id',
    type: 'buttons',
    data: [{
      'id': 'id1',
      'title': 'title 1',
    }, {
      'id': 'id2',
      'disabled': true,
      'title': 'title 2',
    }, {
      'id': 'select_value',
      'title': 'select_value',
    }, {
      'id': 'delete_value',
      'title': 'delete_value',
    }],
    config: { options: args },
    schema: {}
  }

  return (
    <ApplicationWrapper>
      {util.StoryUtil.prepStoryComponent(
        layout.Manager.ComponentManager.getInstance(), action, registerComponents,
        props, triggers, events)}
      <Button {...props} />
    </ApplicationWrapper>
  );
};
TextButtons.args = {
  buttonVariant: 'contained',
  size: 'large',
  color: 'primary'
}

export const SingleIcon = (args) => {
  const props = {
    id: 'SingleIcon_id',
    type: 'buttons',
    data: [{
      'id': 'id1',
      'icon': 'ui-kitten:star'
    }],
    config: { options: args },
    schema: {}
  }

  return (
    <ApplicationWrapper>
      {util.StoryUtil.prepStoryComponent(
        layout.Manager.ComponentManager.getInstance(), action, registerComponents,
        props, triggers, events)}
      <Button {...props} />
    </ApplicationWrapper>
  );
};
SingleIcon.args = {
  buttonVariant: 'contained',
  size: 'medium',
  color: 'primary'
}

export const SingleIconText = (args) => {

  const props = {
    id: 'SingleIconText_id',
    type: 'buttons',
    data: [{
      'id': 'id1',
      'title': 'title 1',
      'icon': 'font-awesome:fa fa-gift'
    }],
    config: { options: args },
    schema: {}
  }

  return (
    <ApplicationWrapper>
      {util.StoryUtil.prepStoryComponent(
        layout.Manager.ComponentManager.getInstance(), action, registerComponents,
        props, triggers, events)}
      <Button {...props} />
    </ApplicationWrapper>
  );
};
SingleIconText.args = {
  buttonVariant: 'contained',
  size: 'medium',
  color: 'primary'
}

export const IconButtons = (args) => {
  const props = {
    id: 'IconButtons_id',
    type: 'buttons',
    data: [{
      'id': 'id1',
      'icon': 'font-awesome:fa fa-cloud'
    }, {
      'id': 'id2',
      'disabled': true,
      'icon': 'font-awesome:fa fa-gift'
    }, {
      'id': 'select_value',
      'icon': 'font-awesome:fa fa-heart-o'
    }, {
      'id': 'delete_value',
      'icon': 'font-awesome:fa fa-spinner fa-spin'
    }],
    config: { options: args },
    schema: {}
  }
  return (
    <ApplicationWrapper>
      {util.StoryUtil.prepStoryComponent(
        layout.Manager.ComponentManager.getInstance(), action, registerComponents,
        props, triggers, events)}
      <Button {...props} />
    </ApplicationWrapper>
  );
};
IconButtons.args = {
  buttonVariant: 'contained',
  size: 'medium',
  color: 'primary'
}


export const IconTextButtons = (args) => {

  const props = {
    id: 'IconTextButtons_id',
    type: 'buttons',
    data: [{
      'id': 'id1',
      'title': 'title 1',
      'icon': 'font-awesome:fa fa-cloud'
    }, {
      'id': 'id2',
      'title': 'title 2',
      'disabled': true,
      'icon': 'font-awesome:fa fa-gift'
    }, {
      'id': 'select_value',
      'title': 'select_value',
      'icon': 'font-awesome:fa fa-heart-o'
    }, {
      'id': 'delete_value',
      'title': 'delete_value',
      'icon': 'font-awesome:fa fa-spinner fa-spin'
    }],
    config: { options: args },
    schema: {}
  }

  return (
    <ApplicationWrapper>
      {util.StoryUtil.prepStoryComponent(
        layout.Manager.ComponentManager.getInstance(), action, registerComponents,
        props, triggers, events)}
      <Button  {...props} />
    </ApplicationWrapper>
  );
};
IconTextButtons.args = {
  buttonVariant: 'contained',
  size: 'medium',
  color: 'primary'
}


export const SingleFab = (args) => {

  const props = {
    id: 'SingleFab_id',
    type: 'buttons',
    data: [{
      'id': 'id1',
      'icon': 'material-ui:Add'
    }],
    config: { options: args },
    schema: {}
  }

  return (
    <ApplicationWrapper>
      {util.StoryUtil.prepStoryComponent(
        layout.Manager.ComponentManager.getInstance(), action, registerComponents,
        props, triggers, events)}
      <Button {...props} />
    </ApplicationWrapper>
  );
};

SingleFab.args = {
  buttonVariant: 'fab',
  size: 'medium',
  color: 'primary'
}

export const SingleFabs = (args) => {

  const props = {
    id: 'SingleFabs_id',
    type: 'buttons',
    data: [{
      'id': 'id1',
      'title': 'title 1',
      'icon': 'font-awesome:fa fa-inbox'
    }, {
      'id': 'id2',
      'title': 'title 2',
      'disabled': true,
      'icon': 'font-awesome:fa fa-envelope-open'
    }, {
      'id': 'id3',
      'title': 'title 3',
      'icon': 'material-ui:Star'
    }],
    config: { options: args },
    schema: {}
  }

  return (
    <ApplicationWrapper>
      {util.StoryUtil.prepStoryComponent(
        layout.Manager.ComponentManager.getInstance(), action, registerComponents,
        props, triggers, events)}
      <Button {...props} />
    </ApplicationWrapper>
  );

};
SingleFabs.args = {
  buttonVariant: 'fab',
  size: 'medium',
  color: 'primary'
}