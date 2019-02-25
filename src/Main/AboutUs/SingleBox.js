import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SingleBox = ({ image, title, text }) => (
  <SingleBoxContainer>
    <PictureContainer>
      <Picture src={image} />
    </PictureContainer>
    <TextBox>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </TextBox>
  </SingleBoxContainer>
)

SingleBox.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
}

const SingleBoxContainer = styled.article`
  width: 18.75rem;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0 1px 10px 0 rgba(53, 58, 72, 0.09), 0 1px 5px 0 rgba(53, 58, 72, 0.09), 0 0 1px 0 rgba(53, 58, 72, 0.09);

  @media screen and (max-width: 980px) {
    margin-bottom: 2.3125rem
  }
`

const PictureContainer = styled.figure`
  margin: 0;
`

const Picture = styled.img`
  display: block;
  width: 18.75rem;
  height: 11.25rem;
  margin-right: auto;
  margin-left: auto;
`

const TextBox = styled.section`
  position: relative;
  height: 8.75rem;
  margin: 0 1rem;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
`

const Title = styled.header`
  line-height: 2.7rem;
  font-size: 1.375rem;
  color: #545454;
`

const Text = styled.p`
  line-height: 1.3rem;
  color: #545454;
  font-size: 0.8125rem;
  margin: 0;
  padding-bottom: 14px;
`

export default SingleBox