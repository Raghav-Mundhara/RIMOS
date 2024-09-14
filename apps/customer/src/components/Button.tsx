import React from 'react'

function Button(props: {title:String,onClick: () => void}) {
  return (
    <div className='flex justify-center'>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={props.onClick}>
        {props.title}
      </button>
    </div>
  )
}

export default Button