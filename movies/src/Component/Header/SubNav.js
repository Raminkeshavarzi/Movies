import React from 'react';
import './SubNav.css'

class SubNav extends React.Component{
    render() {
        return(
            <div className="nav">
                <h2>Trending</h2>
                <h2>Top Rated</h2>
                <h2>Action</h2>
                <h2>Comedy</h2>
                <h2>Horro</h2>
                <h2>Romance</h2>
                <h2>Mystery</h2>
                <h2>Sci-Fi</h2>
                <h2>Western</h2>
                <h2>Animation</h2>
                <h2>Movie</h2>
            </div>
        )
    }
}

export default SubNav;