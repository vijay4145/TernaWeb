import React from 'react'

const OutlineButton = ({name, icon}) => {
  return (
    <div>
        <div className='hover:bg-purple-700 hover:text-white cursor-pointer flex gap-1 items-center border border-black max-w-min p-1 px-4 rounded-lg'>
            {icon} {name}
        </div>
    </div>
  )
}

export default OutlineButton
