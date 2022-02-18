import React from 'react'
import './intro.scss'
import { init } from "ityped"
import { useEffect, useRef } from "react";

function Intro() {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, { 
            strings: [' Developer.', ' Designer.', ' Content Developer.'],
            backDelay: 1500,
            showCursor: true 
        })
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>JEMAIL OMER</h1>
                    <h3>a freelance
                        <span ref={textRef}> </span>
                    </h3>
                    <a href="#portfolio">
                        <img src="assets/down.png" alt="" />
                    </a>
                </div>   
            </div>
        </div>
    )
}

export default Intro
