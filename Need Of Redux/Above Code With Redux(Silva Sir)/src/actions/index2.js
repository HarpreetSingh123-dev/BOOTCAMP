
export  default function delBook(book) {

    console.log("we are in delete action");
   
    return {
        type: 'DEL_BOOK',
        payload: book
    };
}