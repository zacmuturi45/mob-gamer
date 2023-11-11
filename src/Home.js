import React from "react";
import { useEffect, useState } from "react";


function Home() {

useEffect(() => {
    fetch('https://rawg-video-games-database.p.rapidapi.com/games', {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7658f3bc224340e0a6e41c3b529762b4',
            'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
        }
    })
    .then((response) => response.json())
    .then((resp) => console.log(resp))
}, []);


    return (
        <div>
            <input
                className="searchbar"
                type="text"
                name="search"
                placeholder="Enter movie"
            />
            <h1>Home</h1>
        </div>
    )
}

export default Home;