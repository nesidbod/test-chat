import dataInitialState from '../../models/data/dataInitialState'
import IDataState from '../../models/data/IDataState'
import Action from '../../models/IAction'
import {
  CLEAR_MESSADGE,
  RECEIVED_MESSADGE_SUCSSES,
  SAVE_MESSADGE
} from '../actions/dataActions'

export default function auth(
  state = dataInitialState,
  { type, payload }: Action
): IDataState {
  switch (type) {
    case SAVE_MESSADGE:
    const newMessage = [...state.messages]
    newMessage.push(payload)
      return { ...state, messages: newMessage }
      case CLEAR_MESSADGE:
      return { ...state, newMessage: null }
    case RECEIVED_MESSADGE_SUCSSES:
      return { ...state,  newMessage: payload }
    default:
      return state
  }
}
