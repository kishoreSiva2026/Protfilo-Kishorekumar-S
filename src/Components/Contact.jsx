import React from 'react'
import "./Contact.css";

function Contact() {
  const name=" Kishorekumar S"
  const number="+91 7418718028"
  const Email=" kishorekumar92059@gmail.com"
  const src=" https://www.linkedin.com/in/kishorekumar-s-45491a299/"
  return (
    <div>
      <div id='background'>
        <div id='contact_User'>
            <h1>Name:{name}</h1><br />
            <h1>Number:{number}</h1><br />
            <h1>Email:{Email}</h1><br />
            <h1> Linkedin:{src}</h1><br />

            
        </div>
      </div>
    </div>
  )
}

export default Contact