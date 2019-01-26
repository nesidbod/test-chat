import IDataState from './IDataState'

export default {
    newMessage: null,
    messages: [{ incoming: false, user: 0, text: 'test message' }, { incoming: true, user: 0, text: 'test message 2' }],
} as IDataState
