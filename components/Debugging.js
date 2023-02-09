

// Managers and factories
import { layout } from 'modelui-core-runtime';

// Components
// import { registerComponents as register_modelui_wrap_bigcalendar } from 'modelui-wrap-bigcalendar';



export const registerConsole = (event_manager) => {
    // add specific solutions
    event_manager.register(
        'console',
        {
            print: {
                schema: {},
                handler: (obj) => {
                    console.info(obj);
                }
            },
            debug: {
                schema: {},
                handler: (obj) => {
                    console.debug(obj);
                }
            },
            info: {
                schema: {},
                handler: (obj) => {
                    console.info(obj);
                }
            },
            warning: {
                schema: {},
                handler: (obj) => {
                    console.warn(obj);
                }
            },
            error: {
                schema: {},
                handler: (obj) => {
                    console.error(obj);
                }
            },

        }
    );
}


export default function registerDebuggingComponents(component_manager) {

    if (!component_manager) {
        component_manager = layout.Manager.ComponentManager.getInstance();
    }
    /*
    if (component_manager.constructor.name !== 'ComponentManager') {
        throw "Constructor must be component manager";
    }
    */
    registerConsole(component_manager.getEventManager());
}

