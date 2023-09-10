import React from 'react'
import ItemList from './ItemList'
import { FaTrashAlt } from 'react-icons/fa'
const LineItem = ({item, handleCheck, handleDelete}) => {
  return (
    <li className='item' >
            <input type="checkbox" 
            onChange={() => handleCheck(item.id)}
            checked={item.checked}
            >

            </input>
            <label style={(item.checked) ? {textDecoration : 'line-through'} : null }>
            {item.item}
            </label>
            <FaTrashAlt 
            aria-label={`Delete ${item.item}`}
            role = 'button'
            onClick={() => {handleDelete(item.id)}}
            tabIndex= "0"/>

        </li>
     
    
  )
}

export default LineItem
