import { connect } from 'react-redux'
import IRootState from '../../models/rootState'
import {clear, received,send} from '../../redux/actions/dataActions'
import Chat from './Chat'

const mapStateToProps = (state: IRootState) => ({
  user: state.auth.user,
  messages: state.data.messages,
  newMessage: state.data.newMessage
})

const mapDispatchToProps = {
  send,
  clear,
  received
}

const ChatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)

export default ChatContainer
