import React from 'react'

import Item from '@/components/Item'

class App extends React.Component {
  onClickBox = () => {}

  render(): JSX.Element {
    return (
      <div style={{backgroundColor: 'pink', height: '100px'}} onClick={() => this.onClickBox()}>
        <Item />
      </div>
    )
  }
}

export default App