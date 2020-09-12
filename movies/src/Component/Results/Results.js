import React, { useEffect, useState } from 'react';
import VideoCard from '../VideoCard/VideoCard'
import axios from '../axios/axios'; //=> Library to handle API need to use more
import Requests from '../Requests/requests';
import './Results.css'

function Results () {
    {/*Use React hooks to create an Movies array*/}
    const [movies, setMovies] = useState([]); 
   
    // add API to movies 
    useEffect(() => {
        // run this code once when load the results component loads/mounts
        async function fetchData() {
            const request = await axios.get(Requests.fetchActionMovies);
            setMovies(request.data.results)
        }

        fetchData();
    }, [])


    return(
        <div className="result">
            {/* Maping through an Movies array to return Video component */}
            {movies.map((movie)=>( 
                <VideoCard movie={movie}/>
            ))}
        </div>
    );
}

export default Results;