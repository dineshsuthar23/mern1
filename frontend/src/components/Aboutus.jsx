import React from 'react'
import Contactus from './Contactus'

const Aboutus = (props) => {
  return (
    <>
      <h1>About US</h1>
      <h2>My name is {props.name.nm}</h2>
      <Contactus name={{n1:props.name.nm, n2:props.name.nm2}}/>
    </>
  )
}

export default Aboutus
