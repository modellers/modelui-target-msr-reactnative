

export const editor_layout = {
  data: [{
    'gridXS': 5,
    'gridSM': 5,
    'hidden': false,
    'id': 'panel_target_id',
    'content': "panel_target_tabs"
  }, {
    'gridXS': 2,
    'gridSM': 2,
    'hidden': false,
    'id': 'panel_tree_id',
    'content': "panel_tree_tabs"
  }, {
    'gridXS': 5,
    'gridSM': 5,
    'hidden': false,
    'id': 'panel_workspace_id',
    'content': "panel_workspace_tabs"
  }],
  id: 'f92ec0aa31e145679d3a7d81a862c5b055f88946',
  schema: {},
  type: 'grid-columns',
  config: {
    options: {
      spacing: 1,
      alignItems: 'stretch',
      gridSM: 2,
      gridXS: 2,
      justifyContent: "center",

    }
  }
}

const text_rows = {
  data: [{
    'id': 'id0',
    'typography': 'title',
    'text': 'Lorem ipsum dolor'
  }, {
    'id': 'id1',
    'typography': 'text',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel.'
  }, {
    'id': 'select_value',
    'typography': 'text',
    'text': 'Sed eget orci tellus. Suspendisse turpis ligula, viverra nec elementum a, posuere id urna. Curabitur vitae felis sed neque venenatis rhoncus quis id nibh. Pellentesque vitae pretium nunc. Duis eu interdum nulla. Sed non cursus sem. Sed sit amet iaculis lacus. Nunc auctor lectus accumsan, hendrerit urna et, porta ipsum. Aenean urna arcu, pretium et eros nec, facilisis luctus dolor. Pellentesque porttitor enim ac arcu placerat iaculis. Sed lorem urna, volutpat at ultrices quis, aliquet quis est. Praesent mi libero, gravida fringilla augue in, laoreet luctus nisl. Phasellus in aliquam nulla. Phasellus eu neque laoreet, aliquet arcu vel, pellentesque orci. Nunc elit nisi, cursus ut odio at, eleifend accumsan ante. In sapien nisl, rhoncus ut massa ac, venenatis auctor risus.'
  }, {
    'id': 'delete_value',
    'typography': 'text',
    'text': 'Donec pulvinar elit nec risus aliquam tempus. Phasellus gravida vehicula lacus ut tincidunt. Maecenas justo neque, congue a lacus at, vulputate tempus leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum dignissim, purus id bibendum tempus, mi eros venenatis risus, a bibendum odio ipsum eget magna. Curabitur pretium, turpis vitae pulvinar placerat, dolor arcu elementum nunc, egestas vehicula odio lacus et ante. Nulla at faucibus ligula, interdum lacinia quam. Integer et tellus augue. Nulla mattis vulputate lacus, sed tincidunt lectus aliquet ut. Phasellus a ipsum sed tortor porta porta viverra eu nisi. Fusce at diam vel ipsum cursus interdum nec sit amet leo. Curabitur odio ex, finibus at leo et, pharetra volutpat urna.'
  }, {
    'id': 'id4',
    'typography': 'text',
    'text': 'Morbi facilisis orci dolor, tristique imperdiet justo interdum tincidunt. Aliquam luctus leo vitae diam ullamcorper hendrerit. Praesent in porttitor urna. Nunc vitae tristique nisi. Donec dignissim leo sed diam pulvinar tempor. Integer nibh sem, facilisis vitae sem ac, gravida tincidunt elit. Quisque eu est aliquam mauris ultricies egestas et at urna. Sed volutpat erat ac elit feugiat scelerisque. Quisque id enim turpis. Morbi lobortis diam finibus, volutpat ante in, luctus enim. Aliquam ornare tempus tincidunt. Quisque efficitur eros ac sem tempor, at porttitor ante hendrerit.'
  }],
  id: 'f92ec0aa31e145679d3a7d81a862c5b055f88946',
  schema: {},
  type: 'texts',
  config: {
    options: {
    }
  }
}

const tabs = {
  data: [{
    'id': 'id1',
    'title': 'Title 1',
    'icon': 'font-awesome:person',
    'content': "text_rows"
  }, {
    'id': 'id2',
    'title': 'Title 2',
    'icon': 'material-ui:person',
    'content': 'Some text here 2'
  }, {
    'id': 'select_value',
    'title': 'Title 3',
    'icon': 'font-awesome:person',
    'content': 'Some text here 3',
    'disabled': true
  }, {
    'id': 'delete_value',
    'title': 'Title 4',
    'icon': 'font-awesome:person',
    'data': 'Some text here 3',
  }],
  id: 'f92ec0aa31e145679d3a7d81a862c5b055f88946',
  schema: {},
  type: 'tabs',
  config: {
    options: {
    }
  }
}


const grid_rows = {
  data: [{
    'id': 'id1',
    'title': 'Title 1',
    'content': text_rows
  }, {
    'id': 'id2',
    'title': 'Title 2',
    'content': 'Some text here 2'
  }, {
    'id': 'select_value',
    'title': 'Title 3',
    'content': 'Some text here 3',
    'disabled': true
  }, {
    'id': 'delete_value',
    'title': 'Title 4',
    'data': 'Some text here 3',
  }],
  id: 'asdfs54sfasdfasdfasdf43dfasdgf',
  schema: {},
  type: 'grid-columns',
  config: {
    options: {
      justifyContent: 'center',
      alignContent: 'right'
    }
  }
}


///////////////////////////////////////////////// show friends list - ends

export const layout = {
  'root': [
    grid_rows
  ]
};


////////////////////////////////////////////////////////////////
// Dialogs
////////////////////////////////////////////////////////////////

export const dialogs = []