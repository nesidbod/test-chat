import { all } from 'redux-saga/effects'
import { watchData, watchSend } from './saga/dataSaga'

export default function* saga() {
  yield all([
    watchSend(),
    watchData()
  ])
}
