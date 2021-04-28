import React from 'react';

import './Navbar.scss';

const Navbar = () => {
    return (
        <div className="navbar-fixed">
        <nav>
            <div className="nav-wrapper cyan lighten-2">
                <a href="#" className="brand-logo"><i className="material-icons">cloud</i>Логотип</a>
                <a href="#" data-target="slide-out" className="sidenav-trigger right"><i className="material-icons">menu</i></a>

                <ul id="slide-out" className="right hide-on-med-and-down">
                    <li><a href="#"><i className="material-icons">search</i></a></li>
                    <li><a href="#"><i className="material-icons">view_module</i></a></li>
                    <li><a href="#"><i className="material-icons">refresh</i></a></li>
                    <li><a href="#"><i className="material-icons">account_circle</i></a></li>
                    <li><a className='dropdown-trigger' href='#' data-target='dropdown1'><i className="material-icons">more_vert</i></a></li>
                </ul>

            </div>
            <ul id='dropdown1' className='dropdown-content'>
                <li><a href="#">one</a></li>
                <li><a href="#">two</a></li>
                <li><a href="#">three</a></li>
                <li><a href="#"><i className="material-icons">view_module</i>four</a></li>
                <li><a href="#"><i className="material-icons">cloud</i>five</a></li>
            </ul>


        </nav>


        </div>
    );
};

export default Navbar;