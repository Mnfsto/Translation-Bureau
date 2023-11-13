import Image from 'next/image';
import React, { useState } from 'react';


export default function Accordion({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handlePanelClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      {data.map((item, index) => (
        <Panel
          key={index}
          title={item.title}
          isActive={activeIndex === index}
          onShow={() => handlePanelClick(index)}
        >
          {item.content}
        </Panel>
      ))}
    </>
  );
}

function Panel({ title, children, isActive, onShow }) {
  return (
    <li className="panel" onClick={onShow}>
      <span className='listCard'>
      <p className='title'>{title}</p>
      <Image
        src='/arrow.svg'
        alt='logo'
        width={39}
        height={50}
         />
      </span>
      {isActive ? (
        <p className='list-paragraph'>{children}</p>
      ) : (
        <br></br>
      )}
    </li>
  );
}
