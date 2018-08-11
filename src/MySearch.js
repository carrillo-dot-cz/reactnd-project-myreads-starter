import React from 'react'
import * as BooksAPI from './BooksAPI'
import ResultsSearch from './ResultSearch'
import { Link } from 'react-router-dom'

class MySearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            queryBooks: []
        }
      }

    handleChange(event, currentBooks) {
        this.setState({
            value : event
        })

         if (event !== '') {
            BooksAPI.search(event).then((b) => 
               this.setState((state) => (
                    {
                        queryBooks: b
                    }
            )
                
            ))

        } else {
            this.setState((state)=>(
                {
                queryBooks: []
                }
            ))
        }

    }

  
    render() {

      return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close </Link>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                      <input type="text" value={this.state.value} placeholder="Search by title or author" onChange={(e) => this.handleChange(e.target.value, this.props.currentBooks)} />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid"></ol>
              </div>
              <ResultsSearch books={this.state.queryBooks} />
            </div>
        )
    }
}


export default MySearch