interface UserDetails {
  username: string;
  profileImage: string;
  score: number;
}

interface SelectedUser {
  selectedUser: UserDetails,
  setSelectedUser: Function
}

type LeaderboardData = {
  leaderboard: UserDetails[];
};

type ProfileData = {
  username: string;
  bio: string;
  age: number;
  twitter: string;
  email: string;
  birthday: string;
};