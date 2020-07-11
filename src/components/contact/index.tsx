import React, { useState, FormEvent } from 'react';
import ReactGA from 'react-ga';
import handleFormSubmit from './form-submission-handler.js'

import './index.scss';
import fun from '../../assets/project/fun.svg'
import right_arrow from '../../assets/icons/right-arrow.svg';

interface ContactProps {
  fullForm?: boolean;
  submissionCallback?: (e: boolean) => void;
}
export default function Contact({
  fullForm, 
  submissionCallback
}: ContactProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [honey, setHoney] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [clicked, setClicked] = useState(false);
  
  const sendEmailForm = "https://script.google.com/macros/s/AKfycbwFZe7sEl1NGMgYKVWDj6_ooX4Z1kPD_ZyRxTKLgO7ycymdCc_f/exec"
  
  const toggleSubmit = () => {
    setSubmitted(true);
    submissionCallback && submissionCallback(true);
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setClicked(true);
    ReactGA.event({
      category: 'Project',
      action: 'Form Submitted'
    });

    handleFormSubmit(e, toggleSubmit);
  }
  
  if(fullForm && submitted) {
    return (
      <div className="contact-us">
        <img className="fun" src={fun} alt="having-fun"/>
      </div>
    )
  }
  if(fullForm) {
    return (
      <div className="contact-us">
        <form 
          className="full-form" 
          id="gform" 
          method="POST"
          onSubmit={handleSubmit}
          action={sendEmailForm}
        >
          <div className="name-email">
            <input
              name="name"
              type="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Name"
              required
              disabled={submitted}
            />
            <input
              name="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email"
              required
              disabled={submitted}
            />
          </div>
          <div className="message">
            <textarea
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Your message &#10;Pro tip -- touch on these things: &#10;‣ Your product &#10;‣ Your timeline &#10;‣ Your location &#10;‣ Where you heard about us"
              required
              disabled={submitted}
            />
          </div>
          <input
            className="ohgg"
            type="text"
            value={honey}
            onChange={e => setHoney(e.target.value)}
            placeholder="honey"
            disabled={submitted}
          />
          <div className="send">
            <button type="submit" disabled={submitted}>{clicked ? "Submitted!":<span>Send Message<img src={right_arrow} alt="submit arrow"/></span>}</button>
          </div>
        </form>
      </div>
    );
  }
  return (
    <div className="contact-us">
      <form 
        id="gform" 
        method="POST"
        onSubmit={handleSubmit}
        action={sendEmailForm}
      >
        <div className="name-email">
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
            <button type="submit" disabled={submitted}>{clicked ? "Submitted!":"Contact Us"}</button>
          </div>
        </div>
      </form>
    </div>
  );

};
