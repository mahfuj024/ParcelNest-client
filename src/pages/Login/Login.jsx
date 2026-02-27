// import React, { useContext } from 'react'

import { Link, useLocation, useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
// import { AuthContext } from '../../context/AuthContext'
// import Swal from 'sweetalert2'
import Logo from '../../components/Shared/Logo'
import LoginWithGoogle from '../LoginWithGoogle/LoginWithGoogle'

function Login() {

  const { register, handleSubmit } = useForm()
  // const { signIn } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  // after login redirect back
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const email = data?.email
    const password = data?.password

    console.log(data)


    // signIn(email, password)
    //   .then((userCredential) => {
    //     const user = userCredential?.user
    //     if (user) {
    //       Swal.fire({
    //         position: "top-end",
    //         icon: "success",
    //         title: "Login successful",
    //         showConfirmButton: false,
    //         timer: 1500
    //       });
    //       navigate(from, { replace: true })
    //     }
    //   })
    //   .catch(error => {
    //     const errorMessage = error?.message
    //     if (errorMessage) {
    //       Swal.fire({
    //         position: "top-end",
    //         icon: "error",
    //         title: "Invalid email or password ❌",
    //         showConfirmButton: false,
    //         timer: 1500
    //       });
    //     }
    //   })
  }

  return (
    <div className='p-2 md:p-4 lg:p-8 min-h-screen'>
      <Logo></Logo>
      <div className="w-90 md:w-150 mt-6 md:mt-8 lg:mt-12 mx-auto max-w-md p-5 md:p-8 space-y-3 rounded-xl bg-white dark:text-gray-800">
        <h1 className="text-2xl md:text-[25px] lg:text-3xl font-bold">Welcome Back</h1>
        <p className='text-base md:text-bse lg:text-lg font-semibold'>Login with ParcelNest</p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          <div className="space-y-1 text-sm mt-8">
            <label htmlFor="email" className="block dark:text-gray-600 font-semibold">Email</label>
            <input {...register("email", { required: true })} type="email" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 outline-1 outline-stone-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-600 font-semibold">Password</label>
            <input {...register("password", { required: true })} type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 outline-1 outline-stone-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />

          </div>
          <button className="block w-full p-3 text-center rounded-sm font-bold bg-primary cursor-pointer">Log in</button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="px-3 text-sm dark:text-gray-600">or</p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <LoginWithGoogle name="Login"></LoginWithGoogle>
        </div>
        <p className="text-base text-center mt-4 sm:px-6 dark:text-gray-600">Don't have an account?
          <Link state={{ from }} to="/register" rel="noopener noreferrer" href="#" className="underline cursor-pointer dark:text-gray-800 hover:text-blue-500">Register</Link>
        </p>
      </div>
    </div>
  )
}

export default Login