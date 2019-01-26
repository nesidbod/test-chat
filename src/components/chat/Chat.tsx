import { Avatar, Button, IconButton, Snackbar } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import ImageIcon from '@material-ui/icons/Image';

import * as React from 'react'
import '../../styles/chat/Chat.css'

import IAction from 'src/models/IAction';
import Message from '../../sComponents/message/Message'

interface IChatProps {
  history: any,
  user: any,
  messages: any[],
  newMessage: any,
  send(mess: any): IAction,
  clear(): IAction,
  received(): IAction
}

export default class Chat extends React.Component<IChatProps, any> {
  constructor(props: IChatProps) {
    super(props)
    this.state = {
      open: false,
      counter: 0,
      activeUser: { name: 'Test user 2', img: '', id: 0 },
      message: '',
      messages: [{ incoming: false, user: 1, text: 'test message' }, { incoming: true, user: 0, text: 'test message 2' }]
    }
  }

  public componentWillReceiveProps(newProps: IChatProps) {
    if (!!newProps.newMessage) {
      const newMessage: any = JSON.parse(JSON.stringify(newProps.newMessage.text)) || ''
      let counter = 0
      newMessage.split(' ').forEach((el: string) => {
        if (el !== ' ') {
          counter++
        }
      })
      this.setState({ open: true, counter })
    }
  }

  public render() {
    const { activeUser } = this.state

    return (
      <div className="chat-container">
        <div className="chat-header">
          <div className="chat-header-user-img">
            <Avatar>
              <ImageIcon />
            </Avatar>
          </div>
          <div className="chat-header-user-name">
            {activeUser.name}
          </div>
        </div>
        <div className="chat-messages" id="chat-messages">
          {this.props.messages.map((el: any, index: number) => {
            return <Message incoming={el.incoming} text={el.text} key={index} />
          })}
        </div>
        <div className="chat-send-message">
          <textarea
            placeholder="Write text..."
            onKeyDown={(e) => {
              if (e.keyCode === 13 && e.shiftKey) {
                return false
              } else
                if (e.keyCode === 13 && !e.shiftKey) {
                  e.preventDefault()
                  if (!!this.state.message.length) {
                    this.sendMessage()
                  }
                }
              return false
            }}
            value={this.state.message}
            onChange={(el) => this.setState({ message: el.target.value })} />
          <Button
            className="chat-send-message-button"
            onClick={this.sendMessage}
            disabled={!!!this.state.message.length}>
            Send
          </Button>
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={() => this.setState({ open: false })}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">you have received a message with a length of {this.state.counter} words</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={() => this.setState({ open: false })}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    )
  }

  private sendMessage = () => {
    this.props.send({ incoming: false, user: 1, text: this.state.message })
    this.setState({ message: '' })
    setTimeout(() => this.scrollBottom(), 100)
    setTimeout(() => (this.props.received(), this.scrollBottom()), 1000)
  }

  private scrollBottom = () => {
    const htmlElemBlock: HTMLElement | null = document.getElementById('chat-messages')
    if (htmlElemBlock) {
      htmlElemBlock.scrollTop = 9999
    }
  }

}
