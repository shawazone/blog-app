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
            
            
            <div>   
                 {session?(
                  <div> welcome :{currentUser?.name},{session?.user?.name}</div>
             
 
               ):
               (<div>you are not signed in</div>)
               }</div>

            <div className='flex gap-4'>
            <Link href='/'>Home</Link>
            <Link href='/create'>Create</Link>
            {currentUser ? <button onClick={() => signOut()}>Sign out</button> : <Link href='/login'>sign in</Link>}
            <button onClick={() => signOut()}>Sign out</button> 
            </div>
        </nav>
    </header>
  )
}