import React,{useState} from 'react'

const Login = () => {

    const [auth,setAuth] = useState(false)
    const [formData, setFormData] = useState({
      email:"",
      password: "",
      confirmPwd:"",
    })

    const [errors, setErrors] = useState({})

    const {email, password, confirmPwd} = formData 

    const handleAuth = () => {
        setAuth(!auth)
    }

    const onChange=(e)=>{
        setFormData({...formData,[e.target.name]: e.target.value})
      
    }
  
    const onSubmit=(e)=>{
      e.preventDefault()
      console.log("clicked")
      if(password!==confirmPwd)
      {
        setErrors({confirmPwd : "Password does not match"})
        console.log('password does not match')
      }
      else{
          console.log(formData.email, formData.password, formData.confirmPwd)
      }
    }


  return (
    <div>
      {auth ? <div>
          <form>
              <label>Name : </label><input type="text" placeholder='name'/>
              <label>password : </label><input type="password" placeholder='name' />
              <button>Login</button>
              <div onClick={handleAuth}>go to sign up page</div>
          </form>
         </div> : <div> 
          <form onSubmit={onSubmit}>
            <label>email : </label><input type='text' name='email' placeholder='name' onChange={onChange} required/>
            <label>password : </label><input type='password' name='password' placeholder='password' onChange={onChange} required/>
            <label>confirm password :</label><input type='password' name='confirmPwd' placeholder='confirm password' onChange={onChange} required/>
            <button>Sign up</button>
             <div onClick={handleAuth}>Go to Login page</div>
          </form>
         </div> }
    
    </div>
  )
}

export default Login
