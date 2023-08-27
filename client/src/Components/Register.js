
import {useState} from "react"
import axios from "axios"

function Register() {

  const [name , setname] = useState("")
  const [email , setemail] = useState("")
  const [password , setpassword] = useState("")

  async function Submit(e){
    e.preventDefault()

    await axios.post("http://localhost:9000/admin/register",{name , email , password})
    .then(result => console.log(result))
    .catch(err=> console.log(err))
  }

  return (
    <div className="App">
      <div>
        <form action="POST">
        <div>
        <input type='text' placeholder='Full name' onChange={(e)=>{
          setname(e.target.value)
        }}/>
        </div>
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
  );
}


export default Register;