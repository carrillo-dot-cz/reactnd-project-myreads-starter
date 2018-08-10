import React from 'react'

function ResultsSearch(props) {

    if (props.books.length > 0) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.readTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">

                    {props.books.map(book => (
                        <li key={book.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{
                                        width: 128,
                                        height: 193,
                                        //backgroundImage: 'url(' +
                                        //    (book.imageLinks.thumbnail === 'undefined') ? 'https://carrillo.cz/img/05c.png' : book.imageLinks.thumbnail

                                        //    + ')'

                                    }}></div>
                                    <div className="book-shelf-changer">
                                        <select value={book.shelf} readOnly >
                                            <option value="move" disabled>Move to...</option>
                                            <option value="currentlyReading"> Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.author}</div>
                            </div>
                        </li>
                    ))}
                </ol>

            </div>
        </div>

     )
    } else return <div></div>
} 

export default ResultsSearch