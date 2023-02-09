


export const events = [

    {
        'component': { 'id': 'buttons-page_id2', 'event': 'selected' },
        'trigger': { 'id': 'console', 'action': 'debug' },
        'transform': function (data) { return { "id": data.id.replace("button-", "") } }
    },
    {
        'component': { 'id': 'buttons-page_id1', 'event': 'selected' },
        'trigger': { 'id': 'asdfs54sfasdfasdfasdf43dfasdgf', 'action': 'select' },
        'transform': function (data) { return { "id": data.id.replace("button-", "") } }
    },
    {
        'component': { 'id': 'buttons-page_id2', 'event': 'selected' },
        'trigger': { 'id': 'asdfs54sfasdfasdfasdf43dfasdgf', 'action': 'select' },
        'transform': function (data) { return { "id": data.id.replace("button-", "") } }
    },
    {
        'component': { 'id': 'buttons-page_id3', 'event': 'selected' },
        'trigger': { 'id': 'asdfs54sfasdfasdfasdf43dfasdgf', 'action': 'select' },
        'transform': function (data) { return { "id": data.id.replace("button-", "") } }
    }
]
