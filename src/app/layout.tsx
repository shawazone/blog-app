import Navbar from '@/components/navbar/Navbar';
import '../styles/globals.css'
import getCurrrentUSer  from '@/app/actions/getCurrentUser';
import { SessionProvider } from 'next-auth/react';
import NextAuthSessionProvider from './providers/sessionProvider';
export const metadata = {
  title: "my blog",
  description: "Generated by Next.js",
};

export default  async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  const currentUser = await getCurrrentUSer()
  return (
    <html lang="en">

     <NextAuthSessionProvider>
      <body>
       <Navbar  currentUser={currentUser}/>
        {children}
      </body>
      </NextAuthSessionProvider>

      
    </html>
  );
}