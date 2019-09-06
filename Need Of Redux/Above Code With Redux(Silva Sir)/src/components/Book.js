import React from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';

const Book = props => {
    return (
   
      <li onClick={() => props.selectBook(props.book)}>
            
         <strong>Title: {props.book.title}</strong> 
            
                  Author: {props.book.author}

        </li>
    );
}

export default connect(null, {selectBook})(Book);