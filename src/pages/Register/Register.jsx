import { Link, useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import Logo from '../../components/Shared/Logo'
import LoginWithGoogle from '../LoginWithGoogle/LoginWithGoogle'
import Swal from 'sweetalert2'
import useAuth from '../../hooks/useAuth'
import axios from 'axios'
import { useState } from 'react'
import useAxiosPublic from '../../hooks/useAxiosPublic'

function Register() {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const { createUser, updateUserProfile } = useAuth()
  const [profilePic, setProfilePic] = useState("")
  const navigate = useNavigate()
  const axiosPublic = useAxiosPublic()

  const onSubmit = (data) => {
    const name = data?.name
    const email = data?.email
    const password = data?.password

    createUser(email, password)
      .then(async (userCredential) => {
        const user = userCredential.user
        if (user) {

          //update userInfo in database 
          const userInfo = {
            name : name,
            email: email,
            role: "user", //default role
            created_at: new Date().toISOString()
          }
          const userRes = await axiosPublic.post("/users", userInfo)

          // update user profile in firebase
          const userProfile = {
            displayName: name,
            photoURL: profilePic
          }
          updateUserProfile(userProfile)
            .then(() => {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${name} Registration successful`,
                showConfirmButton: false,
                timer: 1500
              });
              navigate("/")
            })
            .catch((error) => {
              console.log(error)
            })


        }
      })
      .catch((error) => {
        const errorMessage = error.message
        if (error) {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: `${errorMessage}`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
  }

  const handleImageUpload = async (event) => {
    try {
      const image = event.target.files[0]

      if (!image) return

      const formData = new FormData()
      formData.append("image", image)

      const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_upload_key}`

      const res = await axios.post(imageUploadUrl, formData)

      setProfilePic(res.data.data.display_url)

    } catch (error) {
      console.log("Image Upload Error:", error)
    }
  }

  return (
    <div className='p-2 md:p-4 lg:p-8 min-h-screen'>
      <Logo></Logo>
      <div className="w-90 md:w-150 mt-6 md:mt-8 lg:mt-12 mx-auto max-w-md p-5 md:p-8 space-y-3 rounded-xl bg-white dark:text-gray-800">
        <h1 className="text-2xl md:text-[25px] lg:text-3xl font-bold">Create an Account</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-1 text-sm mt-8">
            {/* name field */}
            <label htmlFor="name" className="block dark:text-gray-600 font-semibold">Name</label>
            <input {...register("name", { required: true })} type="text" name="name" id="name" placeholder="name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 outline-1 outline-stone-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
            {/* show error */}
            {errors.name && <span className='text-red-500'>Name is required</span>}
          </div>
          <div className="space-y-1 text-sm mt-8">
            {/* photo url field */}
            <label htmlFor="file" className="block dark:text-gray-600 font-semibold">Photo url</label>
            <input
              onChange={handleImageUpload}
              type="file" name="file" id="file" className="w-full px-4 py-3 rounded-md dark:border-gray-300 outline-1 outline-stone-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
          </div>
          <div className="space-y-1 text-sm">
            {/* email field */}
            <label htmlFor="email" className="block dark:text-gray-600 font-semibold">Email</label>
            <input {...register("email", { required: true })} type="email" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 outline-1 outline-stone-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
            {/* show error */}
            {errors.email && <span className='text-red-500'>Email is required</span>}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-600 font-semibold">Password</label>
            {/* password field */}
            <input {...register("password", { required: true, minLength: 6 })} type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 outline-1 outline-stone-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
            {/* show error */}
            {errors.password && <span className='text-red-500'>Password must be at least 6 characters</span>}
          </div>
          <button type='submit' className="block w-full p-3 text-center rounded-sm font-bold bg-primary cursor-pointer">Sign up</button>

        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="px-3 text-sm dark:text-gray-600">or</p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <LoginWithGoogle name="Register"></LoginWithGoogle>
        </div>
        <p className="text-base mt-4 text-center sm:px-6 dark:text-gray-600">You already have an account?
          <Link to="/login" rel="noopener noreferrer" href="#" className="underline cursor-pointer dark:text-gray-800 hover:text-blue-500">Log In</Link>
        </p>
      </div>
    </div>
  )
}

export default Register