import React from 'react'

function MyReads(props) {
	return (
      <div className="bookshelf">
      <h2 className="bookshelf-title">{props.readTitle}</h2>
	  <div className="bookshelf-books">
		 
	   <ol className="books-grid">
		 {props.books.map(book =>(
			 <li key={book.id}>
				<div className="book">
					<div className="book-top">
					   <div className="book-cover" style={book.styleBook}></div>
						   <div className="book-shelf-changer">
                                        <select value={book.shelf} onChange={(e) => props.updateStage(book, e.target.value)}>
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
 )}

export default MyReads