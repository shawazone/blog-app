// import ourPic from "../public/ourPic.svg";
// import Image from "next/image";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const HomePage = async () => {
  try {
    const allUsers = await prisma.user.findMany();
    console.log(allUsers);
  } catch (error) {
    console.error('Error fetching records:', error);
  } 

    return (
      <div className=" bg-center h-screen overflow-hidden" >
      <p className="text-red-500">uwu</p>
         
    </div>
    
    );
  };
  
  export default HomePage;
  