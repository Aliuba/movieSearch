import React from "react";
import styles from "./filmItem.module.css"
export const FilmItem = (props) => {
// adult: false
// backdrop_path: "/fOy2Jurz9k6RnJnMUMRDAgBwru2.jpg"
// genre_ids: (4) [16, 10751, 35, 14]
// id: 508947
// original_language: "en"
// original_title: "Turning Red"
// overview: "Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda."
// popularity: 5830.184
// poster_path: "/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg"
// release_date: "2022-03-01"
// title: "Turning Red"
// video: false
// vote_average: 7.5
// vote_count: 1300
    const {original_title, overview, popularity, poster_path, release_date, title, vote_average, vote_count, movieGenresList} = props;
    return (
        <div className={styles.filmItem} >
            <div><img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={"img"}/></div>
            <div>
                <h1>{original_title}</h1>
                <p>Genres: {movieGenresList.map(el=><span key={el.id}>{el.name}  </span>)}</p>

                <p>{overview}</p>
                <h3>{release_date}</h3>
            </div>

        </div>
    );
}
