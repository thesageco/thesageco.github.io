import React, { useState, FormEvent } from 'react';
import './index.scss';
import fun from '../../assets/project/fun.svg'
import right_arrow from '../../assets/icons/right-arrow.svg';

interface ContactProps {
  fullForm?: boolean;
  submissionCallback?: (e: boolean) => void;
}
export default function Contact(props: ContactProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [clicked, setClicked] = useState(false);
  
  const toggleSubmit = () => {
    setSubmitted(true);
    if(props.submissionCallback){
      props.submissionCallback(true);
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setClicked(true);
    setTimeout(() => {
      toggleSubmit();
    }, 3000);
  }
  
  if(props.fullForm && submitted) {
    return (
      <div className="contact-us">
        <img className="fun" src={fun} alt="having-fun"/>
      </div>
    )
  }
  if(props.fullForm) {
    return (
      <div className="contact-us">
        <form className="full-form" id="gform" onSubmit={handleSubmit}>
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
          <div className="send">
            <p className="apply">Are you a student looking for work? <a href="#!">Apply Here</a></p>
            <button type="submit" disabled={submitted}>{clicked ? (submitted?"Submitted!":<div className="loader"></div>):<span>Send Message<img src={right_arrow} alt="submit arrow"/></span>}</button>
          </div>
        </form>
      </div>
    );
  }
  return (
    <div className="contact-us">
      <form id="gform" onSubmit={handleSubmit}>
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
            <button type="submit" disabled={submitted}>{clicked ? (submitted?"Submitted!":<div className="loader"></div>):"Contact Us"}</button>
          </div>
        </div>
      </form>
      <p className="apply">Are you a student looking for work? <a href="#!">Apply Here</a></p>
    </div>
  );

};
