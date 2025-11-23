// Using method to update data:
const book = {
    title : "JS",
    pages : 250,

    updatepages(newpages){
        this.pages = newpages;
    }
};
book.updatepages(300);
console.log(book.pages);