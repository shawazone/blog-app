import bcrypt from 'bcrypt'
import NextAuth from 'next-auth/next'
import {CredentialsProvider} from 'next-auth/providers'
import {PrismaAdapter} from "@next-auth/prisma-adapter"
