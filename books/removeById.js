const getAll = require("./getAll");
const updateBooks = require("./updateBooks");

const removeById = async (id) => {
  const books = await getAll();
  const idxBookToDelete = books.findIndex((item) => item.id === id);
  if (idxBookToDelete === -1) {
    return null;
  }
  const [removedBook] = books.splice(idxBookToDelete, 1);
  await updateBooks(books);
  return removedBook;
};

module.exports = removeById;
