import React from 'react'
import ItemList from './ItemList';
const Content = ({items, handleCheck, handleDelete,}) => {
  
  return (
    <main>
      {items.length ? (
        <ItemList
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete} />
     
      )
        
      : (
        <div style = {{ marginTop: '2rem' }}> your list is empty </div>
      )}
        </main>
  )
      
}


export default Content