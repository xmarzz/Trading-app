import React,{useState} from 'react'

const Login = () => {

    const [auth,setAuth] = useState(false)

    const handleAuth = () => {
        setAuth(!auth)
    }


  return (
    <div>
      {auth ? <h1>Welcome</h1> : <h1>Please Login</h1>}
      <button onClick={handleAuth}>Login</button>
    </div>
  )
}

export default Login
