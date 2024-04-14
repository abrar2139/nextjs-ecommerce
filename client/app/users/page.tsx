"use client"
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';


interface UsersProps{
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    phone:string;
    avatar:string;
    _id:string;
}
const Users = () => {
    const router = useRouter()
    const [users, setUsers] = useState([])
    const fetchUsers = async () =>{
        // const res = await fetch("http://localhost:5000/api/v1/users")
        // const data = await res.json()
        const data = await axios.get("http://localhost:5000/api/v1/users")
        setUsers(data.data.data)
        console.log(data)
     }
     const deleteUser = async (id:string) =>{
     await axios.delete(`http://localhost:5000/api/v1/users/${id}`)
     toast.success("User deleted successfully")
     const singleUser = users.filter((user:UsersProps)=>user._id !==id)
     setUsers(singleUser)
     }
     
     useEffect(()=>{
        fetchUsers()
     },[])

  return (
    <>
            <div className="users mt-10">
            <div className='flex justify-end '>
        <button onClick={()=>router.push("/")} className='mr-5 mb-1 bg-indigo-600 text-white rounded-md py-1 px-2'>Add User</button>
    </div>
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            FirstName
                        </th>
                        <th scope="col" className="px-6 py-3">
                            LastName
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Phone
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Profile
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                     users.map((user:UsersProps) =>{
        
                        return(
        
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {user.firstName}
                        </th>
                        <td className="px-6 py-4">
                            {user.lastName}
                        </td>
                        <td className="px-6 py-4">
                            {user.email}
                        </td>
                        <td className="px-6 py-4">
                            {user.phone}
                        </td>
                        <td className="px-6 py-4">
                            <img className="h-16 w-16 rounded-full " src={user.avatar} alt="" />
                        </td>
                        <td className="px-6 py-4">
                           <button onClick={()=>deleteUser(user._id)} className='bg-red-600 text-white p-1 rounded-lg'>Delete</button>
                           <Link className='ml-3' href={`/users/${user._id}`}>Edit</Link>
                        </td>
                        
                    </tr>
                        
                        )
                     })
        }
                 
                    
                </tbody>
            </table>
        </div>
        
              </div>
    </>
  )
}

export default Users
