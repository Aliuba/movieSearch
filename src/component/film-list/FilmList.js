import React from "react";
import {FilmItem} from "../film-item";
import styles from "./filmList.module.css"
export const FilmList=({items, onMovieClick})=>{
return(
<div className={styles.listWrapper}>
    {items.map(item=><div className={styles.itemWrapper } key={item.id} onClick={()=>onMovieClick(item)} ><FilmItem  {...item}/></div>)
        }
</div>
);
}
