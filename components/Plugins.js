

// Managers and factories
import { layout } from 'modelui-core-runtime';

// Components
// import { registerComponents as register_modelui_wrap_bigcalendar } from 'modelui-wrap-bigcalendar';


export default function registerPluginComponents(component_manager) {

    if (!component_manager) {
        component_manager = layout.Manager.ComponentManager.getInstance();
    }
    /*
    if (component_manager.constructor.name !== 'ComponentManager') {
        throw "Constructor must be component manager";
    }
    */
    // register_modelui_wrap_bigcalendar(component_manager);
}

