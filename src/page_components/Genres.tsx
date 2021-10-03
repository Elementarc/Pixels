import React, {ReactElement} from 'react';
import {motion} from "framer-motion"
import "./style_sheets/genres.scss"
import { useHistory } from 'react-router-dom';
/* eslint-disable */
//Main Genre Component
const Genre_main = (): ReactElement => {
    
    return (
        <motion.div initial={{ opacity: 0}} animate={{opacity: 1, transition: {duration: 0.25}}} exit={{opacity: 0, transition: {duration: 0.25}}} className="genre_container">
            <div className="genre_item_container">
                <Genre_item genre="medival" />
                <Genre_item genre="fantasy" />
            </div>
        </motion.div>
    );
}
export default Genre_main;

function Genre_item(props: any): ReactElement {
    const history = useHistory()
    //Function That sets QueryUrl When clicking on JSX Element in GenreComponents
    function setGenreQueryUrl(e: any): void{
        const categoryItem: HTMLDivElement = e.target
        const queryObj = new URLSearchParams(history.location.search)
        const query: string | null = queryObj.get("seach")

        if(query === null || query !== categoryItem.dataset.genre?.toLowerCase() && typeof categoryItem.dataset.genre?.toLowerCase() !== undefined){
            //Pushes a query into the url Categories with a genre. The genre is included via dataset on the Category_item via category_name
            history.push({
                pathname: `${history.location.pathname}`,
                search: `?search=${categoryItem.dataset.genre?.toLowerCase()}`
            })
        } else {
            //console.log("The clicked nodeElement was Eather NOT NULL OR THE SAME AS QUERY STRING") 
        }
    }

    //Making first Letter uppercase of a string
    const stringFirstCharToUppercase = (genre: string) => {
        return genre.charAt(0).toUpperCase() + genre.toLowerCase().slice(1)
    }
    return (
        <div onClick={setGenreQueryUrl} data-genre={props.genre} className="genre_item">

            <h1>{stringFirstCharToUppercase(props.genre)}</h1>
            <div className="genre_item_background_container">
                <div className="genre_item_blur"></div>
                <img src={`http://localhost:4000/genre_thumbnails/${props.genre}.png`} alt="" />
            </div>

        </div>
    )
}

