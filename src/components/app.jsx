import React from 'react'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 600;
`

const App = ({ rootStore }) =>
  <Wrapper>
    MST React Boilerplate
  </Wrapper>

export default inject('rootStore')(observer(App))
