import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

// Our entire app is returned by this function
function App() {
  return (
    <main>
      <Header />
      <Booklist />
    </main>
  )
}

// Header component
const Header = () => {
  return (
    <header>
      <h1>Best sellers of Amazon</h1>
      <h2>Or, rather, only one of them</h2>
    </header>
  )
}

// The Booklist component makes use of the Book component
const Booklist = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article>
      <Image />
      <Description />
    </article>
  )
}

const Image = () => {
  return (
    <img
      style={{ width: '350px' }} // Inline CSS through a javascript object
      src='https://images-na.ssl-images-amazon.com/images/I/81gtzoeueoS._AC_UL604_SR604,400_.jpg'
      alt='A drawing of Betty White smiling with two dogs in her arms.'
    />
  )
}

const Description = () => {
  return (
    <>
      <div className='book-header'>
        <h3>My Little Golden Book About Betty White</h3>
        <h4>Deborah Hopkinson</h4>
      </div>
      <p>
        Help your little one dream big with a Little Golden Book biography about
        America's First Lady of Television, Betty White! The perfect
        introduction to nonfiction for preschoolers!
      </p>
    </>
  )
}

ReactDom.render(<App />, document.getElementById('root'))
