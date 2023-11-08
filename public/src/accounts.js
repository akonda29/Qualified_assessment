function findAccountById(accounts, id) {
   // YOUR SOLUTION HERE
  // Hint: You can use the [`find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) method here. 

    const found = accounts.find(account => account.id == id )
    return found;
  }
  
  function sortAccountsByLastName(accounts) {
    // YOUR SOLUTION HERE
  // Hint: You can use the [`sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) method here.
    return accounts.sort((name1, name2) => name1.name.last.toLowerCase() > name2.name.last.toLowerCase() ? 1 : -1);
  }
  
  function getAccountFullNames(accounts) {
    // YOUR SOLUTION HERE
    // Hint: You can use the [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method here.
    const fullName = accounts.map((account) => (`${account.name.first} ${account.name.last}`));
    return fullName;
  }
 
  // NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}
  
  function getBooksPossessedByAccount(account, books, authors) {
    let possessedBooks = [];
    books.forEach((book) => {
      const {id, title, genre, borrows} = book;
      borrows.forEach((borrow) => {
        if (borrow.id === account.id && borrow.returned === false) {
          authors.forEach(author => {
            if (author.id == book.authorId) {
              let tempBook = {id, title, genre, author, borrows};
              possessedBooks.push(tempBook);
            }
          })
        }
      })
    })
    return possessedBooks;
  }
  
  module.exports = {
    findAccountById,
    sortAccountsByLastName,
    getAccountFullNames,
    getTotalNumberOfBorrows,
    getBooksPossessedByAccount,
  };
