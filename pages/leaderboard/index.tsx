import { FC, useState, useEffect } from "react"
import Link from "next/link"

const Leaderboard: FC<SelectedUser> = (props): JSX.Element => {
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
        <Link className="cursor-pointer flex w-full h-30 ring-1 ring-black justify-center items-center space-x-6 space-y-3 bg-gray-200 hover:bg-gray-300" key={index} href={`/profile/${user.username}`} onClick={() => props.setSelectedUser(user)}>
          <p className="w-10">{user.score}</p>
          <img className="h-20 w-20 !my-2 rounded-full" src={user.profileImage}></img>
          <p className="w-20 !my-0">{user.username}</p>
          <p className="w-15 !my-0">Liked?</p>
        </Link>
      )
    })
  }

  return (
    <>
      <div className="w-1/2 shadow-2xl flex flex-col mt-10 items-center justify-center mx-auto text-black">
        {leaderboard.leaderboard && generateLeaderboard()}
      </div>
    </>)

}


export default Leaderboard