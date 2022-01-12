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
      <h2>
        But not <b>all</b> of them, I just don't have that kinda time right
        now...
      </h2>
    </header>
  )
}

// The Booklist component makes use of the Book component, and passes values to it
const Booklist = () => {
  return (
    <section className='booklist'>
      <Book
        img={bookInfo[0].img} // values passed to the Book component
        title={bookInfo[0].title}
        author={bookInfo[0].author.toUpperCase()} // for some reason, toUpperCase() breaks the code if included in Book, so I'm putting it here
        description={bookInfo[0].description}
      />
      <Book
        img={bookInfo[1].img}
        title={bookInfo[1].title}
        author={bookInfo[1].author.toUpperCase()}
        description={bookInfo[1].description}
      />
      <Book
        img={bookInfo[2].img}
        title={bookInfo[2].title}
        author={bookInfo[2].author.toUpperCase()}
        description={bookInfo[2].description}
      >
        <small style={{ color: 'red', display: 'block', marginTop: '1rem' }}>
          Out of stock
        </small>
      </Book>
      <Book
        img={bookInfo[3].img}
        title={bookInfo[3].title}
        author={bookInfo[3].author.toUpperCase()}
        description={bookInfo[3].description}
      />
      <Book
        img={bookInfo[4].img}
        title={bookInfo[4].title}
        author={bookInfo[4].author.toUpperCase()}
        description={bookInfo[4].description}
      />
      <Book
        img={bookInfo[5].img}
        title={bookInfo[5].title}
        author={bookInfo[5].author.toUpperCase()}
        description={bookInfo[5].description}
      />
    </section>
  )
}

// The Book component uses "props" as a placeholder object that contains the values passed in the parent component
const Book = ({ img, title, author, description, children }) => {
  /* 
    above is an example of object destructuring to avoid repeating "props" when accessing img, title, author or description
    
    another way to do this using an extra line of code:
      const Book = (props) => {
        const { img, title, author, description } = props
        ...
      }
  */
  return (
    <article>
      <img
        style={{ width: '350px' }} // Inline CSS through a javascript object
        src={img}
        alt=''
      />
      {children}
      <div className='book-header'>
        <h3>{title}</h3>
        <h4>{author}</h4>
      </div>
      <p>{description}</p>
    </article>
  ) // children is being used to reference the <small> element
}

// Book info - array of objects, each of which contains information on the books to be displayed
const bookInfo = [
  {
    title: 'My Little Golden Book About Betty White',
    author: 'Deborah Hopkinson',
    description:
      "Help your little one dream big with a Little Golden Book biography about America's First Lady of Television, Betty White! The perfect introduction to nonfiction for preschoolers!",
    img: 'https://images-na.ssl-images-amazon.com/images/I/81gtzoeueoS._AC_UL604_SR604,400_.jpg',
  },
  {
    title: 'Who Are Your People?',
    author: 'Bakari Sellers',
    description:
      'This inspiring picture book by New York Times bestselling author Bakari Sellers is a tribute to the family and community that help make us who we are. Perfect for sharing and gifting.',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71zK1CMRFTL._AC_UL604_SR604,400_.jpg',
  },
  {
    title: 'I Love You to the Moon and Back',
    author: 'Amelia Hepworth',
    description:
      'Show a child just how strong your love is every minute of the day! Features a "To" and "From" personalization page, making this sweet offering an ideal gift for baby showers, birthdays, and new parents.',
    img: 'https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg',
  },
  {
    title: 'The Very Hungry Caterpillar',
    author: 'Eric Carle',
    description:
      'THE all-time classic picture book, from generation to generation, sold somewhere in the world every 30 seconds! A sturdy and beautiful book to give as a gift for new babies, baby showers, birthdays, and other new beginnings!',
    img: 'https://images-na.ssl-images-amazon.com/images/I/91vnzZO5yPL._AC_UL604_SR604,400_.jpg',
  },
  {
    title: "Little Blue Truck's Valentine'",
    author: 'Alice Schertle',
    description:
      "Spread the love with Little Blue Truck—a perfect Valentine's Day read-aloud in this best-selling series!",
    img: 'https://images-na.ssl-images-amazon.com/images/I/51SSq9F8oPL._SY455_BO1,204,203,200_.jpg',
  },
  {
    title: 'The Wonderful Things You Will Be',
    author: 'Emily Winfield Martin',
    description:
      "The New York Times bestseller that celebrates the dreams, acceptance, and love that parents have for their children . . . now and forever. This is the perfect heartfelt Valentine's day gift for kids of all ages, plus a great choice for baby showers, birthdays, graduations, and other new beginnings!",
    img: 'https://images-na.ssl-images-amazon.com/images/I/51gEY86ijML._SX474_BO1,204,203,200_.jpg',
  },
]

ReactDom.render(<App />, document.getElementById('root'))
