import React from 'react'

function ResultsSearch(props) {

    if (props.books === undefined || props.books.length === undefined) {
        return <div></div>
    } else {
        return (
            <div className="bookshelf">
                 <div className="bookshelf-books">
                    <ol className="books-grid">

                        {props.books.map(book => (
                            <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{
                                            width: 128,
                                            height: 193,
                                            backgroundImage: (book.imageLinks !== undefined ? 'url(' + book.imageLinks.thumbnail + ')' : '')

                                        }}></div>
                                        <div className="book-shelf-changer">
                                            <select value={book.shelf} onChange={(e) => props.updateStageQuery(book, e.target.value)} >
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

    }
}

export default ResultsSearch