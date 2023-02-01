import React from 'react';

// test utils
import { util } from 'modelui-core-runtime'
import { layout } from 'modelui-core-runtime';
import { action } from '@storybook/addon-actions'
import registerComponents from '../Components';
import { ApplicationWrapper } from '../../theme/components';

// test data
import { TestTextLatin_SummaryArray, TestTextLatin_LoremIpsumDolorArray, TestTextLatin_IpsumDolorArray, TestTextLatin_PellentesquePorttitorArray, TestTextLatin_MaecenasArray } from '../../examples/TestText';
// components
import { Grid } from './Grid';
import { triggers, events, config } from './GridComponent'


/// Event addon

export default {
  title: 'Components/Grid',
  component: Grid,
  argTypes: util.StoryUtil.createLayoutViewArgumentTypes(config)
};

export const GridBasic = (args) => {
  const props = {
    id: 'GridBasic_id',
    type: 'grid',
    data: [{
      'id': 'id1',
      'content': 'Hello id1'
    }, {
      'id': 'id2',
      'content': 'Hello id2'
    }, {
      'id': 'select_value',
      'gridXS': 4,
      'gridSM': 4,
      'content': 'Hello selected_value'
    }, {
      'id': 'delete_value',
      'content': 'Hello delete value'
    }],
    config: { options: args },
    schema: {}
  }

  return (
    <ApplicationWrapper>
      {util.StoryUtil.prepStoryComponent(
        layout.Manager.ComponentManager.getInstance(), action, registerComponents,
        props, triggers, events)}
      <Grid {...props} />
    </ApplicationWrapper>
  );
};
GridBasic.args = {
  spacing: 1,
  direction: 'column',
  justifyContent: 'center',
  alignItems: 'stretch',
  gridXS: 2,
  gridSM: 2
}


export const GridText = (args) => {
  const props = {
    id: 'GridText_id',
    type: 'grid-columns',
    data: TestTextLatin_SummaryArray,
    config: { options: args },
    schema: {}
  }

  return (
    <ApplicationWrapper>
      {util.StoryUtil.prepStoryComponent(
        layout.Manager.ComponentManager.getInstance(), action, registerComponents,
        props, triggers, events)}
      <Grid {...props} />
    </ApplicationWrapper>
  );
};
GridText.args = {
  spacing: 1,
  direction: 'row',
  justifyContent: 'center',
  alignItems: 'stretch',
  gridXS: 2,
  gridSM: 2
}


export const GridGrid = (args) => {
  const props = {
    id: 'GridGrid_id',
    type: 'grid-columns',
    data: [{
      'id': 'GridGrid_idid2',
      'content': {
        'id': 'GridGrid_idasdfasdffa2',
        'type': 'texts',
        'data': TestTextLatin_IpsumDolorArray,
        'schema': {},
        'config': { 'options': {} }
      }
    }, {
      'id': 'select_value',
      'gridXS': 4,
      'gridSM': 4,
      'content': {
        'id': 'GridGrid_idasdfasdffa3',
        'type': 'grid-rows',
        'data': [{
          'id': 'GridGrid_idid1sds',
          'content': {
            'id': 'GridGrid_idasdfasdffdsdsa',
            'type': 'texts',
            'data': TestTextLatin_PellentesquePorttitorArray,
            'schema': {},
            'config': { 'options': {} }
          }
        }, {
          'id': 'id1',
          'content': {
            'id': 'GridGrid_idasdfasdffa',
            'type': 'texts',
            'data': TestTextLatin_LoremIpsumDolorArray,
            'schema': {},
            'config': { 'options': {} }
          }
        }],
        'schema': {},
        'config': { 'options': { 'direction': 'row', 'gridXS': 12, 'gridSM': 12 } }
      }
    }, {
      'id': 'delete_value',
      'content': {
        'id': 'GridGrid_idasdfasdffa4',
        'type': 'texts',
        'data': TestTextLatin_MaecenasArray,
        'schema': {},
        'config': { 'options': {} }
      }
    }],
    config: { options: args },
    schema: {}
  }

  return (
    <ApplicationWrapper>
      {util.StoryUtil.prepStoryComponent(
        layout.Manager.ComponentManager.getInstance(), action, registerComponents,
        props, triggers, events)}
      <Grid {...props} />
    </ApplicationWrapper>
  );
};
GridGrid.args = {
  spacing: 1,
  direction: 'row',
  justifyContent: 'center',
  alignItems: 'stretch',
  gridXS: 2,
  gridSM: 2
}

