import React from 'react'
import { HomeWrapper } from './homeStyles'
import { Button } from '../../components'

const HomePage = () => {
  return (
    <HomeWrapper>
      <h1>Hello</h1>
      <Button type='button'>button 1</Button>
      <Button type='button2'>button 2</Button>
      <Button type='button3'>Hover me</Button>
    </HomeWrapper>
  )
}

export default HomePage
