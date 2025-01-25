// src/components/Contact.js

import React, { useState } from 'react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const mailtoLink = `mailto:saivinilreddy@gmail.com?subject=Message from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
    window.location.href = mailtoLink;

    setFormStatus('Thank you for your message! I will get back to you soon.');
    e.target.reset();
  };

  return (
    <section id="contact" data-aos="fade-up">
      <h2>Contact Me</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Your Message</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
      {formStatus && <p className="form-status">{formStatus}</p>}
    </section>
  );
};

export default Contact;