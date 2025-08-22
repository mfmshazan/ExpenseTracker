import React, { useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import Input from '../../components/Inputs/Input'
import ProfilePhoto from '../../components/inputs/ProfilePhoto'

const SignUp = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fullName, setFullName] = useState("");
  const [profileImage, setProfileImage] = useState(null)

  const handleSignUp = async (e) => { }

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
        </form>
      </div>
    </AuthLayout>


  )
}

export default SignUp
