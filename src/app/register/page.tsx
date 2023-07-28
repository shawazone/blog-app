'use client'
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useSession } from "next-auth/react";
import { redirect } from 'next/navigation';

// import bcrypt from 'bcrypt'
interface FormValues {
  username: string;
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const initialValues: FormValues = {
  username: '',
  email: '',
  password: '',
};

// const submit= async (values: any) => {
// const response = await
//     fetch('http://localhost:3000/api/user', {
//     method: 'POST',
//         body: JSON.stringify({ ...values}),
//        headers : {
//          'Content-type':'application/json',
//        }, 
//     });
//     const data = await response.json()
//   };


 


const MyForm: React.FC = () => {
  const {data:session}= useSession()
 if(session){
  redirect('/');
 }


    const handleSubmit = async (values: FormValues) => {
      
      // const hashedPassword = await bcrypt.hash(values.password, 10);


      // const payload = {
      //   ...values,
      //   password: hashedPassword,
      // };

      
    const response = await
    fetch('http://localhost:3000/api/register', {
    method: 'POST',
        body: JSON.stringify(values),
       headers : {
         'Content-type':'application/json',
       }, 
    });
   
    // const data = await response.json()
    //  console.log('this is the response :',response)
    window.location.href = "/login";
     
  }

//  const  makeApiCall = async () => {
//   await fetch('/api/user',{
//     method : 'POST',
//     body: JSON.stringify({hello : 'world'}),

//   })
//  }



  return (
    <div className="max-w-md mx-auto">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <Field
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="username"
              name="username"
            />
            <ErrorMessage name="username" component="div" className="text-red-500 text-xs italic" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <Field
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              id="email"
              name="email"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-xs italic" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <Field
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              id="password"
              name="password"
            />
            <ErrorMessage name="password" component="div" className="text-red-500 text-xs italic" />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
      <div>
        {/* <button onClick={makeApiCall}>make uwu API call</button> */}
      </div>
    </div>
  );
};

export default MyForm;
