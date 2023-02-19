import { FC, useEffect } from "react"
import Link from "next/link"

const Leaderboard: FC<Props> = (props): JSX.Element => {

  useEffect(() => {
    if (!props.leaderboard) {
      getLeaderboard();
    }
    const interval = setInterval(() => {
      getLeaderboard();
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  const getLeaderboard = () => {
    fetch(`${process.env.REACT_APP_API_URL}/api/leaderboard`)
      .then(res => res.json())
      .then(res => props.setLeaderboard(res))
  }


  const generateLeaderboard = () => {
    const sortedArr = props.leaderboard.leaderboard.sort((a, b) => b.score - a.score);
    return sortedArr.map((user, index) => {
      return (
        <Link className="cursor-pointer flex w-full px-5 h-30 ring-1 ring-gray-50 ring-black justify-center items-center space-x-10 space-y-3 bg-gray-200 hover:bg-gray-300" key={index} href={`/profile/${user.username}`} onClick={() => props.setSelectedUser(user)}>
          <p className="w-10 text-xl">{user.score}</p>
          <img className="h-20 w-20 !my-2 rounded-full" src={user.profileImage}></img>
          <p className="w-24 !my-0 text-xl">{user.username}</p>
          <div className={props.favorites[user.username as keyof Favorites] ? "!my-0" : "invisible !my-0"}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
          </div>
        </Link>
      )
    })
  }

  return (
    <>
      <h1 className="flex w-full justify-center text-black text-4xl">Leaderboard</h1>
      <div className="w-1/2 min-w-fit shadow-2xl flex flex-col mt-5 items-center justify-center mx-auto text-black">
        {props.leaderboard && generateLeaderboard()}
      </div>
    </>)

}


export default Leaderboard