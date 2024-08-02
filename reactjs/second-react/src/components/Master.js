import React from 'react'
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import Secondsection from "./Secondsection";

export default function Master(prop) {
  return (
    <>
    <Navbar tital={prop.name} />
    <Home tital={prop.name} />
    <Secondsection/>
    <Footer tital={prop.name}/>
  </>
  )
}
