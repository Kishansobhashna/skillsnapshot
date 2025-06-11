import React from "react";
import "./../styles/Contact.css";
import Footer from "./Footer";

function Contact() {
  return (
    <div>
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Your Name" required /><br />
        <input type="email" placeholder="Your Email" required /><br />
        <textarea  placeholder="Your Message" required /><br />
        <button type="submit">Send Message</button>
      </form>
    </div>
    {/* <Footer /> */}
    </div>
  );
}

export default Contact;
