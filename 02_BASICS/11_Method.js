const book = {
  title: "Javascript",
  author: "Saniya",
  year: 2025,

  // method
  getDetails: function () {
    return `${this.title} by ${this.author}, published in ${this.year}`;
  }
};

console.log(book.getDetails());

