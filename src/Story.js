import React from 'react';
import Button from './Button';
import Author from './Author'
import './Story.css';

const Story = (props) => {
  return (
    <div className='Story'>
      <div className = 'story-right'>
      <img src= {props.img} />
      </div>
      <div className='story-info'>
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
        <Author authImg = {props.authImg}
          authName = {props.authName}
          estTime = {props.estTime} />
      </div>
    </div>
  )
}

export default Story;
