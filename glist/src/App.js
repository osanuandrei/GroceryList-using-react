import Content from './Content';
import Head from './Head';
import Footer from './Footer';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import { useState } from 'react';
function App() {


  const [search,setSearch] = useState('');
  
  
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('shopping list')));
    const [newItem, setnewItem] = useState('');

    const setAndSaveItems = (newItems) => {
      setItems(newItems);
      localStorage.setItem("shopping list", JSON.stringify(newItems));


    }
    const addItem = (item) => {
      const id = items.length ? items[items.length-1].id + 1 : 1;
      const myNewItem = {id,checked:false, item: newItem}
      const listItems = [...items, myNewItem];
      setAndSaveItems(listItems);
      

    }
    const handleCheck = (id) => {
      const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} :item)
      setAndSaveItems(listItems);
      
    }
  
    const handleDelete = (id) => {
      const del = items.filter((item) => item.id !== id )
      setAndSaveItems(del);
      
     
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        if(!newItem) return;
        setnewItem('');
        addItem(newItem);

      }
  
  return (
    <div className="App">
     <Head />
     <AddItem 
     newItem={newItem}
     setnewItem={setnewItem}
     handleSubmit={handleSubmit}

     />
     <SearchItem 
     search={search}
     setSearch={setSearch}/>

     <Content
     items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase())) }
     handleDelete={handleDelete}
     handleCheck={handleCheck}
      />
     <Footer length={items.length}/>
    </div>
  );
}


export default App;