import React, { Component, Fragment } from 'react'
import SingleCam from './SingleCam.js'
import styled from 'styled-components'
import spinner from './../../img/spinner.svg'

import unirest from 'unirest'
import { find, size } from 'lodash'

class SkiCams extends Component {
  constructor(props) {
      super(props);
      this.state = {
          loading: false,
          date: new Date().toLocaleDateString().length < 10
              ? '0' + new Date().toLocaleDateString().split('.').join('-') : new Date().toLocaleDateString().split('.').join('-'),
          AlpeLusia: [],
          CampoTures: []
      };
  }

  sendRequest = (state) => {
    this.setState({ loading: true })
    unirest.get("https://makevoid-skicams.p.mashape.com/cams.json")
      .header("X-Mashape-Key", "3csnFqSjzbmshLUoeYKCMAoS8s1rp1ptToKjsn58ZHjUw8f9Cy")
      .header("Accept", "application/json")
      .end(function (result) {
        const AlpeLusia = find(result.body, { 'name': 'Alpe Lusia' })
        const CampoTures = find(result.body, { 'name': 'Campo Tures' })

        state.setState({
          AlpeLusia: AlpeLusia.cams,
          CampoTures: CampoTures.cams,
          loading: false
        })
      });
  }

  componentDidMount() {
    this.sendRequest(this)
  }

  renderSkiCam = (elem, index) => {
    if (index <= 1) {
      const camParams = find(elem, 'name')
      return (
          <SingleCam key={index} camUrl={camParams.url} />
      )
    }
  }

  render() {
    const { AlpeLusia, CampoTures, date, loading } = this.state

    return (
      <Fragment>
        {loading && <SpinnerBox><Spinner alt='spinner' src={spinner} /></SpinnerBox>}
        {!loading &&
          <SkiBox>
            <ContainerWithPhotos>
              <CurrentDate>
                {date}
              </CurrentDate>
              <Header>Campo Tures</Header>
              {size(CampoTures) && Object.entries(CampoTures).map((elem, index) => this.renderSkiCam(elem, index))}
            </ContainerWithPhotos>
            <ContainerWithPhotos>
              <CurrentDate>
                {date}
              </CurrentDate>
              <Header>Alpe Lusia</Header>
              {size(AlpeLusia) && Object.entries(AlpeLusia).map((elem, index) => this.renderSkiCam(elem, index))}
            </ContainerWithPhotos>
          </SkiBox>}
      </Fragment>
    )
  }
}

const SkiBox = styled.section`
  width: 61.0625rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 1.5625rem;

  @media screen and (max-width: 980px) {
      justify-content: center;
  }
`

const SpinnerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40.4375rem;
`

const Spinner = styled.img`
  height: 3.125rem;
  width: 3.125rem;
`

const ContainerWithPhotos = styled.article`
  width: 29.0625rem;
  height: 36.5625rem;
  background-color: #ffffff;
  margin-top: 2.3125rem;
  border-radius: 0.125rem;
  box-shadow: 0 1px 10px 0 rgba(53, 58, 72, 0.09), 0 1px 5px 0 rgba(53, 58, 72, 0.09), 0 0 1px 0 rgba(53, 58, 72, 0.09);

  @media screen and (max-width: 980px) {
    width: 100%;
    max-width: 29.0625rem;
    margin-right: 1rem;
    margin-left: 1rem;
  }
`

const CurrentDate = styled.p`
  font-size: 0.6875rem;
  line-height: 0.5625rem;
  margin-bottom: 0;
  color: #b6b6b6;
  padding-right: 0.625rem;
  display: flex;
  justify-content: flex-end;
`

const Header = styled.header`
  height: 1.1875rem;
  margin-bottom: 1.4375rem;
  color: #545454;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`

export default SkiCams