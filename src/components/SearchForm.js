import React, { useState } from 'react'

// books db 
import { books } from '../books_db/books'
import Book from '../components/Book'


function SearchForm() {
    const [searchTerm, setSearchTerm] = useState("")
    const handleChange = event => {
        setSearchTerm(event.target.value)
    }

    const BooksCoverCards = books.map((book) => {
        return (
            <Book key={book.id} {...book} />// spreading properties 
        )
    })

    const kurwa = books.map((book) => {
        return ({ ...book })
    })

    const FilteredCoverCards = kurwa.filter((book) => {
        const { id, img, title, author } = book
        return (console.log({ id, title, author }), id, title, author)
    })

    const ForLoop = () => {
        const TempList = []
        BooksCoverCards.forEach((book) => {
            TempList.push(book.props.title + ' ' + book.props.author)
        })
        console.log('jebac', TempList)
        //console.log(book.props)
        return TempList
    }

    console.log(ForLoop())


    console.log(BooksCoverCards[0].props)
    console.log(BooksCoverCards)
    // console.log(FilteredCoverCards)
    //console.log(kurwa)

    const results = !searchTerm
        ? BooksCoverCards
        : BooksCoverCards.filter(person =>
            person.props.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        ) && BooksCoverCards.filter(person =>
            person.props.author.toLowerCase().includes(searchTerm.toLocaleLowerCase())
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
