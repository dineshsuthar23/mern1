import React from 'react'
import Data from './Data'

const Contactus = (props) => {
  return (
    <>
      <h1>Contact US</h1>
      <h2>Name from Contact {props.name}</h2>
      <Data />
    </>
  )
}

export default Contactus



/**
 * name
 * email
 * phone
 * pass
 * Confirm pass
 * 
 * submit
 */