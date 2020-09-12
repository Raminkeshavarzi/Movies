import React from 'react';
import VideoCard from '../VideoCard/VideoCard'
import './Results.css'

class Results extends React.Component{
    render() {
        return(
            <div className="result">
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            
            </div>
        )
    }
}

export default Results;