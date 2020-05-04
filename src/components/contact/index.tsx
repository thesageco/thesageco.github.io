import React, { useState, FormEvent } from 'react';
import './index.scss';

export default function Contact() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [clicked, setClicked] = useState(false);
  
  const toggleSubmit = () => {
    setSubmitted(true);
  }
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setClicked(true);
    setTimeout(() => {
      toggleSubmit();
    }, 3000);
  }
  
  return (
    <div className="contact-us">
      <form id="gform" onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Your email address"
          required
          disabled={submitted}
        />
        <div className="send">
          <button type="submit" disabled={submitted}>{clicked ? (submitted?"Submitted!":<div className="loader"></div>):"Contact Us"}</button>
        </div>
      </form>
    </div>
  );

};
