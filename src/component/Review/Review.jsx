import React, { useState } from 'react';
import Image from 'next/image';
import people from '@/component/Review/reviews.js';
import '@/styles/component.review.scss'

function ReviewCard({ person }) {
  const { name, job, image, text } = person;

  return (
    <div className='review'>
      <div className='img-container'>
        <Image alt={name} className='person-img' src={image} width={96} height={96} />
        
        <span className='quote-icon'><p className='author'>{name}</p>
        <p className='job'>{job}</p></span>
        
      </div>
      <p className='info'>{text}</p>
    </div>
  );
}

export default function Review() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setCurrentIndex((index) => checkNumber(index + 1));
  };

  const prevPerson = () => {
    setCurrentIndex((index) => checkNumber(index - 1));
  };

  // Calculate the indices for the previous and next reviews
  const prevIndex = checkNumber(currentIndex - 1);
  const nextIndex = checkNumber(currentIndex + 1);

  return (
    <><div className='review-wrapper'>
    <div className='title-wrapper'>
    <h5>Відгуки клієнтів</h5>
    <div className='button-container'>
            <Image
            onClick={prevPerson} 
            src="/leftArrow.svg"
            width={108} 
            height={82}
            />

            <Image
            onClick={nextPerson} 
            src="/rightArrow.svg"
            width={108} 
            height={82}
            />
      </div>
      </div>
      <div className='review-container'>
              <ReviewCard person={people[prevIndex]} />
              <ReviewCard person={people[nextIndex]} />
          </div>
          </div></>
  );
}
