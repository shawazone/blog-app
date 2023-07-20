"use client";

import InputFeild from "@/components/InputFeild";
import React from "react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";


interface initialStatePorps {

  email: string;
  password: string;
}

const initialState: initialStatePorps = {
 
  email: "",
  password: "",
};

const register = () => {
  const router = useRouter();
  const [state, setState] = useState(initialState);

  const handleChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

  };

  return (
    <form className="text-center" onSubmit={onSubmit}>
      <div className="flex flex-col justify-center h-[450px] w-[350px] mx-auto gap-2">
        log in
    
        <InputFeild
          placeholder="Email"
          name="email"
          id="email"
          type="email"
          onChange={handleChange}
          value={state.email}
        />
        <InputFeild
          placeholder="Password"
          name="password"
          id="password"
          type="passowrd"
          onChange={handleChange}
          value={state.password}
        />
        <button type="submit" className="bg-black text-gray-100">
          submit{" "}
        </button>     
      </div>
      <div>
        <div> Don't you hava an account ? <Link href="/register" className="text-blue-600">register</Link></div>
      </div>
    </form>
  );
};

export default register;
