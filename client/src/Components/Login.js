import React from 'react'
import {useState} from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

function Login() {


  const [email , setemail] = useState("")
  const [password , setpassword] = useState("")
  const navigate = useNavigate()

  async function Submit(e){
    e.preventDefault()

    await axios.post("http://localhost:9000/admin/login",{email , password})
    .then(result => {console.log(result)
    if(result.data == "Success"){
      navigate("/admin/login/dashboard")
    }else if(result.data == "Incorrect"){

    }
    })
    .catch(err=> console.log(err))
  }

  return (
    <div>
            <div>
        <form action="POST">
        <div>
        <input type='text' placeholder='Email' onChange={(e)=>{
          setemail(e.target.value)
        }}/>
        </div>
        <div>
        <input type='password' placeholder='Password' onChange={(e)=>{
          setpassword(e.target.value)
        }}/>
        </div>
        <div>
          <input type='submit' onClick={Submit} value="Sign Up"/>
        </div>
        </form>
        
      </div>
    </div>
  )
}

export default Login