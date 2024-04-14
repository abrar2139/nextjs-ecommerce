"use client"
import { useState } from "react";
import axios from 'axios';
import { toast } from "react-toastify";
import FileBase from "react-file-base64";
import { useParams, useRouter } from "next/navigation";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Link from "next/link";



export default function Home() {
    const [userData, setUserData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        phone:"",
        avatar:"",
    })
    const[showPassword, setShowPassword] =useState(false)
const router = useRouter()
const params = useParams()
console.log(params)
    const changeHandler = (e: any) =>{
        const name = e.target.name 
        const value= e.target.value
        setUserData({...userData,[name]: value})
        console.log(name, value)
    }
    const submitHandler = async (e:any) =>{
        e.preventDefault()
        try {
            await axios.post("http://localhost:5000/api/v1/register", userData)
            toast.success("User registered successfully")
            router.push("/login")
        } catch (error:any) {
          toast.error(error.response.data.msg)
          console.log("Error", error.response.data.msg)  
        }
    }
    
    return (
        <>
    
      
        
        <form onSubmit={submitHandler}>

        <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Register</h1>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="firstName" className="leading-7 text-sm text-gray-600">First Name</label>
            <input type="text" onChange={changeHandler} id="firstName" name="firstName" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="lastName" className="leading-7 text-sm text-gray-600">Last Name</label>
            <input type="text" onChange={changeHandler} id="lastName" name="lastName" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" onChange={changeHandler} id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
            <div className="relative">

            <input type={showPassword? "text" : "password"} onChange={changeHandler} id="password" name="password" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>


            {
             showPassword? 
             <IoMdEyeOff className="absolute top-3 right-2" onClick={() =>setShowPassword(!showPassword)}/> :
            <IoMdEye className="absolute top-3 right-2" onClick={()=>setShowPassword(!showPassword)}/>
            }
            </div>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
            <input type="text" onChange={changeHandler} id="phone" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="avatar" className="leading-7 text-sm text-gray-600">Profile</label>
           <FileBase type="file" multiple={false} onDone={({ base64 })=>setUserData({...userData, avatar: base64})}     />
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Create</button>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
        Already have an account?<Link href="/login" className="text-indigo-500">Login</Link>
        </div>
      </div>
    </div>
  </div>
</section>
        </form>

        </>
    );
}
