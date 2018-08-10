import React from 'react'
import * as BooksAPI from './BooksAPI'
import ResultsSearch from './ResultSearch';

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
            BooksAPI.search(event).then((b) => this.setState({
                queryBooks: b
        }))
            //this.setState({
            //    queryBooks: currentBooks
            //})
        } else {
            this.setState({
                queryBooks: []
            })
        }

        //BooksAPI.getAll().then((b) => this.setState({
        //    queryBooks: b
        //}))

    }

  
    render() {

      return (
            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search" onClick={() => this.props.updateSearch()}>Close</a>
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