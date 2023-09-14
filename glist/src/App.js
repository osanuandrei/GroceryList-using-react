import Content from './Content';
import Head from './Head';
import Footer from './Footer';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import { useState, useEffect } from 'react';
function App() {
  const API_URL = "http://localhost:3500/items";



    const [search,setSearch] = useState('');
    const [items, setItems] = useState([]);
    const [newItem, setnewItem] = useState('');
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect ( () => {
      const fetchItems = async () => {
        try{
          const response = await fetch(API_URL);
          if(!response.ok ) throw Error("did not receive expected data");
          const listItems = await response.json();
          console.log(listItems);
          setItems(listItems);
          setFetchError(null);
                } catch(err) {
          setFetchError(err.message);

        }
        finally {
          setIsLoading(false)
        }
      }
      setTimeout( () => {
        (async () => await fetchItems())()},2000);
      }
    , [])

  
    const addItem = (item) => {
      const id = items.length ? items[items.length-1].id + 1 : 1;
      const myNewItem = {id,checked:false, item: newItem}
      const listItems = [...items, myNewItem];
      setItems(listItems);
      

    }
    const handleCheck = (id) => {
      const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} :item)
      setItems(listItems);
      
    }
  
    const handleDelete = (id) => {
      const del = items.filter((item) => item.id !== id )
      setItems(del);
      
     
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
     <main>
      {isLoading && <p>Loading Items</p>}
     {fetchError && <p style = { {color: 'red' }}>{`Error ${fetchError}`}</p>}
     {!fetchError && !isLoading &&
     <Content
     items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
     handleDelete={handleDelete}
     handleCheck={handleCheck}
      />
     }
      </main>
     <Footer length={items.length}/>
    </div>
  );
}


export default App;
