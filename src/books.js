/*
    This file makes use of the named export. 
    It can only be used once in the same js file.
    We don't need to use its exact name when imported, we can change
    the name in the file we use it because we're only exporting one
    thing at a time.
    The result will look like this: import { Book } from './Book'
                                                ^ exact name in curly braces
*/

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

export default books
