import Navbar from '../components/navbar'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [selectedUser, setSelectedUser] = useState<object>({});

  return (
    <div className='bg-white min-h-screen'>d
      <Navbar />
      <Component {...pageProps} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
    </div>)
}

export default MyApp
