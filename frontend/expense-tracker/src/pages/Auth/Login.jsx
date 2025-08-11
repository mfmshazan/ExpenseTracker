import React, { useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    return (
        <AuthLayout>
            <div className='lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center'>
                <h3 className='text-xl font-semibold text-black '>Welcome </h3>
                <p className='text-xs text-size-700 mt-[5px] mb-6'>Please enter the details to login</p>
            </div>

            <form onSubmit={handleLogin}>
                <Input
                    value = {email}
                    onChange = {({target}) => setEmail(target.value)}
                    label = "Email Address"
                    placeholder = "shazan@example.com"
                    type = "text"
                />
            </form>
        </AuthLayout>


    )
}

export default Login
