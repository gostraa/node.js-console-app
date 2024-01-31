to get list of books :
node app --actionType getAll

to get book by id :
node app --actionType getById --id (book's id of list)

to add a new book :
node app --actionType add --title "some title" --author "some author"

to update book :
node app --actionType updateById --id (book's id of list) --title "some title" --author "some author"

to delete a book :
node app --actionType removeById --id (book's id of list)
