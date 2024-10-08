import React from 'react'
import LoaderImage from '../assets/Loadingpic.png'

const Loading = () => {
  return (
    <div className='flex items-center justify-center m-20'>
        <img 
        className=' '
        src={LoaderImage} 
        alt="loading" 
        />
    </div>
  )
}

export default Loading