// Create all the action creaters

export  function selectBook(book) {
   
    return {
        type: 'SELECT_BOOK',
        payload: book
    };
}

