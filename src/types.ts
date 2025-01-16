export interface User {
  name: string;
  email: string;
  password: string;
  phone: string;
  profession: string;
}

export interface Movie {
  _id: string;
  title: string;
  genre: string;
  language: string;
  voting: number;
  poster: string;
  pageViews: number;
  director: string[];
  stars: string[];
  releasedDate: number;
  totalVoted: number;
}