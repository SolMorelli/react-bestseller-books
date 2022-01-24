/*
    This file makes use of the named export. 
    It can be used multiple times in a same js file.
    This means the file name isn't enough for the index.js file to know which component we're looking for.
    We will need to use the component's exact name on import.
    The result will look like this: import { Book } from './Book'
                                                ^ exact name in curly braces
*/

export const Book = ({ img, title, author, description }) => {
  // defractoring book

  // click Handler
  const clickHandler = () => {
    alert('title')
  }

  return (
    <article>
      <img style={{ width: '350px' }} src={img} alt='' />
      <div className='book-header'>
        <h3>{title}</h3>
        <h4>{author}</h4>
      </div>
      <p>{description}</p>
      <button type="button" onClick={clickHandler()}>See title</button>
    </article>
  )
}
