import { FC } from "react"
import { useState, useEffect } from "react";



const Leaderboard: FC = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardData>({ leaderboard: [] });

  useEffect(() => {
    if (leaderboard.leaderboard) {
      getLeaderboard();
    }
    const interval = setInterval(() => {
      getLeaderboard();
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  const getLeaderboard = () => {
    fetch("http://localhost:3000/api/leaderboard")
      .then(res => res.json())
      .then(res => setLeaderboard(res))
  }


  const generateLeaderboard = () => {
    const sortedArr = leaderboard.leaderboard.sort((a, b) => b.score - a.score);
    return sortedArr.map((user, index) => {
      return (
        <a className="flex w-50% space-x-3" key={index} href={`/profile/${user.username}`}>
          <p className="w-10">{user.score}</p>
          <img className="h-6 w-6" src={user.profileImage}></img>
          <p className="w-20">{user.username}</p>
          <p className="w-10">Liked?</p>
        </a>
      )
    })
  }

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center text-black">
        {leaderboard.leaderboard && generateLeaderboard()}
      </div>
    </>)

}


export default Leaderboard