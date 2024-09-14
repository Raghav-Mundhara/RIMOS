import React , {useState} from 'react'
import TextField from '../components/TextField'
import Button from '../components/Button'

function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className='h-screen flex justify-center items-center'>
        <div>
            <div className='text-xl  text-white flex justify-center'>
                Register for an account
            </div>
            <TextField type='text' placeholder='First Name' onChange={(e) =>{
                setFirstName(e.target.value)
            }}/>
            <TextField type='text' placeholder='Last Name' onChange={(e) =>{
                setLastName(e.target.value)
            }}/>
            <TextField type='email' placeholder='Email' onChange={(e) =>{
                setEmail(e.target.value)
            }}/>
            <TextField type='password' placeholder='Password' onChange={(e) =>{
                setPassword(e.target.value)
            }}/>
            <TextField type='password' placeholder='Confirm Password' onChange={(e) =>{
                setConfirmPassword(e.target.value)
            }}/>
            <Button title="Register" onClick={() => alert('Registered!')}/>
        </div>
    </div>
  )
}

export default Register