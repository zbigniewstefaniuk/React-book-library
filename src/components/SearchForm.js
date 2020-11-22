import React, { useState } from 'react'

// books db 
import { books } from '../books_db/books'
import Book from '../components/Book'

const people = [
    "Siri",
    "Alexa",
    "Google",
    "Facebook",
    "Twitter",
    "Linkedin",
    "Sinkedin"
]


function SearchForm() {
    const [searchTerm, setSearchTerm] = useState("")
    const handleChange = event => {
        setSearchTerm(event.target.value)
    }

    const BooksCoverCards = books.map((book) => {
        return (
            book.title,
            <Book key={book.id} {...book} />// spreading properties 
        )
    })    
    const {id, img, title } = BooksCoverCards
    console.log(BooksCoverCards)

    
    const results = !searchTerm
        ? BooksCoverCards
        : BooksCoverCards.filter(person =>
            person.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        )

    return (
        <div className="App">
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
            />
            <section className="book-list">
                {results.map(item => (
                    <li>{item}</li>
                ))}
            </section>
        </div>
    )
}

export default SearchForm
