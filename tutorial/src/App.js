import Content from './Content';
import Head from './Head';
import Footer from './Footer';
import AddItem from './AddItem';
import { useState } from 'react';
function App() {
  
    const [items, setItems] = useState([
      {
        id: 1,
        checked: false,
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
    const [newItem, setnewItem] = useState('');
    const handleCheck = (id) => {
      const listItems = items.map((item) => item.id === id ? {... item, checked: !item.checked} :item)
      setItems(listItems);
      localStorage.setItem("shopping list", JSON.stringify(listItems));
    }
  
    const handleDelete = (id) => {
      const del = items.filter((item) => item.id !== id )
      setItems(del);
      localStorage.setItem("shopping list", JSON.stringify(del));
     
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Subbmited");
      }
  
  return (
    <div className="App">
     <Head />
     <AddItem 
     newItem={newItem}
     setnewItem={setnewItem}
     handleSubmit={handleSubmit}

     />
     <Content
     items={items}
     handleDelete={handleDelete}
     handleCheck={handleCheck}
      />
     <Footer length={items.length}/>
    </div>
  );
}


export default App;
