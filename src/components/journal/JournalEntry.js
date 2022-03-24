import React from "react";
// Components

export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
      <div 
        className='journal__entry-picture'
        style={{
          backgroundSize: 'cover',
          backgroundImage: 'url(https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg)'
        }}
      ></div>

      <div className='journal__entry-body'>
        <div className='journal__entry-title'>
          Un nuevo día
        </div>
        <div className='journal__entry-content'>
          Que buen día es hoy, lleno de vida
        </div>
      </div>

      <div className='journal__entry-date-box'>
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  )
}
