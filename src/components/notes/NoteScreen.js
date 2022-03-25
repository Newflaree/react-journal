import React from "react";
// components
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>
      <NotesAppBar /> 

      <div className='notes__content'>
        <input 
          type='text'
          placeholder='Some awesome title'
          className='notes__title-input'
          autoComplete='off'
        />
        <textarea
          placeholder='What happened today?'
          className='notes__textarea'
        ></textarea>

        <div className='notes__image'>
          <img 
            src='https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-thumb.jpg'
            alt=''
          />
        </div>
      </div>
    </div>
  )
}
