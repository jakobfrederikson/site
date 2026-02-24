// ================================
//        DISPLAY PROJECTS
// ================================
import projectsObj from './projects.json' with { type: 'json' };

let projectsDiv = document.getElementById("projects");

let projects = projectsObj["Projects"]
for (let project of projects) {
    let projectItem = document.createElement("div");
    projectItem.id = `${project.Title}`;

    let projectTitle = document.createElement("h3");
    projectTitle.textContent = `${project.Title}`;
    projectItem.appendChild(projectTitle);

    let projectLink = document.createElement("a");
    projectLink.textContent = `${project.Link}`;
    projectLink.setAttribute("href", `${project.Link}`);
    projectLink.setAttribute("target", "_blank");
    projectItem.appendChild(projectLink);

    let projectDesc = document.createElement("p");
    projectDesc.textContent = `${project.ShortDesc}`;
    projectItem.appendChild(projectDesc);

    projectsDiv.appendChild(projectItem);
}

// ================================
//      CREATE READING LIST
// ================================
import booksObj from './books.json' with { type: 'json' };

let readingList = document.getElementById("readingList");

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

        let publishDate = new Date(book.Published);
        const formattedDate = new Intl.DateTimeFormat('en-NZ', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        }).format(publishDate);

        let title = document.createElement("p");
        title.innerHTML = `<strong>${book.Title}</strong> - <strong>${book.Author}</strong> | ${formattedDate} <br> ${book.ShortReview}`;
        bookItem.appendChild(title);

        // I don't really care enough to write full reviews either!
        // let ratingReview = document.createElement("p");
        // ratingReview.innerHTML = `<strong>${book.NumberRating}</strong> - ${book.Review}`;
        // bookItem.append(ratingReview);

        contentDiv.appendChild(bookItem);
        let itemBreak = document.createElement("hr");
        contentDiv.append(itemBreak)
    }

    readingList.appendChild(contentDiv);
    let itemBreak = document.createElement("br");
    readingList.append(itemBreak)
}

// ================================
//      CREATE GAMES LIST
// ================================
import gamesObj from './gaming.json' with { type: 'json' };

let gamingList = document.getElementById("gamingList");
let games = gamesObj["Games"];

for (let i = 0; i < games.length; i++) {
    createAndAppendGameListItem(games[i])
}

function createAndAppendGameListItem(game) {
    let contentDiv = document.createElement("div");

    let gameItem = document.createElement("div");
    gameItem.id = `${game.Title}`

    let gameItemContent = document.createElement("p");
    gameItemContent.innerHTML = `<strong>${game.Title}</strong> - [<strong>${game.Platform}</strong>]  | ${game.ShortReview}`;

    gameItem.append(gameItemContent);

    contentDiv.append(gameItem);

    gamingList.append(contentDiv);

    let itemBreak = document.createElement("hr");
    gamingList.append(itemBreak)
}
