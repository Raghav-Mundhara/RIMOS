import { useState } from 'react'
import TextField from '../components/TextField';
import Button from '../components/Button';
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className='h-screen flex justify-center items-center'>
            <div>
                <div>
                    <div className='text-xl  text-white flex justify-center'>
                        Login to your account
                    </div>
                </div>
                <TextField type='text' placeholder='username' onChange={(e) => setUsername(e.target.value)} />
                <TextField type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                <div className='flex justify-center'>
                    <div>
                        <Button title="Login" onClick={() =>{
                            alert(`Username: ${username} Password: ${password}`)
                        }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login