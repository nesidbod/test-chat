
import IAuthState from './auth/IAuthState'
import IDataState from './data/IDataState'

export default interface IRootState {
    auth: IAuthState,
    data: IDataState
}
