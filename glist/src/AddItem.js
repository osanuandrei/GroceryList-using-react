import React from 'react'
import { useRef } from 'react'
import { FaPlus } from 'react-icons/fa'
const AddItem = ({newItem, handleSubmit, setnewItem}) => {
  const inputRef = useRef();
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='AddItem'>Add Item</label>
        <input 
       value={newItem}
       ref={inputRef}
        onChange= {(e) => setnewItem(e.target.value)}
        autoFocus
        id='addItem'
        type='text'
        placeholder='Add Item '
        required></input>
        <button
        onClick={() => inputRef.current.focus}
        type='submit'
        aria-label='Add Item '
        >   <FaPlus />
        </button>
    </form>
  )
}

export default AddItem
