import React from 'react'
import Navbar from './Navbar'
import Carousal from './Carousal'
import DisplayTabs from './DisplayTabs'
import Services from './Services'
import HappyHours from './HappyHours'

const index = () => {
  return (
    <>
    <Navbar />
    <Carousal />
    <DisplayTabs />
    <Services />
    <HappyHours />
    </>
  )
}

export default index