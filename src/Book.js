/*
    This file makes use of the named export. 
    It can be used multiple times in a same js file.
    This means the file name isn't enough for the index.js file to know which component we're looking for.
    We will need to use the component's exact name on import.
    The result will look like this: import { Book } from './Book'
                                                ^ exact name in curly braces
*/

// CSS
import './index.css'

// click Handler
const clickHandler = (title) => {
  alert(title)
}

// defractoring book
export const Book = ({ img, title, author, description }) => {
  return (
    <article>
      <img style={{ width: '350px' }} src={img} alt='' />
      <div className='Book-header'>
        <h3>{title}</h3>
        <h4>{author}</h4>
      </div>
      <p>{description}</p>
      <button type="button" onClick={() => clickHandler(title)}>See title</button>
    </article>
  )
}

/* 
In order to pass parameters to 
a function with the onClick 
property, you'll have to use
an arrow function. If you don't,
the function will run as soon
as you start the program.

Example (line 25):

onClick={() => clickHandler(title)}

Remember you can use onClick on 
any element! It's not good 
practice though.
*/