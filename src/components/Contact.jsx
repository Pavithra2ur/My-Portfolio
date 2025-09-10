import React, { useState } from "react";
import style from "./Contact.module.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    emailjs.send(
      'service_1hr5yob',    
      'template_unh89wx',     
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      'iSqEsd31TJK5_4hmi'      
    )
    .then(() => {
      alert('Message sent successfully!');
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  })
  .catch((err) => {
      console.error('FAILED...', err);
      alert('Failed to send message, please try again later.');
    });
  };
  ;

  return (
    <div className={style["contact-section"]} id="Contact">
      <h2>Contact Me</h2>
      <div className={style["contact-grid"]}>
      <form className={style["contact-form"]} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
      <div className={style["contact-info"]}>
          <h3>Get in Touch</h3>
          <p>Email: <a href="mailto:pavithracse559@gmail.com">pavithracse559@gmail.com</a></p>
          <p>Phone: +91 9600859314</p>
          <div className={style["social-links"]}>
            <a href="https://www.linkedin.com/in/pavithra-a-7533a5251" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/Pavithra2ur" target="_blank" rel="noopener noreferrer">GitHub</a>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
