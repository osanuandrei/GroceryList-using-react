import React from 'react'
import { useState } from 'react';

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked:false,
      item: "One false bag of cocoa"
    },
    {
      id: 2,
      checked: false,
      item: "item 2"
    },
    {
      id: 3,
      checked: false,
      item: "item 3"
    }
  ]);
  /* const [name, setname] = useState("Andrei");
  const [count, setcount] = useState(0); */
    /* const handlename = () => {
        let names = ["Andrei", "Mitica", "Gigi"];
        const int = Math.floor(Math.random()  * 3 );
        return setname(names[int]);
    
    
      }
      
      const handleclick = () => {
        console.log(count)
        setcount(count + 1)
      }
      const handleclick2 = (name) => {
        console.log(`${name} was clicked` )
      }
      const handleclick3 = (e) => {
        console.log(e.target.innerText)
      } */
  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className='item' key = {item.id}>
            <input type = "checkbox"
            checked = {items.checked}
            >

            </input>
            <label> {item.item}</label>
            <button>Delete</button>
          </li>
        ))}
      </ul>
      
        {/* /* <p onDoubleClick={handleclick}>
            Hello {name}!
            
        </p>
        <button className="button" onClick={handlename}>Click me</button>
        <button className="button" onClick= {() => handleclick()}>Click me</button>
        <button className="button" onClick= {(e) => handleclick3(e)}>Click me</button>
        <button onClick ={ () => handleclick2(name)}>Click meeee</button> */ }
        </main>
    
  )
}

export default Content