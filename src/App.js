import React from 'react'
import './App.css';

const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/41aM4xOZxaL._SX277_BO1,204,203,200_.jpg',
  title: '1984',
  author: 'George Orwell'
}

const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51SYS7OOBkL._SX376_BO1,204,203,200_.jpg',
  title: 'Automate the Boring Stuff with Python',
  author: 'Al Sweigart'
}

const thirdBook = {
  img: 'https://m.media-amazon.com/images/I/51zWIiR62qL.jpg',
  title: 'Django 3 By Example: Build powerful and reliable Python web applications from scratch, 3rd Edition',
  author: 'Antonio Mele'
}

function App() {
  return (
    <div className="App">
      <header className="book-list">
        <Book
          img={firstBook.img}
          title={firstBook.title}
          author={firstBook.author} />
        <Book
          img={secondBook.img}
          title={secondBook.title}
          author={secondBook.author} />
        <Book
          img={thirdBook.img}
          title={thirdBook.title}
          author={thirdBook.author} />
      </header>
    </div>
  )
}

function Book(props) {

  return (
    <div>
      <article className='book'>
        <img src={props.img} alt='book' />
        <h1>{props.title}</h1>
        <h4>{props.author}</h4>
      </article>

    </div>)
}

export default App;
