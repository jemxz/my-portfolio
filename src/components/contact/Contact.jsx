import React from 'react'
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com'
import 'react-toastify/dist/ReactToastify.css';
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const notify = () => toast("Thank you, I will contact you soon enough 🔜" );

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm("service_giqw7dq","template_64uwtig",e.target,"_DEfk6PTmWr8MMlGw")
      .then(res=>{
        console.log(res);
        
      }).catch(err => {
        console.log(err.message);
      })
  }
  return (
    <div className="contact" id="contact" >
      <div className="left">
        <img className="handshake" src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={sendEmail}>
          <input name="email" type="text" placeholder="Email" id="mce-EMAIL" required />
          <textarea name="text" placeholder="Message"></textarea>
          <button type="submit" onClick={notify}> Send </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}
