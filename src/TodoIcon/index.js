import React from 'react';
import {MdDoneAll} from 'react-icons/md'
import {MdDeleteForever} from 'react-icons/md'
import './TodoIcon.css'

const iconTypes={
    "check" : (color)=>(<MdDoneAll className='Icon-svg Icon-svg--complete' fill={color}/>),
    "delete": (color)=>(<MdDeleteForever className='Icon-svg Icon-svg--delete' fill={color} />)
}
export const TodoIcon = ({type, color='gray',onClick}) => {
  return (
    <span 
        className={`Icon-container Icon-container--${type}`}
        onClick={onClick}
        >
            {iconTypes[type](color)}
    </span>
  )
}
