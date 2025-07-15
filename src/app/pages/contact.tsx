"use client";
import '../style/contact.css';
import React, { useState } from "react";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      const data = await res.json();
      setStatus(data.msg || "Message sent!");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("There was an error sending your message.");
    }
  };

  return (
    <main>
      <div className="contact-container">
        <div className="contact-text">
          <div className="heading">
            <h1>Contact Us</h1>
          </div>
          <div className="para">
            Need assistance or want to collaborate? Let us know how we can help.
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="contactform"
          autoComplete="off"
        >
          <div className="entry">
            <label htmlFor="name">Name:</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Name"
              autoComplete="name"
              required
            />
          </div>
          <div className="entry">
            <label htmlFor="email">Email:</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              autoComplete="email"
              required
            />
          </div>
          <div className="message">
            <label htmlFor="message">Message:</label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              id="message"
              name="message"
              placeholder="Enter Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="button">
            Submit
          </button>
          {status && (
            <div className="form-status" style={{ marginTop: "1em", color: "green" }}>
              {status}
            </div>
          )}
        </form>
      </div>
      <div className="information">
        <div className="Technicals">
          <div className="support">
            <h2>Technical support</h2>
            <a href="mailto=support@minidigital.in">support@minidigital.in</a>
          </div>
          <div className="Chat">
            <h2>Chat on Skype</h2>
            <p className="skype">live:.cid.316af6d61dd2d432</p>
          </div>
          <div className="Address">
            <h2>Address</h2>
            <strong>MINI DIGITAL MEDIA PRIVATE LIMITED</strong>
            <p>&quot;Simbhaoli, Ghaziabad, Uttar Pradesh-245207&quot;</p>
          </div>
        </div>
      </div>
    </main>
  );
}
