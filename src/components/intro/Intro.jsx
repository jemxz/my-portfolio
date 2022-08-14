import React, { Component, useEffect, useRef  } from 'react';
import Terminal from 'terminal-in-react';
import './intro.scss'
import { init } from "ityped"




class Intro extends Component {
    componentDidMount(){
        const myElement = document.querySelector('#myElement')
        init(myElement, { showCursor: false, strings: [' A Web Developer', ' An Enthusiast Animator', ' An Occasional Gamer' ] })
      }
  showMsg = () => <p>
      Hello and thanks for visiting my profile. <br></br>
      I am a web developer and UX designer based in the beautiful capital of Ethiopia 🇪🇹, Addis Ababa.
      I really enjoy solving problems as well as making things pretty and easy to use. I can't stop learning new things; the more, the better. 
      I also love animations, a hobby I'm taking along since an early age.
      Oh, and gaming; I have a passion for gaming as well!<br></br>
      <br></br>
      <p>Skills Include</p>
<br></br>
1. HTML and CSS<br></br>
2. JavaScript<br></br>
3. React and Node JS<br></br>
4. Mongodb<br></br>
<br></br>
I have studied a lot on web designing, development, and deployment, with many certification to attest to that. 
Over four years of experience has helped me to understand a lot about web development and customer needs.
</p>

  

  render() {

      
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className='imgContainer'>
                    <div
                        style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh",
                        }}
                    >
                        <Terminal
                        color='white'
                        backgroundColor='#15023a'                        
                        startState="open"
                        barColor='#15023a'
                        allowTabs = {false}
                        style={{ fontWeight: "bold", fontSize: "1em", overflowY:"hidden" }}
                        commands={{
                            'open-github': () => window.open('https://github.com/jemxz'),
                            'open-twitter': () => window.open('https://twitter.com/jemxz1'),
                            'open-linkedin': () => window.open('https://www.linkedin.com/in/jemail-omer-7b72a6136/'),
                            Aboutme: this.showMsg,
                        }
                        }
                        descriptions={{
                            'open-github': 'opens my github page',
                            'open-twitter': 'opens my twitter page',
                            'open-linkedin': 'opens my linkedin page',
                            Aboutme: 'About Me',
                        }}
                        msg="Hello Person On The Internet 👋. I hope your having a great day,
                        Type help to see all the commands."
                        />
                    </div>
                        
                    </div>
                </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, My name is</h2>
                    <h1> JEMAIL OMER</h1>
            <h3>I'm
                    <span id='myElement'></span>
            </h3>
               <a href="#works">
                   <img src="assets/down.png" alt="" />
                </a>
             </div>   
        </div>
     </div>
      
    );
  }
}



























// import React from 'react'
// import './intro.scss'
// import { init } from "ityped"
// import { useEffect, useRef } from "react";
// import Terminal from 'terminal-in-react';

// function Intro() {
//     const textRef = useRef();
//     useEffect(() => {
//         init(textRef.current, { 
//             strings: [' Developer.', ' Designer.', ' Content Developer.'],
//             backDelay: 1500,
//             showCursor: true 
//         })
//     }, [])
// showMsg = () => 'Hello World'
//     return (
//<div className="intro" id="intro">
//         // //     <div className="left">
//         // //         <div className="imgContainer">
//         // //             <img src="assets/man.png" alt="" />
//         // //         </div>
//         // //     </div>
//         // //     <div className="right">
//         // //         <div className="wrapper">
//         // //             <h2>Hi There, I'm</h2>
//         // //             <h1>JEMAIL OMER</h1>
//         // //             <h3>a freelance
//         // //                 <span ref={textRef}> </span>
//         // //             </h3>
//         // //             <a href="#portfolio">
//         // //                 <img src="assets/down.png" alt="" />
//         // //             </a>
//         // //         </div>   
//         // //     </div>
//         // </div>
//         <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "100vh"
//         }}
//       >
//         <Terminal
//           color='green'
//           backgroundColor='black'
//           barColor='black'
//           style={{ fontWeight: "bold", fontSize: "1em" }}
//           commands={{
//             'open-google': () => window.open('https://www.google.com/', '_blank'),
//             showmsg: this.showMsg,
//             popup: () => alert('Terminal in React')
//           }}
//           descriptions={{
//             'open-google': 'opens google.com',
//             showmsg: 'shows a message',
//             alert: 'alert', popup: 'alert'
//           }}
//           msg='You can write anything here. Example - Hello! My name is Foo and I like Bar.'
//         />
//       </div>
//     )
// }

export default Intro
