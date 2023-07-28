'use client'
import { useSession } from "next-auth/react";
import getCurrentUser from '@/app/actions/getCurrentUser'
import { SafeUser } from '@/types/types'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

interface UserMenuProps {
    currentUser: SafeUser | null
  }
  
  export default function Navbar({currentUser}:UserMenuProps) {
    
    const {data: session}= useSession();
 console.log("the session is :" ,session);
  return (
    <header>
         <nav className='bg-gray-200 flex justify-between px-4 py-6 shadow-xl'>
            {/* <div>{currentUser?.name}.</div> */}
            <div>   
                 {session?(
               <Link
                 href="javascript:void(0)"
                 className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary    text-black hover:bg-red-300 hover:rounded-lg  hover:border-transparent hover:border-1
                  hover:border-red-700"
                 onClick={() => signOut()}
               >
                 sign out
               </Link>
 
               ):
               (<div>uwuuwuwu</div>)
               }</div>

            <div className='flex gap-4'>
            <Link href='/'>Home</Link>
            <Link href='/create'>Create</Link>
            {currentUser ? <button onClick={() => signOut()}>Sign out</button> : <Link href='/register'>Register</Link>}
            <button onClick={() => signOut()}>Sign out</button>
            </div>
        </nav>
    </header>
  )
}