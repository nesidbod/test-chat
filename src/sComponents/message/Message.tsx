import * as React from 'react'
import '../../styles/message/Message.css'

interface ISettingsProps {
  incoming: boolean
  text: string
}

export default class Message extends React.Component<ISettingsProps, any> {
  constructor(props: ISettingsProps) {
    super(props)
    this.state = {
      open: ''
    }
  }

  public render() {
    const { text } = this.props
    return (
      <div className="message-container">
        <div className={`message-content ${this.props.incoming ? 'incoming' : ''}`}>
          {text}
        </div>
      </div>
    )
  }

}
