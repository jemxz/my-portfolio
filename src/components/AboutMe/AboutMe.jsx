import React, { Component } from 'react';
import "./AboutMe.css";
class AboutMe extends Component {
    state = {  } 
    render() { 
        return (
            <div className='aboutme'>
                <section className="introduction-section">
                    <h2 className='texth2'>Introduction</h2>
                    <p className='ph2'>
                        I always loved the Internet.
                        It’s a place that brings people together, destroys barriers and levels the playing field.  
                        It was because of this, curiosity and the drive to solve problems that pushed me to learn how to code.  
                    </p>
                </section>
                <section className="location-section">
                    <h2 className='texth2'>About Me</h2>
                    <p className='ph2'>
                        I am currently working as an OSINT researcher at INSA, 
                        I am tasked with developing tools that can aid in collecting,  monitoring and analyzing social media data.
                    </p>
                    <p className='ph2'>
                       
                    </p>
                </section>

            </div>
        );
    }
}
 
export default AboutMe;