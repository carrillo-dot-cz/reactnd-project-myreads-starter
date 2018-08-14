import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MyReads from './MyReads'
import MySearch from './MySearch'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
 

class BooksApp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            books: [],
            refresh: false
        }
    }

    RefreshMe = (e) => {
        e.preventDefault();
        this.forceUpdate()
    }

    updateStage = (book, e) => {
        BooksAPI.update(book, e).then(() => {
            this.setState((state) => ({
                books: state.books.map((b) => (
                    {
                        id: b.id,
                        title: b.title,
                        author: b.author,
                        shelf: (b.id === book.id ? e : b.shelf),
                        imageLinks: b.imageLinks
                    }
                ))
            }))
        })
        
    }
 

    componentDidMount() {
        BooksAPI.getAll().then((b) => this.setState({
            books: b
        }))
    }


    render() {
        return (
            <div className="app">
                <Route path="/" exact render={() => (
                        <div className="list-books">
                            <div className="list-books-title">
                                <h1>MyReads</h1>
                            </div>
                            <div className="list-books-content">
                                <MyReads readTitle="Currently Reading" books={this.state.books.filter(x => x.shelf === 'currentlyReading')} updateStage={this.updateStage} />
                                <MyReads readTitle="Want to Read" books={this.state.books.filter(x => x.shelf === 'wantToRead')} updateStage={this.updateStage} />
                                <MyReads readTitle="Read" books={this.state.books.filter(x => x.shelf === 'read')} updateStage={this.updateStage} />
                            </div>
                            <div className="open-search">
                                <Link to="search">
                                    Add a book!
                                </Link>
                            </div>
                        </div>
                    )
                } />
                <Route path="/search" render={() => <MySearch currentBooks={this.state.books} updateStage={this.updateStage} RefreshMe={this.RefreshMe} />} />
            </div>
        )
    }
}

export default BooksApp