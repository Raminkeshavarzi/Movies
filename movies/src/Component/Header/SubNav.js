import React from 'react';
import requests from '../Requests/requests';
import './SubNav.css'

function SubNav ({ setSelectedOption }){

        return(
        <div className="nav">
            <h2 onClick={() => setSelectedOption(requests.fetchTrending)}>Trending</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchTopRated)}>TopRated</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchActionMovies)}>Action</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchComedyMovies)}>Comedy</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchHorrorMovies)}>Horro</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchRomanceMovies)}>Romance</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchMystery)}>Mystery</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchSciFi)}>Sci.Fi</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchWestern)}>Western</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchAnimation)}>Animation</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchTV)}>TVMovie</h2>
        </div>
    )
}

export default SubNav;