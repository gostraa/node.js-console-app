const { v4 } = require("uuid");

const getAll = require("./getAll");
const updateBooks = require("./updateBooks");

const add = async (title, author) => {
  const books = await getAll();
  const newBook = {
    id: v4(),
    title,
    author,
  };
  books.push(newBook);
  await updateBooks(books);
  return newBook;
};
module.exports = add;
