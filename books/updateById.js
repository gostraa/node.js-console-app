const getAll = require("./getAll");
const updateBooks = require("./updateBooks");

const updateById = async (id, title, author) => {
  const books = await getAll();
  const idxBookToUpdate = books.findIndex((item) => item.id === id);
  if (idxBookToUpdate === -1) {
    return null;
  }

  books[idxBookToUpdate] = { id, title, author };
  await updateBooks(books);
  return books[idxBookToUpdate];
};

module.exports = updateById;
