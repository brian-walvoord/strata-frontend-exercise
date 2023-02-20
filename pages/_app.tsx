import Navbar from '../components/navbar';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [selectedUser, setSelectedUser] = useState<object>({});
  const [favorites, setFavorites] = useState<object>({});
  const [leaderboard, setLeaderboard] = useState<LeaderboardData>();

  return (
    <div className='bg-white min-h-screen'>
      <Navbar />
      <Component {...pageProps}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        favorites={favorites}
        setFavorites={setFavorites}
        leaderboard={leaderboard}
        setLeaderboard={setLeaderboard}
      />
    </div>)
}

export default MyApp;
