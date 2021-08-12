import React from 'react'
import './style.css'
import { Link, Route, Switch } from 'react-router-dom'
import Feed from './Feed'
import Instock from './Instock'
import Upcoming from './Upcoming'
import image from './image/images.png'

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <img src={image} alt={'im'} style={{ height: '100%', width: '100px', alignSelf: 'flex-start' }}></img>
                <ul style={{ textDecoration: 'none', listStyle: "none", width: '300px', height: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <li>
                        <Link className='text-link' to="/">FEED</Link>
                    </li>
                    <li>
                        <Link className='text-link' to="/Instock">INSTOCK</Link>
                    </li>
                    <li>
                        <Link className='text-link' to="/Upcoming">UPCOMING</Link>
                    </li>
                </ul>


            </nav>
            <Switch>
                <Route exact path="/">
                    <Feed />
                </Route>
                <Route path="/Instock">
                    <Instock />
                </Route>
                <Route path="/Upcoming">
                    <Upcoming />
                </Route>
                <Route >
                    <h1 style={{ textAlign: 'center' }}>404 Not Found....</h1>
                </Route>
            </Switch >
        </>


    )


}

export default Navbar
