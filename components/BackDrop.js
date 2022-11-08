import React from 'react'

function BackDrop({showNavBar}, ref) {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-0 hidden' ref={ref} onClick={showNavBar}></div>
  )
}

const forwardedBackDrop = React.forwardRef(BackDrop)

export default forwardedBackDrop;