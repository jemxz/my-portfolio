import React from 'react';
import './topbar.scss';
import {Person, Mail} from "@material-ui/icons"

function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")} id="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Welcome .</a>
                    <div className="itemContainer">
                        <Person className='icon'/>
                        <span>
                            +251 934 47 88 86
                        </span>
                    </div>
                    <div className="itemContainer">
                        <Mail className='icon'/>
                        <span>
                            jemxz.omer@gmail.com
                        </span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Topbar
