import React from 'react'

interface Props {
  [x: string]: any
}

export default class Item extends React.Component<Props> {

  render():JSX.Element {
    return (
      <div onClick={(e) => this.props.onClick(e)} style={{backgroundColor: 'aliceblue', height: '40px'}}>
        item
      </div>
    )
  }
}
