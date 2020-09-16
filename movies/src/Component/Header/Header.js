import React from 'react';
import './Header.css'

// Material UI Icons
import HomeIcon from '@material-ui/icons/Home';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

class Header extends React.Component{
    render() {
        return(
            <div className="header">
                <div className="Header_icons">
                    <div className="Header_icon Header_icon">
                        <HomeIcon />
                        <p>Home</p>
                    </div>

                    <div className="Header_icon">
                        <LiveTvIcon />
                        <p>Live Show</p>
                    </div>

                    <div className="Header_icon">
                        <FlashOnIcon /> 
                        <p>Trending</p>
                    </div>

                    <div className="Header_icon">
                        <VideoLibraryIcon />
                        <p>Collections</p>
                    </div>

                    <div className="Header_icon">
                        <SearchIcon />
                        <p>Search</p>
                    </div>

                    <div className="Header_icon">
                        <PersonOutlineIcon />
                        <p>Account</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;