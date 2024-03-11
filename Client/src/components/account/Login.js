import React,{useEffect, useState} from 'react'
import {API} from '../../Service/api'

const loginInitialValues={
  name: '',
  password: ''
}

const signupInitialValues={
  email : '',
  password: '',
  confirmPwd:''
}

const Login = () => {

    const [auth,setAuth] = useState(false)

    const [signup, setSignup] = useState(signupInitialValues)

    const [error, showError] = useState('')

    const handleAuth = () => {
        setAuth(!auth)
    }

    useEffect(()=>{
      showError(false)
    },[])
    
    const onChange=(e)=>{ 
      setSignup({...signup,[e.target.name]: e.target.value })  
    }
    
    // const onSubmit=(e)=>{
    //   e.preventDefault();
    //   if(signup.password !== signup.confirmPwd){
    //     showError({confirmPassword : 'passwords do not match'})
    //     console.log('password do not match')
    //     console.log(error)
    //   }
    //   else{
    //     console.log(signup.name,signup.password,signup.confirmPassword)
    //   }
    // }

    const handleSignup=async()=>{
        let response = await API.userSignup(signup)
        if(response.isSuccess){
          showError('')
          setSignup(signupInitialValues)
        }
        else{
          console.log(error)
          showError('something went wrong!')
        }
    }

  return (
    <div>
      {auth ? <div>
          <form>
              <label>email : </label><input type="text" placeholder='name'/>
              <label>password : </label><input type="password" placeholder='name' />
              <button>Login</button>
              <div onClick={handleAuth}>go to sign up page</div>
          </form>
         </div> : <div>
          <form >
            <label>email : </label><input type='text' name='email' placeholder='name' onChange={onChange} required/>
            <label>password : </label><input type='password' name='password' placeholder='password' onChange={onChange} required/>
            <label>confirm password :</label><input type='password' name='confirmPwd' placeholder='confirm password' onChange={onChange} required/>
            <button onClick={handleSignup}>Sign up</button>
             <div onClick={handleAuth}>Go to Login page</div>
          </form>
         </div> }
    </div>
  )
}

export default Login

