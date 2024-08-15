import React, { useState } from 'react'
import Output from './Output'

const Test2 = () => {
    const [changedText,setChangedText]=useState(false)

    const changedTextHandler=()=>{
        setChangedText(true)
    }
  return (
    <>
    {!changedText && <Output>Text Is Not Visible</Output>}
    {changedText && <Output>Changed!</Output>}
    <button onClick={changedTextHandler}>Changed Text!</button>
    </>   

  )
}

export default Test2