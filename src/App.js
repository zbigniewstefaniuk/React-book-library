import React from 'react'
import './App.css';


const books = [{
  img: 'https://images-na.ssl-images-amazon.com/images/I/41aM4xOZxaL._SX277_BO1,204,203,200_.jpg',
  title: '1984',
  author: 'George Orwell'
},
{
  img: 'https://images-na.ssl-images-amazon.com/images/I/51SYS7OOBkL._SX376_BO1,204,203,200_.jpg',
  title: 'Automate the Boring Stuff with Python',
  author: 'Al Sweigart'
},
{
  img: 'https://m.media-amazon.com/images/I/51zWIiR62qL.jpg',
  title: 'Django 3 By Example: Build powerful and reliable Python web applications from scratch, 3rd Edition',
  author: 'Antonio Mele'
}]

function App() {
  return (
    <div className="App">
      <section className="book-list">
        {books.map((book) => {
          const { img, title, author } = book
          return (
            <Book book={book} />
          )
        })}
      </section>
    </div>
  )
}

function Book(props) {
  // destructuring 
  const { img, title, author } = props.book
  return (
    <div>
      <article className='book'>
        <img src={img} alt='book' />
        <h1>{title}</h1>
        <h4>{author}</h4>
      </article>

    </div>)
}

export default App;
