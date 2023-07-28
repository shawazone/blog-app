import { PrismaClient, User } from '@prisma/client';
import bcrypt from 'bcrypt'

const prisma = new PrismaClient();

export async function GET(request: Request) {
 return new Response('hi')
  //   const { body } = req;
  //   const userData: User = JSON.parse(body);

  //   try {
  //     const user = await prisma.user.create({ data: userData });
  //     res.json(user);
  //   } catch (error) {
  //     res.status(500).json({ error: 'An error occurred while creating the movie.' });
  //   }
  // } else {
  //   res.status(405).json({ error: 'Method not allowed' });
  // }
}

export async function POST(req: Request){
   const body = await req.json()
   const res =new Response()
  const hashedPassword = await bcrypt.hash(body.password, 10);


  const userInfo= {username:body.username, email:body.email, password:hashedPassword}
  // console.log(user)
    //  const userData: User = JSON.parse(body);

    try {
      const user = await prisma.user.create({ data: 
        userInfo
      
        // {username:  body.username, 
        // email:  body.email,
        // password : body.password
        // }
      
       });
      return res.ok
    } catch (error) {
      res.status
    }


  // console.log(body)
// console.log('hello');
  return 
}



// import { NextResponse } from "next/server";
// import bcrypt from "bcrypt";

// import prisma from '../../lib/prismadb'

// export async function POST(
//   request: Request, 
// ) {
//   const body = await request.json();
//   const { 
//     email,
//     name,
//     password,
//    } = body;

//    const hashedPassword = await bcrypt.hash(password, 12);

//    const user = await prisma.user.create({
//     data: {
//       email,
//       name,
//       hashedPassword,
//     }
//   });

//   return NextResponse.json(user);
// }