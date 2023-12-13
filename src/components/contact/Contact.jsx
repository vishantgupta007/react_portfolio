import React, { useRef } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  // For connecting form with emailJs

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nt6wxk4",
        "template_e8wmo1f",
        form.current,
        "1oI-ofPWz07XyAq9p"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h3>Get in Touch</h3>
      <h1>Contact Me</h1>

      <div className="container contact_container">
        <div className="contact_options">
          {/* Mail Options */}

          <article className="contact_option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>vishantgupta009@gmail.com</h5>
            <a href="mailto:vishantgupta009@gmail.com">Send a message</a>
          </article>

          {/* LinkedIn options */}

          <article className="contact_option">
            <FaLinkedin />
            <h4>LinkedIn</h4>
            <h5></h5>
            <a
              href="https://www.linkedin.com/in/vishant-gupta-373409293"
              target="_blank"
            >
              Let's Connect
            </a>
          </article>
        </div>

        {/* End of Contact */}

        {/* Form to connect */}
        <form onSubmit={sendEmail} ref={form}>
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => alert("Your Message Has been sent")}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
