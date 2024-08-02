import React, { useState } from 'react'



export default function Textform(props) {
  const [text, stex] = useState('Enter text Here');
  const handleUpClick = () => {
    console.log("uppercase was clicked" + text)
    let newtext = text.toUpperCase();
    stex(newtext)
  }
  const handledownClick = () => {
    console.log("uppercase was clicked" + text)
    let newtext = text.toLowerCase();
    stex(newtext)
  }

  const handleonchange = (event) => {
    console.log("on change")
    stex(event.target.value)
  }

  const [btntxt, setbtntxt] = useState("light mode")

  const [modechane, setmodechane] = useState({

    color: 'white',
    border: '7px solid red',
    backgroundColor: 'black'
  })



  const modechange = () => {
    if (modechane.color === 'white') {
      setmodechane({

        color: 'black',
        border: '7px solid red',
        backgroundColor: 'white'
      })
      setbtntxt("dark mode")
    }
    else {
      setmodechane({

        color: 'white',
        border: '7px solid cyan',
        backgroundColor: 'black'
      })
      setbtntxt("light mode")

    }



  }
  return (
    <>
      <h1 >{props.heading}</h1>
      <div className="mb-3" style={modechane}>


        <textarea className="form-control" value={text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>conver to upercase</button>

      <button className="btn btn-primary mx-2" onClick={handledownClick}>conver to lower</button>
      <div className="container" style={modechane}>
        <h2>you text summary</h2>
        <p>  number of charecter {text.length} and words {text.split(" ").length}</p>
        <p>{0.008 * text.split(" ").length} minutes</p>



      </div>
      <button className="btn btn-primary mx-2" onClick={modechange}>{btntxt}</button>
      <h2>preview</h2>
      {text}

      

    </>
  )
}




