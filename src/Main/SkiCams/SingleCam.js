import React from 'react'
import styled from 'styled-components'

const SingleCam = ({ camUrl }) => {
  return (
    <SingleCamContainer>
      <PictureContainer>
        <Picture src={camUrl} />
      </PictureContainer>
    </SingleCamContainer>
  )
}

const SingleCamContainer = styled.article`
  display: flex;

  @media screen and (max-width: 980px) {
    justify-content: space-around;
  }
`

const PictureContainer = styled.figure`
  display: flex;
  margin: 0;
`

const Picture = styled.img`
  display: flex;
  width: 100%;
  height: 16.4rem;
`

export default SingleCam