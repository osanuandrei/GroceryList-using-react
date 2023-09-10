import React from 'react'
import App from './App'
import { FaPlus } from 'react-icons/fa'
const AddItem = ({newItem, handleSubmit, setnewItem}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='AddItem'>Add Item</label>
        <input 
        value = {newItem}
        onChange= {(e) => setnewItem(e.target.value)}
        autoFocus
        id='addItem'
        type='text'
        placeholder='Add Item '
        required></input>
        <button
        type='submit'
        aria-label='Add Item '
        >   <FaPlus />
        </button>
    </form>
  )
}

export default AddItem
