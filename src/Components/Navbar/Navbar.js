import React from 'react'
import './Navbar.css';

// // navbar-expand-lg fixed-top navbar navbar-dark bg-dark
function Navbar() {
    return (
        <nav class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
            <img width="50px" src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png" alt="logo"></img>
            <a class="navbar-brand" style={{ marginLeft: "10px" }} href="#">Spotify</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/Home">
                            <i class="fa fa-home"></i>
                                Home
          <span class="sr-only">(current)</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/Albums">
                            <i class="fa fa-envelope-o">
                                <span class="badge badge-danger">+</span>
                            </i>
                            Albums
                         </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/Songs">
                            <i class="fa fa-envelope-o">
                                <span class="badge badge-danger">+</span>
                            </i>
                            Songs
                         </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/AddAlbum">
                            <i class="fa fa-envelope-o">
                                <span class="badge badge-danger">+</span>
                            </i>
                            New Album
                         </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/AddSong">
                            <i class="fa fa-envelope-o">
                                <span class="badge badge-danger">+</span>
                            </i>
                            New Song
                         </a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}


export default Navbar;