import React from 'react'

function Book(props) {
    // destructuring 
    const { img, title, author } = props

    const clickHandler = () => {
        alert('siemka')
    }
    return (
        <div>
            <article className='book'>
                <img src={img} alt='book' />
                <h1>{title}</h1>
                <h4>{author}</h4>
                <button type='button' onClick={clickHandler}>example</button>
            </article>

        </div>)
}


export default Book
