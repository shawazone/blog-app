'use client'
// import ourPic from "../public/ourPic.svg";
// import Image from "next/image";

import { signIn } from "next-auth/react";


const HomePage =  () => {
 
   



    return (
      <div className=" bg-center h-screen overflow-hidden" >
      <p className="text-red-500">uwu</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>{signIn}}>
        sign in
      </button>
   
    </div>
    
    );
  };
  
  export default HomePage;
  