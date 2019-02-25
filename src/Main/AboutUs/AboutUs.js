import React, { Component } from 'react'
import SingleBox from './SingleBox.js'
import first from '../../img/first.png'
import second from '../../img/second.png'
import third from '../../img/third.png'
import styled from 'styled-components'

class AboutUs extends Component {
  render() {
    const {
      title = 'Lorem ipsum',
      text = 'Etiam ullamcorper. Suspendisse a pellentesque dui, non felis maecenas.'
    } = this.props

    return (
      <BoxesContainer>
        <SingleBox image={first} title={title} text={text} />
        <SingleBox image={second} title={title} text={text} />
        <SingleBox image={third} title={title} text={text} />
      </BoxesContainer>
    )
  }
}

const BoxesContainer = styled.div`
  display: flex;
  width: 61.25rem;
  padding-top: 2.3125rem;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 980px) {
    justify-content: space-around;
  }

  @media screen and (min-width: 980px) {
    padding-bottom: 18.0625rem;
  }
`

export default AboutUs