import React from 'react'
import './Navbar.css';

// // navbar-expand-lg fixed-top navbar navbar-dark bg-dark
function Navbar() {
    return (
        // <div className="navB">
        //     <nav className="navbar">
        //         <img width="50px" src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png" alt="logo"></img>
        //         <a className="navbar-brand" href="/">SPOTIFY</a>
        //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>

        //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul className="navbar-nav mr-auto">
        //                 <li className="nav-item active">
        //                     <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="/">Link</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link disabled" href="/">Disabled</a>
        //                 </li>
        //             </ul>
        //             <form className="form-inline my-2 my-lg-0">
        //                 <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        //                 <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        //             </form>
        //         </div>
        //     </nav>
        // </div>
        <nav class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
            <img width="50px" src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png" alt="logo"></img>
            <a class="navbar-brand" style={{ marginLeft: "10px" }} href="/">Spotify</a>
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
                        <a class="nav-link" href="/AddAlbum">
                            <i class="fa fa-envelope-o">
                                <span class="badge badge-danger">+</span>
                            </i>
                            New
                         </a>
                    </li>
                </ul>
                <ul class="navbar-nav ">
                    <li class="nav-item">
                        <a class="nav-link" href="/">
                            <i class="fa fa-bell">
                                <span class="badge badge-info">11</span>
                            </i>
          Test
        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">
                            <i class="fa fa-globe">
                                <span class="badge badge-success">11</span>
                            </i>
          Test
        </a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>

    )
}


export default Navbar;