import booksObj from './books.json' with { type: 'json' };

let booksList = document.getElementById("books");

console.log(booksObj);
let books = booksObj['Books'];
for (const [year, list_of_books] of Object.entries(books)) {
    createBookReviewsByYear(year, list_of_books);
}

function createBookReviewsByYear(year, list_of_books) {
    let contentDiv = document.createElement("div");
    contentDiv.id = `${year}-book-reviews`

    let readingYear = document.createElement("h2");
    readingYear.textContent = year;

    contentDiv.appendChild(readingYear);

    for (const book of list_of_books)
    {
        let bookItem = document.createElement("div");
        bookItem.id = `${book.Title}`

        let title = document.createElement("h4");
        title.textContent = `${book.Title} | ${book.Author}`;
        bookItem.appendChild(title);

        // Who cares about the publish date?
        // -----------------------------------
        // let publishDate = new Date(book.Published);
        // const formattedDate = new Intl.DateTimeFormat('en-NZ', {
        //     day: '2-digit',
        //     month: 'long',
        //     year: 'numeric'
        // }).format(publishDate);
        // let published = document.createElement("p");
        // published.innerHTML = `<small>${formattedDate}</small>`;
        // bookItem.appendChild(published);

        let ratingReview = document.createElement("p");
        ratingReview.innerHTML = `<strong>${book.NumberRating}</strong> - ${book.Review}`;
        bookItem.append(ratingReview);


        contentDiv.appendChild(bookItem);
    }

    booksList.appendChild(contentDiv);
}

