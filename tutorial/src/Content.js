import React from 'react'

const Content = () => {
    const handlename = () => {
        let names = ["Andrei", "Mitica", "Gigi"];
        const int = Math.floor(Math.random()  * 3 );
        return names[int];
    
      }
      const handleclick = () => {
        console.log("you clicked it")
      }
  return (
    <main>
        <p>
            Hello {handlename()}!
        </p>
        <button className="button" onClick={handleclick}>Click me</button>
    </main>
  )
}

export default Content