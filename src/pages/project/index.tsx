import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import './index.scss';
import Contact from '../../components/contact';
import { BannerType, BannerText } from '../../components/banner-text';
export default function Project() {
  useEffect(() => {
    ReactGA.pageview('/project');  
  }, [])
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <div className="project container">
        <div className="lets-chat">
          {BannerText({
            type: submitted ? BannerType.TalkSoon : BannerType.LetsChat
          })}
          <div>
            {Contact({
              fullForm: true,
              submissionCallback: setSubmitted,
            })}
          </div>
        </div>
      </div>
    </>
)
}