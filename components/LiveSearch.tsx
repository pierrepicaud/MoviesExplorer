import React, { useState } from 'react'

function LiveSearch() {

    const [first, setfirst] = useState()
  return (
    <div className='flex items-center justify-center'>
        <input type="text" className='w-[400px] rounded-lg'/>
    </div>
  )
}

export default LiveSearch