import { call, put, takeEvery,throttle } from 'redux-saga/effects'
import {
    sendMes
} from '../../clients/dataCLient'
import IAction from '../../models/IAction'
import {
    RECEIVED_MESSADGE,
    RECEIVED_MESSADGE_SUCSSES,
    SAVE_MESSADGE,
    SEND_MESSADGE,
    SEND_MESSADGE_FAIL
} from '../actions/dataActions'
const serviceUrl = process.env.REACT_APP_MM_API_URL || ''

export function* sendMessadge(action: IAction) {
    try {
        if (!!serviceUrl.length) {
            yield call(sendMes, action.payload)
        }
        yield put({ type: SAVE_MESSADGE, payload: action.payload })

    } catch (error) {
        if (error) {
            yield put({ type: SEND_MESSADGE_FAIL })
        }
    }
}

export function* watchSend() {
    yield takeEvery(SEND_MESSADGE, sendMessadge)
}

export function* getReceived(action: IAction) {
    try {
        const text = function makePhrases() {
            const words1 = ["Test1", "Test1 Test1", "Test1 Test1 Test1 Test1"];
            const words2 = ["Test2 Test2 Test2 Test2 Test2", "Test2 Test2 Test2"];
            const words3 = ["Test3 Test3 Test3 Test3 Test3 Test3 Test3", "Test3"];
            const words4 = ["Test4Test4!"];
           
            const rand1 = Math.floor(Math.random() * words1.length);
            const rand2 = Math.floor(Math.random() * words2.length);
            const rand3 = Math.floor(Math.random() * words3.length);
            const rand4 = Math.floor(Math.random() * words4.length);
            const phrase = words1[rand1] + " " + words2[rand2] +
                   " " + words3[rand3] + " " + words4[rand4] + "!";
            return phrase;
            }
        yield put({ type: SAVE_MESSADGE, payload: { user: 0, text: text(), incoming: true } })
        yield put({ type: RECEIVED_MESSADGE_SUCSSES, payload: { user: 0, text: text(), incoming: true } })

    } catch (error) {
        console.log(error)
    }
}

export function* watchData() {
    yield throttle(400,RECEIVED_MESSADGE, getReceived)
}

