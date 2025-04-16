import React, { useContext } from 'react'
import { NewContext } from '../App'

const Data = () => {
    const val =  useContext(NewContext)
  return (
    <div>
        <h1>data from value is : {val}</h1>
      
    </div>
  )
}

export default Data
