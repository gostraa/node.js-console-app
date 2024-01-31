const filePath = require("./filePath");
const fs = require("fs/promises");

const updateBooks = async (books) => {
  await fs.writeFile(filePath, JSON.stringify(books));
};

module.exports = updateBooks;
