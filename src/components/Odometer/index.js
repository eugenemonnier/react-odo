import React from 'react'

class Odometer extends React.Component {
  constructor () {
    super()
    this.state = { odo: 0 }
  }

  async increment (multiplier) {
    const currOdo = this.state.odo
    await this.setState({ odo: currOdo + 1 * multiplier })
    this.rollover()
  }

  async decrement (multiplier) {
    const currOdo = this.state.odo
    await this.setState({ odo: currOdo - 1 * multiplier })
    this.noNegatives()
  }

  rollover () {
    const odoVal = this.state.odo
    if (this.state.odo > 9999) { this.setState({ odo: odoVal - 9999 }) }
  }

  noNegatives () {
    if (this.state.odo < 0) { this.setState({ odo: 0 }) }
  }

  render () {
    return (
      <>
        <button onClick={() => this.increment(100)}>+100</button>
        <button onClick={() => this.increment(10)}>+10</button>
        <button onClick={() => this.increment(1)}>+1</button>
        <button onClick={() => this.decrement(1)}>-1</button>
        <button onClick={() => this.decrement(10)}>-10</button>
        <button onClick={() => this.decrement(100)}>-100</button>
        <h1>Odometer value: {this.state.odo.toString().padStart(4, '0')}</h1>
      </>
    )
  }
}

export default Odometer
