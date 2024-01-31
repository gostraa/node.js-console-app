const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const booksOperations = require("./books");

const invokeAction = async ({ actionType, id, title, author }) => {
  switch (actionType) {
    case "getAll":
      const books = await booksOperations.getAll();
      console.table(books);
      break;
    case "getById":
      const book = await booksOperations.getById(id);
      if (!book) {
        throw new Error(`Product with id ${id} is not found`);
      }
      console.table(book);
      break;
    case "add":
      const newBook = await booksOperations.add(title, author);
      console.table(newBook);
      break;
    case "updateById":
      const updatedBook = await booksOperations.updateById(id, title, author);
      if (!updatedBook) {
        throw new Error(`Product with id ${id} is not found`);
      }
      console.table(updatedBook);
      break;
    case "removeById":
      const removedBook = await booksOperations.removeById(id);
      if (!removedBook) {
        throw new Error(`Product with id ${id} is not found`);
      }
      console.table(removedBook);
      break;

    default:
      console.log("unknown action");
      break;
  }
};

const arr = hideBin(process.argv);
const { argv } = yargs(arr);
invokeAction(argv);
