import React from 'react';
import { connect } from 'react-redux';
import delBook from '../actions/index2'
const BookDetails = (props) => {
   
    if (!props || !props.book) {
   
        return (
            <div>
                No book selected
            </div>
        )
    }

   
    return (
        <div>
            <h3>{props.book.title}</h3>
            Author: {props.book.author}
           <button onClick={()=>props.delBook(props.book)}>Hide BookDetails</button>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        book: state.selectedBook,
        }
}

export default connect(mapStateToProps,{delBook})(BookDetails);