import React, { useCallback } from 'react';
import "./Gif.css";
import _ from "lodash";

const Gif = (props) => {

    const handleCurrGif = (e) => {
        props.addGif(e.target.src);
    }

    //debouncing the set state for search query so that we won't make an api call for each character change
    const sendQuery = query =>  props.handleSearchGif(query);
    const delayedQuery = useCallback(_.debounce(q => sendQuery(q), 500), []);

    const handleChange = function(e) {
        delayedQuery(e.target.value);
    }

    const trendingGifs = props.gifs.data.map(gif => {
        if(gif.user) {
            return (
                <div className="Gif-flex">
                    <img className="Gif-img" onClick={handleCurrGif} src={gif.user.avatar_url} />
                </div>
            )
        }
    })

    return (
        <div className="Gif-container">
            <input className="Gif-search" name="gif" onChange={handleChange} placeholder="search" />
            {trendingGifs}
        </div>
    )
}

export default Gif;