const { DataTypes } = require("sequelize");
const { sequelize } = require("../database");
const Author = require("./Author");
const Genre = require("./Genre");

const Book = sequelize.define("Book", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  yearOfPublication: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Author.hasMany(Book);
Book.belongsTo(Author, {
  foreignKey: "AuthorId",
});

Genre.belongsToMany(Book, {
  through: "book_genre",
  as: "books",
  foreignKey: "genre_id",
});
Book.belongsToMany(Genre, {
  through: "book_genre",
  as: "genres",
  foreingKey: "book_id",
});

module.exports = Book;
