import React, {useEffect, useState} from "react";
import styles from "./Baselayout.module.css"
import {Link} from "react-router-dom";
import {moviesService} from "../services";
import {MovieSearchPage} from "../pages/MovieSerachPage";

export const BaseLayout = ({children}) => {
    const [searchText, setSearchText] = useState("")
    const [data, setData] = useState([])

    const onFormSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = value => {
        setSearchText(value)
    }
    const searchMovie = async (params) => {
        try {
            const {results} = await moviesService.searchMovieByTitle(params)
            setData(results)

            return results
        } catch
            (e) {
            console.log(e)
        }
    }

    return (
        <div className={styles.mainWrapper}>
            <header><Link className={styles.headerBase} to={"/"}>Header </Link>
                <div>
                    <form onSubmit={onFormSubmit}>
                        <input type={"text"} placeholder={"type to search"}
                               onChange={e => handleChange(e.target.value)}/>
                        <button onClick={() => searchMovie({query: searchText})}> send</button>
                    </form>
                </div>
            </header>
            {data && <MovieSearchPage items={data} />}
            <main>{children}</main>
            <footer>Footer</footer>
        </div>
    )
}
