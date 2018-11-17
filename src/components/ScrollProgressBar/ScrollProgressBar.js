import React, { Component } from 'react'
import styled from 'styled-components'
import ScrollProgress from 'scrollprogress'

const Bar = styled.div.attrs({
  style: ({ progress }) => ({
    width: `${progress}%`,
  }),
})`
  background-color: ${props => props.theme.palette.global01};
  height: 4px;
`

class ScrollProgressBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      progress: 0,
    }
  }

  componentDidMount () {
    this.progressObserver = new ScrollProgress((x, y) => {
      this.setState({ progress: y * 100 })
    })
  }

  componentWillUnmount () {
    this.progressObserver.destroy()
  }

  render () {
    return <Bar progress={this.state.progress} />
  }
}

export default ScrollProgressBar
