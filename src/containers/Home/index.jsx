import React from 'react'
import { inject, observer } from 'mobx-react'
import Header from '../../components/Header'
import Container from '../../components/Container'

const Home = ({ rootStore }) => (
  <>
    <Header title="Home Page" />
    <Container content="Home page content" />
    {rootStore.user.name}
  </>
)

export default inject('rootStore')(observer(Home))
