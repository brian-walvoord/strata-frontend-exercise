import { FC } from "react"
import Link from "next/link";


const User: FC<SelectedUser> = (props) => {

  return (
    <>
      <div className="w-full h-80 flex flex-col items-center justify-center space-y-12 mt-20 text-black">
        <h1 className="text-4xl font-bold">{props.selectedUser.username}</h1>
        <img className="h-40 w-40 rounded-full" src={props.selectedUser.profileImage}></img>
        <button className="py-2 px-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">Like</button>
        <Link href="/leaderboard">
          <button className="py-2 px-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">Back</button>
        </Link>
      </div>
    </>
  )

}


export default User