import React from 'react'
import { inject, observer } from 'mobx-react'
import Header from '../shared/Header/Header'
import Container from '../shared/Container/Container'

const Profile = ({ rootStore }) => (
  <>
    <Header title="Profile page" />
    <Container content={rootStore.user.name} />
  </>
)

export default inject('rootStore')(observer(Profile))
