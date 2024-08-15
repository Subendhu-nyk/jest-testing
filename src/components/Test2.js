import React, { useState } from 'react'

const Test2 = () => {
    const [changedText,setChangedText]=useState(false)

    const changedTextHandler=()=>{
        setChangedText(true)
    }
  return (
    <>
    {!changedText && <div>Text Is Not Visible</div>}
    {changedText && <div>Changed!</div>}
    <button onClick={changedTextHandler}>Changed Text!</button>
    </>   

  )
}

export default Test2