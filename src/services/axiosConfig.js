import axios from "axios";
export const AXIOS = axios.create({
  baseURL: 'https://api.themoviedb.org/3',

  headers: {Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxM2JjOTQzN2VjYzNlZDMyMDM1YTU4ZjBjNDk5YTBjZCIsInN1YiI6IjYyM2RjY2UwMjExY2U1MDA1YzllNTc1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wMOUF_dQ-YIc3MV4TTx3JkagLerm6DNg71U2T4DPN00"}
});
