import React from 'react';
import { Component } from 'react';
import Book from './Book';
import BookDetails from './BookDetails';
import { connect } from 'react-redux';


class App extends Component {

    render() {
        let books = this.props.myBookList.map( bookk => <Book  book={bookk} />);
        return (
            <div>
                <ul>
                    {books}
                </ul>
                <div>
                    <BookDetails />
                    
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        myBookList: state.bookList
       
    }
}


export default connect(mapStateToProps)(App);