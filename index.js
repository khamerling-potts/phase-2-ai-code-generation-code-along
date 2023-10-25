/** A Book object representation
 * @typedef {Object} Book
 * @property {string} title - The title of the book
 * @property {string} author - The author of the book
 * @property {string} genre - The genre of the book
 */

/**
 * @param {string} genre - The genre of books required
 * @param {Book[]} books - An array of Book objects
 * @returns {Book[]} - An array of Book objects
 */
function filterByGenre(genre, books) {
  return books.filter((book) => book.genre === genre);
}
