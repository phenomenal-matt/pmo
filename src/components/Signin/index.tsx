'use client'
import { FC, memo } from 'react'
import Image from 'next/image'

import Input from '@/shared/Input'
import { SignInType } from './types'
import Link from 'next/link'


const Signin: FC<SignInType> = ({ email, password, handleOnChangeEmail, handleOnSubmit, handleOnChangePassword, isAdmin = true }) => {
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
          <div className="mt-2">
            <Input onChange={handleOnChangeEmail} value={email as string} id="username" name="username" type="text" autoComplete="username" placeholder='Username' required className="block w-full rounded-md border-0 py-1.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div className="text-sm">
              <Link href="/forgot-password" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</Link>
            </div>
          </div>
          <div className="mt-2">
            <Input id="password" onChange={handleOnChangePassword} value={password as string} name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div>
          <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        </div>
        {isAdmin &&
          <div className="text-sm text-indigo-600">
            Are you a superadmin? <Link href="/admin/signin" className="font-semibold text-indigo-600 hover:text-indigo-500">Sign in</Link>
          </div>
        }
      </form>
    </div>
  )
}
const SigninComponent = (memo(Signin))
export default SigninComponent 