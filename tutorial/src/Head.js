import React from 'react'

export const Head = ( {title} ) => {
  return (
    <header>
        <h1> {title} </h1>
    </header>
  )
}
Head.defaultProps = {
  title: "Grocery List"
}
export default Head
