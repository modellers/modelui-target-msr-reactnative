/**
 * TODO:
 * Should use util from 'modelui-core-runtime'
 * Need to abstract that function more or create a custom Storybook addon
 */
import { ScrollView, View, Button } from 'react-native';


const print_config = {
    name: 'StoryUtil',
    type: 'storyutil',
    author: 'Kjartan Jónsson',
    description: 'StoryUtil component',
    version: 0.1,
    relation: {
        contains: []
    },
    contains: {},
    options: {}
}

export const registerStoryWatchList = (
    eventHandlerInstance,
    test_handler,
    action
) => {
    if (!action) {
        throw Error('registerStorWatchList is missing action handler')
    }
    eventHandlerInstance.register(
        test_handler,
        {
            print: {
                schema: {},
                handler: (obj) => {
                    action(obj.event)(obj)
                }
            }
        },
        {},
        print_config
    )
}



export const createWatchList = function (
    eventHandlerInstance,
    test_handler,
    component_id,
    event_types,
    action
) {
    // create watchlist
    const watch_list = []
    const test_handler_id = component_id + '_handler_id'
    if (!action) {
        throw Error('createWatchList is missing action handler')
    }
    event_types.forEach((event_type) => {
        watch_list.push({
            component: { id: component_id, event: event_type },
            trigger: { id: test_handler_id, action: 'print' },
            transform: function (data) {
                return { event: event_type, data: data }
            }
        })
    })
    eventHandlerInstance.watch(watch_list)
    registerStoryWatchList(eventHandlerInstance, test_handler_id, action)
}

export const createEventTriggers = (
    eventHandlerInstance,
    component_id,
    triggers_fn,
    trigger_data
) => {
    const triggers = triggers_fn
    trigger_data = trigger_data || {} // default none data
    return (
        <View>
            {
                Object.keys(triggers).map((trigger_id, i) => {
                    let values = { title: trigger_id + '_value', id: trigger_id + '_value' }
                    if (trigger_data[trigger_id]) {
                        values = trigger_data[trigger_id]
                    }
                    return (
                        <Button
                            key={trigger_id + '_key_' + triggers[trigger_id].name}
                            title={triggers[trigger_id].info.name}
                            accessibilityLabel={triggers[trigger_id].info.description}
                            onPress={() => {
                                if (typeof values === 'function') {
                                    eventHandlerInstance.addAction(
                                        component_id,
                                        trigger_id,
                                        values()
                                    )
                                } else {
                                    eventHandlerInstance.addAction(component_id, trigger_id, values)
                                }
                            }}
                        >
                            {triggers[trigger_id].info.name}
                        </Button>
                    )
                })
            }
        </View>

    )
}

export const prepStoryComponent = (
    componentManagerInstance,
    action,
    registerComponents,
    props,
    triggers,
    events,
    overrides
) => {
    overrides = overrides || {}
    const component_manager = componentManagerInstance
    const state_manager = componentManagerInstance.getStateManager()
    // attach managers and factories
    props.manager = component_manager
    if (typeof action !== 'function') {
        throw Error('prepStoryComponent is missing action handler')
    }
    if (typeof registerComponents !== 'function') {
        throw Error('prepStoryComponent is missing registerComponents')
    }
    registerComponents(component_manager)
    state_manager.clearAll()
    state_manager.createLayoutState([props])
    createWatchList(
        componentManagerInstance.getEventManager(),
        props.id + '_handler',
        props.id,
        Object.keys(events),
        action
    )
    return createEventTriggers(
        componentManagerInstance.getEventManager(),
        props.id,
        triggers,
        overrides.triggers
    )
}






  ///////////////////////////////////