import React, {useState} from "react";
import {moviesService} from "../services";

import {FilmItem, FilmList} from "../component";
import {useNavigate} from "react-router";



export const MovieSearchPage = ({items}) => {
const [movies, setMovies] = useState([])
    const getMovies = async () => {
        try {
            const {data} = await moviesService.getMovieDetailsById()

console.log(data)
            setMovies(data)
            return data

        } catch
            (e) {
            console.log(e)
        }
    }
    const navigate = useNavigate()
    const onMovieClick = (item) => {
        navigate(`/movie/${item.id}`)

    }
    return (

        <div>


                {items.map(item=><h1 onClick={()=>onMovieClick(item)} key={item.id}>{item.name}</h1>)}


        </div>
    );
}
