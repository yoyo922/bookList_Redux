export function selectBook(book) {
  //selectbook is an actioncreator, return action
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
