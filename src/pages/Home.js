import React, {useEffect, useState} from "react";
import {genresService, moviesService} from "../services";
import {FilmList} from "../component";
import style from "./Home.module.css"
import {useNavigate} from "react-router";
import {toast} from 'react-toastify';

const Pagination = ({currentPage, children, total_pages, onPrevPage, onNextPage}) => {
    const handlePrevClick = () => {
        if (currentPage - 1 >0) {
            onPrevPage && onPrevPage(currentPage - 1)
        }

    }
    const handleNextClick = () => {
        if (currentPage + 1 <= total_pages) {
            onNextPage && onNextPage(currentPage +1)
        }
        console.log("work" +currentPage)
    }
    return (
        <div>

            <div>
                <button onClick={handlePrevClick}>prevPage</button>
                <span>{currentPage}of {total_pages}</span>
                <button onClick={handleNextClick}>nextPage</button>
            </div>
            {children}
        </div>

    )
}

export const Home = () => {

    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(null)
    const [moviesData, setMoviesdata] = useState(null)

    const getMovies = async (params) => {
        try {
            const {results, page, total_pages, total_results} = await moviesService.getMovies(params)
            toast.success("Movies are loaded", {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                }
            )
            setMoviesdata({page, total_pages})
            return results

        } catch
            (e) {

            console.log(e)
        }
    }
    const getGenres = async () => {
        try {

            const {genres} = await genresService.getGenres()
            return genres
        } catch (e) {
            console.log(e)
        }
    }
// genre_ids:
    const fetchMovieWithGenres = async (params) => {
        try {
            setIsLoading(true)
            const promise = [getMovies(params), getGenres()]
            const [movies, genres] = await Promise.all(promise)
            const MergeMovieWithGenre = movies.map((movie) => {
                const movieGenresList = movie.genre_ids.map((genre) => genres.find((el) => el.id === genre))
                return {
                    ...movie,
                    movieGenresList
                }

            })
            setMovies(MergeMovieWithGenre)
        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)
        }
    }
    const navigate = useNavigate()
    useEffect(() => {
        fetchMovieWithGenres()
    }, [])
    const onMovieClick = (item) => {
        navigate(`/movie/${item.id}`)
    }

    const renderIsLoading = () => {
        return (
            <div className={style.loading}>is Loading...</div>
        )
    }
    const handlePage = (page) => {
        fetchMovieWithGenres({page})


    }
    return (
        <div>
            {isLoading || isLoading === null ? renderIsLoading() : (
                <Pagination currentPage={moviesData.page} total_pages={moviesData.total_pages} onNextPage={handlePage}
                            onPrevPage={handlePage}>

                    <FilmList onMovieClick={onMovieClick} items={movies}/>
                </Pagination>

            )
            }

        </div>
    );
}
