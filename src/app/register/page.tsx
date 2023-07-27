"use client";
import InputFeild from "@/components/InputFeild";
import React from "react";
import axios from "axios";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";


interface initialStatePorps {
  name: string;
  email: string;
  password: string;
}

const initialState: initialStatePorps = {
  name: "",
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

    axios
      .post("/api/register", state)
      .then(() => {
        router.refresh();
      })
      .then(() => {
        setTimeout(() => {
          router.push("/login");
        }, 2500);
      })
      .catch((err: any) => {})
      .finally(() => {});
  };

  return (
    <form className="text-center" onSubmit={onSubmit}>
      <div className="flex flex-col justify-center h-[450px] w-[350px] mx-auto gap-2">
        register
        <InputFeild
          placeholder="Name"
          name="name"
          id="name"
          type="text"
          onChange={handleChange}
          value={state.name}
        />
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
        <div> Do you hava an account ? <Link href="/login" className="text-blue-600">sign in</Link></div>
      </div>
    </form>
  );
};

export default register;
