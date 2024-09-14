import React from 'react'

function TextField(props: {type: string, placeholder: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void}) {
  return (
    <div className='flex justify-center'>
        <input type={props.type} placeholder={props.placeholder} className='border rounded-sm p-2 m-2 border-blue-300 border-2' onChange={props.onChange}/>
    </div>
  )
}

export default TextField