import React, { useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/Input';
import { Link } from 'react-router-dom'
import { validEmail } from '../../utils/helper';


const Login = () => {
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    //Handle Login form
    const handleLogin = async (e) => { 
        e.preventDefault();

        if(!ful)
        if(!validEmail(email)){
            setError("Please enter a valid email");
            return;
        }

        if(!(password)){
            setError("Please enter the correct password");
            return;
        }

        setError("")
    }

    return (
        <AuthLayout>
            <div className='lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center'>
                <h3 className='text-xl font-semibold text-black '>Welcome </h3>
                <p className='text-xs text-size-700 mt-[5px] mb-6'>Please enter the details to login</p>


                <form onSubmit={handleLogin}>
                    <Input
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                        label="Email Address"
                        placeholder="shazan@example.com"
                        type="text"
                    />

                    <Input
                    value = {password}
                    onChange = {({target}) => setPassword(target.value)}
                    label = "Password"
                    placeholder = "Minimum 8 characters"
                    type = "password"
                />

                {error && <p className='text-red-500 font.sm pb-3 text-sm'>{error}</p>}

                <button type='submit' className='btn-primary'>
                    LOGIN
                </button>
            <p className='text-sm'> Don't you have an account ? 
                <Link to='/signup' className='font-medium text-primary underline ml-2 hover:text-violet-700'>
                     SignUp
                </Link>
                </p>
                </form>
            </div>
        </AuthLayout>


    )
}

export default Login
