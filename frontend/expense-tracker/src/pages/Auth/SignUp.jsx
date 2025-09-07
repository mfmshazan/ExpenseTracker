import React, { useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import Input from '../../components/Inputs/Input'
import ProfilePhoto from '../../components/inputs/ProfilePhoto'
import { Link } from 'react-router-dom'
import { validEmail } from '../../utils/helper'

const SignUp = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fullName, setFullName] = useState("");
  const [profileImage, setProfileImage] = useState(null)

  const [error, setError] = useState(null);
  const handleSignUp = async (e) => { 
    e.preventDefault();

    if(!fullName){
      setError("Please enter your full name");
      return;
    }
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
        <h3 className='text-xl font-semibold text-black '>Create your account </h3>
        <p className='text-xs text-size-700 mt-[5px] mb-6'>Please enter the details to signup</p>

        <form onSubmit={handleSignUp}>
         
          <ProfilePhoto image={profileImage} setImage={setProfileImage} />
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>


            <Input
              value={fullName}
              onChange={(target) => setFullName(target.value)}
              label="Full Name"
              placeholder="Shazan"
              type='text'
            /><Input
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              label="Email Address"
              placeholder="shazan@example.com"
              type="text"
            />
            <div className='col-span-2'>
              <Input
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                label="Password"
                placeholder="Minimum 8 characters"
                type="password"
              />
            </div>
          </div>
          
                {error && <p className='text-red-500 font.sm pb-3 text-sm'>{error}</p>}

                <button type='submit' className='btn-primary'>
                    SIGNUP
                </button>
            <p className='text-sm'> Already have an account ? 
                <Link to='/login' className='font-medium text-primary underline ml-2 hover:text-violet-700'>
                     Login 
                </Link>
                </p>
        </form>
      </div>
    </AuthLayout>


  )
}

export default SignUp
