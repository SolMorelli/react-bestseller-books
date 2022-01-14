import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

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
        const { img, title, author, description } = book
        return <Book id={Book.id} {...book} /> // passing the book object as props through the spread operator
      })}
    </section>
  )
}

const Book = (img, title, author, description) => {
  // defractoring book
  return (
    <article>
      <img style={{ width: '350px' }} src={img} alt='' />
      <div className='book-header'>
        <h3>{title}</h3>
        <h4>{author}</h4>
      </div>
      <p>{description}</p>
    </article>
  )
}

const books = [
  {
    id: 1,
    title: 'My Little Golden Book About Betty White',
    author: 'Deborah Hopkinson',
    description:
      "Help your little one dream big with a Little Golden Book biography about America's First Lady of Television, Betty White! The perfect introduction to nonfiction for preschoolers!",
    img: 'https://images-na.ssl-images-amazon.com/images/I/81gtzoeueoS._AC_UL604_SR604,400_.jpg',
  },
  {
    id: 2,
    title: 'Who Are Your People?',
    author: 'Bakari Sellers',
    description:
      'This inspiring picture book by New York Times bestselling author Bakari Sellers is a tribute to the family and community that help make us who we are. Perfect for sharing and gifting.',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71zK1CMRFTL._AC_UL604_SR604,400_.jpg',
  },
  {
    id: 3,
    title: 'I Love You to the Moon and Back',
    author: 'Amelia Hepworth',
    description:
      'Show a child just how strong your love is every minute of the day! Features a "To" and "From" personalization page, making this sweet offering an ideal gift for baby showers, birthdays, and new parents.',
    img: 'https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg',
  },
  {
    id: 4,
    title: 'The Very Hungry Caterpillar',
    author: 'Eric Carle',
    description:
      'THE all-time classic picture book, from generation to generation, sold somewhere in the world every 30 seconds! A sturdy and beautiful book to give as a gift for new babies, baby showers, birthdays, and other new beginnings!',
    img: 'https://images-na.ssl-images-amazon.com/images/I/91vnzZO5yPL._AC_UL604_SR604,400_.jpg',
  },
  {
    id: 5,
    title: "Little Blue Truck's Valentine'",
    author: 'Alice Schertle',
    description:
      "Spread the love with Little Blue Truck—a perfect Valentine's Day read-aloud in this best-selling series!",
    img: 'https://images-na.ssl-images-amazon.com/images/I/51SSq9F8oPL._SY455_BO1,204,203,200_.jpg',
  },
  {
    id: 6,
    title: 'The Wonderful Things You Will Be',
    author: 'Emily Winfield Martin',
    description:
      "The New York Times bestseller that celebrates the dreams, acceptance, and love that parents have for their children . . . now and forever. This is the perfect heartfelt Valentine's day gift for kids of all ages, plus a great choice for baby showers, birthdays, graduations, and other new beginnings!",
    img: 'https://images-na.ssl-images-amazon.com/images/I/51gEY86ijML._SX474_BO1,204,203,200_.jpg',
  },
]

ReactDom.render(<App />, document.getElementById('root'))
