import React, { useEffect, useState } from 'react';
import VideoCard from '../VideoCard/VideoCard'
import axios from '../axios/axios'; //=> Library to handle API need to use more
import Requests from '../Requests/requests';
import './Results.css'
import FlipMove from 'react-flip-move';

function Results ({ selectedOption }) {
    {/*Use React hooks to create an Movies array*/}
    const [movies, setMovies] = useState([]); 
   
    // add API to movies 
    useEffect(() => {
        // run this code once when load the results component loads/mounts
        async function fetchData() {
            const request = await axios.get(selectedOption);
            setMovies(request.data.results)
        }

        fetchData();
    }, [selectedOption])


    return(
        <div className="result">
            <FlipMove>
                {movies.map((movie)=>( 
                    <VideoCard key={movie.id} movie={movie}/>
                ))}
            </FlipMove>            
        </div>
    );
}

export default Results;