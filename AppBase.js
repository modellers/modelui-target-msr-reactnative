import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { layout, registerCoreComponents } from 'modelui-core-runtime';
import { Layout } from './components/Grid/Grid';

// components
import registerComponents from './components/Components';
import registerPluginComponents from './components/Plugins';

class AppBase extends React.Component {

  state = {
    modal: [],
    view: [],
    data: [],
    sources: [],
    events: [],
    transform: {}
  };

  data_sources = {};

  constructor(props) {
    super(props);
    // register components

    this._component_manager = layout.Manager.ComponentManager.getInstance();
    this._event_manager = this._component_manager.getEventManager()
    this._state_manager = this._component_manager.getStateManager()
    registerCoreComponents(this._component_manager);
    registerComponents(this._component_manager);
    registerPluginComponents(this._component_manager);

    // clear all
    this._event_manager.clearAll();

    // add specific solutions
    //TODO: registerEventDebugging();
    //TODO: registerEventApp();

  }

  initDataSources = (state) => {

    state = state || this.state;
    // register static memory

    this._state_manager.clearAll();
    this._state_manager.createState({
      id: "document_root",
      type: "layout",
      schema: {},
      config: {},
      data: state.view
    })

    // register the view and then the modals
    this._state_manager.createLayoutState(state.view);
    this._state_manager.createLayoutState(state.modal);
    // register components for memory database
    this._state_manager.createStates(state.sources);
    // set dealy since we need to register all the component first
    // this is for being able to apply filtering on registered components
    state.events.forEach(evt => {
      if (typeof (evt.transform) !== 'function') {
        evt.transform = getTransformFunction(evt);
      }
    })
    this._event_manager.watch(state.events);

  }

  componentDidMount = () => {
    // notify ready event

    this._event_manager.addEvent('app', 'ready', {}, {});
    window.eventManager = this._event_manager;
    this.renderReady();

  }

  renderBody = () => {

    const is_ready = true;
    const manager = this._component_manager;
    // return (<Text style={{ fontSize: 46 }}>Error loading app</Text>)

    if (is_ready) {
      return (
        <View>
          <Layout
            id="document_root"
            schema={{}}
            config={{
            }}
            data={this.state.view}
            manager={manager}
          />
        </View>)
    } else {
      return (<Text style={{ fontSize: 46 }}>Error loading app</Text>)
    }

  }

  render() {
    return (
      <ScrollView>
        {this.renderBody()}
      </ScrollView>
    );
  }
}

export default AppBase;
