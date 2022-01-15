import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'

// JS
import { Book } from './Book' // We need to use curly braces and the exact name we gave the component
import books from './components' // We can change the name of the list as we import it

function App() {
  return (
    <main>
      <Header />
      <Booklist />
    </main>
  )
}

const Header = () => {
  return (
    <header>
      <h1>Best sellers of Amazon</h1>
      <h2>
        But not <b>all</b> of them, I just don't have that kinda time right
        now...
      </h2>
    </header>
  )
}

const Booklist = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book} /> // passing the book object as props through the spread operator
      })}
    </section>
  )
}

ReactDom.render(<App />, document.getElementById('root'))
