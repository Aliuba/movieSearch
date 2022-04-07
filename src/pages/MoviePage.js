import React, {useEffect, useState} from "react";
import {useMatch, useParams} from "react-router";
import {moviesService} from "../services";
import styles from "./Home.module.css"
export const MoviePage = () => {
    const {id} = useParams();
const[movie, setMovie]=useState(null)
 const [isLoading, setIsLoading] = useState(null)
 const getMovie=async ()=>{
    try {
        setIsLoading(true)
          const data=await moviesService.getMovieDetailsById(id)
     setMovie(data)
    }catch (e){
        console.log(e)
    }finally {
        setIsLoading(false)
    }

 }
 useEffect(()=>{
     getMovie()
 }, [])
    if(isLoading||isLoading===null&&!movie){
        return <div>is loading</div>
    }

    return (
        <div>
            <div>
                <div><img className={styles.imgMovie} src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={"img"}/></div>
                <div>
                    <h1>{movie.original_title}</h1>
                    <p>{movie.genres.map((el)=><p>{el.name}</p>)} </p>

                    <p>{movie.overview}</p>
                    <h3>{movie.release_date}</h3>
                </div>

            </div>
        </div>
    );
}
