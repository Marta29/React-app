import React, { Component } from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import background from '../../img/background.png'
import { isEmpty } from 'lodash'

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)

function validate(name, email) {
  const formErrors = {};

  if (name.length < 3) {
    formErrors.name = 'minimum 3 characters requred'
  }

  if (email.length === 0) {
    formErrors.email = 'email address is required'
  } else if (!(emailRegex.test(email))) {
    formErrors.email = 'invalid email adres'
  }

  return formErrors
}

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formErrors: {},
      correct: false,
      backgroundEmailStar: true,
      backgroundNameStar: true,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    e.target.value === '' ? this.setState({ backgroundNameStar: true }) : this.setState({ backgroundNameStar: false });
  }

  handleChangeEmail = e => {
    e.target.value === '' ? this.setState({ backgroundEmailStar: true }) : this.setState({ backgroundEmailStar: false });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ correct: false })

    const name = ReactDOM.findDOMNode(this._name).value;
    const email = ReactDOM.findDOMNode(this._email).value;
    const formErrors = validate(name, email);

    this.setState({ formErrors: formErrors })

    if (isEmpty(formErrors)) {
      this.setState({ correct: true })
    }
  }

  render() {
    const { formErrors, correct, backgroundEmailStar, backgroundNameStar } = this.state

    return (
      <ContactBox>
        <Form onSubmit={this.handleSubmit}>
          <Name
            ref={name => (this._name = name)}
            className={this.state.formErrors.name && this.state.formErrors.name.length > 0 ? 'error' : null}
            type='text'
            name='name'
            placeholder='Name'
            style={backgroundNameStar ? { backgroundImage: `url(${background})`} : null}
            onChange={this.handleChange}
            noValidate>
          </Name>

          {formErrors.name && formErrors.name.length > 0 && (
            <Span>{formErrors.name}</Span>
          )}

          <Email
            ref={email => (this._email = email)}
            className={this.state.formErrors.email && this.state.formErrors.email.length > 0 ? 'error' : null}
            type='email'
            name='email'
            placeholder='Email'
            style={backgroundEmailStar ? { backgroundImage: `url(${background})`} : null}
            onChange={this.handleChangeEmail}
            noValidate>
          </Email>

          {formErrors.email && formErrors.email.length > 0 && (
            <Span>{formErrors.email}</Span>
          )}

          <Message type='text' id='message' name='message' placeholder={'Message' } ></Message>
          <ButtonBox>
            <SendButton type='subbmit'>Send</SendButton>
          </ButtonBox>
          {correct && (
            <Correct>form is correct</Correct>
          )}
        </Form>
      </ContactBox>
    )
  }
}

const ContactBox = styled.section`
  width: 29.0625rem;
  height: 25.375rem;
  border-radius: 0.125rem;
  background-color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-self: center;
  align-items: center;
  box-shadow: 0 1px 10px 0 rgba(53,58,72,0.2), 0 1px 5px 0 rgba(53,58,72,0.2), 0 0 1px 0 rgba(53, 58, 72, 0);

  @media screen and (max-width: 980px) {
      margin: 3.3125rem 1rem;
  }
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1.875rem;
`

const Name = styled.input`
  background: transparent;
  border: 0;
  height: 1.875rem;
  border-bottom: 1px solid #cbcbcb;
  outline: none;
  width: 15.4375rem;
  margin-top: 1rem;

  &.error {
    border: 1px solid #ff7c2e;
    border-radius: 2px;
  }

  ::placeholder {
    color: #cbcbcb;
  }
`

const Span = styled.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  font-size: 0.7rem;
  color: #ff7c2e;
`

const Correct = styled.span`
  display: flex;
  width: 15.4375rem;
  justify-content: flex-end;
  align-self: flex-start;
  color: #00ff08;
  font-size: 0.7rem;
`

const Email = styled.input`
  background: transparent;
  border: 0;
  height: 1.875rem;
  border-bottom: 1px solid #cbcbcb;
  outline: none;
  width: 15.4375rem;
  margin-top: 1.1875rem;

  &.error {
    border: 1px solid #ff7c2e;
    border-radius: 2px;
  }

  ::placeholder {
    color: #cbcbcb
  }

  &:focus {
    background-color: white
  }
`

const Message = styled.textarea`
  background: transparent;
  border: 0;
  height: 1.875rem;
  /* height: 7.275rem; */
  border-bottom: 1px solid #cbcbcb;
  outline: none;
  width: 15.4375rem;
  margin-top: 5.4rem;
  font-family: 'Roboto', sans-serif;
  resize: none;
  overflow: auto;

  ::placeholder {
    color: #cbcbcb
  }
`

const ButtonBox = styled.div`
  display: flex;
  width: 15.4375rem;
  justify-content: flex-end;
  align-self: flex-start;
`

const SendButton = styled.button`
  width: 5.75rem;
  height: 2.125rem;
  background-color: #00d8ff;
  text-transform: uppercase;
  border: 0;
  border-radius: 0.125rem;
  margin-top: 1.875rem;
  color: #fff;
  box-shadow: 1px 1px 3px 0 #bcbcbc;
  cursor: pointer;
`

export default Contact