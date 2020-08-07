import React from 'react'

class App extends React.Component {
  handleClick = () => {
    import('./about.js').then(res => {
      console.log(res)
    })
  }

  render () {
    return <div onClick={this.handleClick}>
      hahaoo
    </div>
  }
}

export default App