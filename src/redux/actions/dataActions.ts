import IAction from '../../models/IAction'
export const SEND_MESSADGE = 'SEND_MESSADGE'
export const SAVE_MESSADGE = 'SAVE_MESSADGE'
export const SEND_MESSADGE_FAIL = 'SEND_MESSADGE_FAIL'
export const RECEIVED_MESSADGE = 'RECEIVED_MESSADGE'
export const CLEAR_MESSADGE = 'CLEAR_MESSADGE'
export const RECEIVED_MESSADGE_SUCSSES = 'RECEIVED_MESSADGE_SUCSSES'

export const send = (message: any): IAction => ({
  payload: message,
  type: SEND_MESSADGE
})

export const clear = (): IAction => ({
    type: CLEAR_MESSADGE
})

export const received = (): IAction => ({
    type: RECEIVED_MESSADGE
})