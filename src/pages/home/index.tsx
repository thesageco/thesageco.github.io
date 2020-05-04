import React, { useEffect, useState } from 'react';
import './index.scss';

interface HomeProp {
  lang: String;
}

function information(lang: String){
  switch(lang){
    case 'EN': 
       return ["EN2"];
    case 'FR': 
      return ["FR2"];
    case 'SP': 
      return ["SP2"]
    default: 
      return ["", ""];
  }
}

export default function Home(props: HomeProp) {
  const [title, setTitle] = useState("");
  
  useEffect(() => {
    let info = information(props.lang);
    setTitle(info[0]);
  }, [props.lang]);

  return (
  <div className="home">
    Home! {title}
  </div>)
}