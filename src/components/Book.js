import React from 'react'

function Book(props) {
    // destructuring 
    const { img, title, author } = props

    const clickHandler = () => {
        alert(`Sorry bro, but you don\'t have enough cash for ${title}:(`)
    }
    return (
        <div className="book">
            <article className='book-cover'>
                <img src={img} alt='book' />
                <h1>{title}</h1>
                <h4>{author}</h4>
            </article>
            <div className='buy-section'>
                <button type='button' id='buyButton' onClick={clickHandler}>Buy</button>
            </div>
        </div>)
}


export default Book
