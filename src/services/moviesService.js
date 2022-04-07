import {AXIOS} from "./axiosConfig";

class MoviesService{
   async getMovies(params){
       const {data}= await AXIOS.get("/discover/movie",{
           params
       })

      return  data
    }
   async getMovieDetailsById(movie_id){
       const {data}=await AXIOS.get(`/movie/${movie_id}`)
        return  data
    }
    async searchMovieByTitle(params){
       const {data}=await AXIOS.get("/search/company",{
           params
       })
        return data}
}

export const moviesService=new MoviesService()
