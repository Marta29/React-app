import React, { Component } from 'react'
import styled from 'styled-components'
import MenuConfiguration from './Main/Main.js'
import reactLogo from './img/reactLogo.png'

class App extends Component {
  render() {
    return (
      <Body>
        <Header>
          <LogoContainer>
            <Logo src={reactLogo}/>
          </LogoContainer>
        </Header>
        <MenuConfiguration />
        <Footer>
          <FooterElement>
            <FooterText>Marta Szymanowicz</FooterText>
          </FooterElement>
        </Footer>
      </Body>
    )
  }
}

const Body = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-wrap: wrap;
  margin:0;
  justify-content: center;
  align-items: center;
`

const Header = styled.header`
  height: 10rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LogoContainer = styled.div`
  display: flex;
  width: 18.75rem;

  @media screen and (min-width: 980px) {
    width: 61.25rem;
  }
`

const Logo = styled.img`
  height: 3.75rem;
  width: 6.875rem;
  padding: 0;
`

const Footer = styled.footer`
  background-color: #282828;
  width: 100%;
  border-top: 1px solid #1b7cc8;
`

const FooterElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const FooterText = styled.p`
  width: 21.5625rem;
  border-top: 1px solid #484848;
  color: #888888;
  line-height: 3.3rem;
  margin-top: 1.875rem;
  display: flex;
  justify-content: center;
`

export default App;
