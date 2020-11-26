import React from 'react'
import './App.css';

// books db 
import { books } from './books_db/books'

// React components
import Book from './components/Book'
import SearchForm from './components/SearchForm'


function App() {
  return (
    <div className="App">
      <SearchForm />
    </div>
  )
}



function AppUnused() {
  return (
    <div className="App">
      <section className="book-list">
        {books.map((book) => {
          return (
            <Book key={book.id} {...book} />// spreading properties 
          )
        })}
      </section>
    </div>
  )
}



export default App
