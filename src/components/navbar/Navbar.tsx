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
  
}