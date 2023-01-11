// react basics
import React from 'react';
import { ScrollView } from 'react-native';

// eventfull core
import AppBase from './AppBase';


class App extends AppBase {

  state = {
    modal: [],
    view: [],
    data: [],
    sources: [],
    events: [],
    transform: {}
  };

  server_deployment_preview = "http://localhost:4001/ui-modeller/us-central1/target_environment";

  constructor(props) {
    super(props);
    this.initDataSources(this.state);

    if (window) {
      window._app = this;
    }
  }

  updateFromServer = () => {
    const request = new Request(this.server_deployment_preview);
    fetch(request)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error('Something went wrong on API server!');
        }
      })
      .then((result) => {
        console.debug(result);
        const data = result.data;
        if (result.status === 200) {

          console.info("Re-rendering ... ")
          const state = {
            ...this.state,
            ...{
              modal: data.modals,
              view: data.views,
              events: data.events,
              sources: data.sources,
              updated: new Date()
            }
          };
          this.initDataSources(state);
          this.setState(state);

        } else {
          console.info("Re-rendering ... FAILED ")
        }
      }).catch((error) => {
        console.error(error);
      });
  }

  renderReady() {
    this.updateFromServer();
  }

  render() {

    return (
      <ScrollView>
        {this.renderBody()}
      </ScrollView>
    );
  }

}


export default App;



