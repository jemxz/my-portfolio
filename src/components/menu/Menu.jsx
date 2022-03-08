import React from 'react'
import './menu.scss'

function Menu({menuOpen, setMenuOpen}) {
    return (
        <div>
            {/* <div className={"holder " + (menuOpen && "active")}> </div> */}
            <div className={"menu "+(menuOpen && "active")} onClick={() => setMenuOpen(false)}>
                <ul>
                    <li onClick = {()=>setMenuOpen(false)}>
                        <a href="#intro">Home</a>
                    </li>
                    <li onClick = {()=>setMenuOpen(false)}>
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li onClick = {()=>setMenuOpen(false)}>
                        <a href="#works">Works</a>
                    </li>
                    <li onClick = {()=>setMenuOpen(false)}>
                        <a href="#contact">Contact Me</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu
