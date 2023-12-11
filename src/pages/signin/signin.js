import React from 'react'
import './signin.css'
import { useState } from 'react'

const Signin = () => {

    const [email, setEmail] = useState('')
    const [passWord, setPassWord] = useState('')

    const Submit = async(ev) =>{
        ev.preventDefault()
        const response = await fetch('http://localhost:5000/api/login', {
          method: 'POST',
          // credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            password: passWord,
           
          })
        })

        if(response.status === 201) {
          localStorage.setItem("user", response.body)
          alert("Login Successful")
          window.location.href = '/home'
        } else {
          alert("Registration Failed")
        }
      }

    return (
        <div className='containerr'>
            <div className='container-fluid d-flex justify-content-center align-items-center align-self-center' style={{ position: 'absolute', top: '50%', left: '0px', transform: 'translate(0,-50%)', }}>

                <form onSubmit={Submit} className='d-flex flex-column align-items-center ' style={{ width: "40%", border: '2px solid white', padding: '20px' }}>

                    <h3 style={{ textAlign: 'center', color:'#ffffff' }}>Sign In</h3>


                    <div className="input-group mb-3 ">
                        <span className="input-group-text" id="basic-addon1" style={{ height: '100%' }}>Email</span>
                        <input type="email" className="form-control" placeholder="Email" aria-label="Username"  name='eMail' value={email} onChange={(ev) => setEmail(ev.target.value)}/>
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ height: '100%' }}>Password</span>
                        <input type="password" className="form-control" placeholder="*******" aria-label="Username"  name='passWord' value={passWord} onChange={(ev) => setPassWord(ev.target.value)}/>
                    </div>
                    <button className='bg-primary' type='submit' style={{ padding: '0.5rem 2rem', border: 'none', color: 'white', fontWeight: 'bold' }}>Submit</button>

                    <p style={{ marginTop: '20px', fontWeight: 'bold', color: 'red', display: 'none' }}>You are not registered, please SignUp to use our service</p>

                </form>

            </div>
        </div>

    )
}

export default Signin