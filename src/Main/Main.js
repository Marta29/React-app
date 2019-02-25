import React, { Component } from 'react'
import styled from 'styled-components'
import AboutUs from './AboutUs/AboutUs.js'
import SkiCams from './SkiCams/SkiCams.js'
import Contact from './Contact/Contact.js'

export default class MenuConfiguration extends Component {
  constructor(props) {
    super(props);
    this.state = { currentMode: 'form1' }
  }

  getForm(currentMode) {
    const forms = {
      form1: <AboutUs />,
      form2: <SkiCams />,
      form3: <Contact />
    };

    return forms[currentMode]
  }

  toggleForm = (currentMode) => {
    this.setState({ currentMode: currentMode })
  }

  render() {
    return (
      <MenuBox>
        <ConfigurationMenu toggleForm={this.toggleForm} />
        <Box>
          {this.getForm(this.state.currentMode)}
        </Box>
      </MenuBox>
    );
  }
}

class ConfigurationMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 1,
      active: 1
    }
  }

  handleSelect(key, formCategory) {
    this.props.toggleForm(formCategory)
    this.setState({ active: key, key: key })
  }

  myColor(key) {
    if (this.state.active === key) {
      return '#00d8ff'
    }
    return ''
  }

  myBorder(key) {
    if (this.state.active === key) {
      return '1px solid #00d8ff'
    }
    return ''
  }

  render() {
    return (
      <MenuNav activeKey={this.state.key}>
        <NavContainer>
          <NavItem
            style={{ color: this.myColor(1), borderBottom: this.myBorder(1) }}
            eventKey={1}
            title="Form1"
            onClick={() => this.handleSelect(1, 'form1')}>About Us</NavItem>
          <NavItem
            style={{ color: this.myColor(2), borderBottom: this.myBorder(2) }}
            eventKey={2}
            title="Form2"
            onClick={() => this.handleSelect(2, 'form2')}>SkiCams</NavItem>
          <NavItem
            style={{ color: this.myColor(3), borderBottom: this.myBorder(3) }}
            eventKey={3}
            title="Form3"
            onClick={() => this.handleSelect(3, 'form3')}>Contact</NavItem>
        </NavContainer>
      </MenuNav>
    );
  }
}

const MenuBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const Box = styled.div`
  background-color: #f8f8f8;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-top: 1px solid #dbdbdb;

  @media screen and (min-width: 980px) {
    height: 40.4375rem;
  }
`

const MenuNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 61.25rem;
  align-items: flex-start;

  @media screen and (max-width: 980px) {
    justify-content: center;
  }
`

const NavContainer = styled.div`
  display: flex;
  width: 18.875rem;
  flex-wrap: wrap;
  justify-content: space-between;
`

const NavItem = styled.div`
  line-height: 2.375rem;
  text-transform: uppercase;
  color: #545454;
  cursor: pointer;
`