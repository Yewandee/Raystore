import React from 'react'
import { useState } from 'react'
import "./signup.css"
import "bootstrap/dist/css/bootstrap.min.css"

const Signup = () => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [othername, setOthername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpwd, setConfirmpwd] = useState('')
  
const Submit = async(ev) =>{
  ev.preventDefault()
  const response = await fetch('http://localhost:5000/api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      firstname: firstname,
      lastname: lastname,
      othername: othername,
      email: email,
      password: password,
      // confirmpwd: confirmpwd
    })
  })
 
  if(password == confirmpwd) {
    window.location.href = "/signin"
    return false;
  }
  else{
    if (password != confirmpwd) {
          
              alert ("Password must match!")
          
      }
  }

  if(response.status === 201) {
    alert("Registration Successful")
    window.location.href = '/signin'
  } else {
    alert("Registration Failed")
  }
}
  return (
    <div className='containerr'>
      <div className='container-fluid d-flex justify-content-center align-items-center align-self-center' style={{ position: 'absolute', top: '50%', left: '0px', transform: 'translate(0,-50%)', }}>
        <form onSubmit={Submit} className='d-flex flex-column align-items-center mt-5' style={{ width: "40%", border: '2px solid white', padding: '20px' }}>
          <h3 style={{ textAlign: 'center', color: '#ffffff' }}>Sign Up</h3>
          <div className="input-group mb-3 ">
            <span className="input-group-text" id="basic-addon1" style={{ height: '100%' }}>Firstname</span>
            <input type="text" name="firstname" id="firstname" placeholder='Firstname' value={firstname} onChange={(ev) => setFirstname(ev.target.value)} />
          </div>

          <div className="input-group mb-3 " style={{ width: '100%' }}>
            <span className="input-group-text" id="basic-addon1" style={{ height: '100%' }}>Lastname</span>
            <input type="text" name="lastname" id="lastname" placeholder='Lastname' value= {lastname} onChange={(ev) => setLastname(ev.target.value)}  />
          </div>

          <div className="input-group mb-3 ">
            <span className="input-group-text" id="basic-addon1" style={{ height: '100%' }}>Othername</span>
            <input type="text" name="othername" id="othername" placeholder='Othername' value={othername} onChange={(ev) => setOthername(ev.target.value)} />
          </div>

          <div className="input-group mb-3 " style={{ height: '100%' }}>
            <span className="input-group-text" id="basic-addon1" >Email</span>
            <input type="email" name="email" id="email" placeholder='Email' value={email} onChange={(ev) => setEmail(ev.target.value)} />
          </div>

          <div style={{ width: '100%' }}>
            <div className="input-group mb-3 ">
              <span className="input-group-text" id="basic-addon1" style={{ height: '100%' }}>Password</span>
              <input type="password" name="password" id="password" placeholder='********' value={password} onChange={(ev) => setPassword(ev.target.value)} />
            </div>
          </div>
          <div style={{ width: '100%' }}>
            <div className="input-group mb-3 ">
              <span className="input-group-text" id="basic-addon1" style={{ height: '100%' }}>Confirm Password</span>
              <input type="password" name="confirmpwd" id="confirmpwd" placeholder="*******" value={confirmpwd} onChange={(ev) => setConfirmpwd(ev.target.value)} required />
            </div>
          </div>

          <button className='' type='submit' style={{ backgroundColor: "green", padding: '0.5rem 2rem', border: 'none', color: 'white', fontWeight: 'bold' }}>Sign Up</button>
        </form>
      </div>
    </div>

  )
}

export default Signup