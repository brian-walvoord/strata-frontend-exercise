interface UserDetails {
  username: string;
  profileImage: string;
  score: number;
}

interface SelectedUser {
  selectedUser: UserDetails;
  setSelectedUser: Function;
}

interface Props {
  selectedUser: UserDetails;
  setSelectedUser: Function;
  favorites: Favorites;
  setFavorites: Function;
  leaderboard: LeaderboardData;
  setLeaderboard: Function;
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

type Favorites = {
  user: boolean;
}