// Joshua Gregory
// Professor Montgomery
// Internet Programming
// Assignment 10: Bootstrap

const displayInput = () => {
  // find inputs in dom
  const faveBook = document.getElementById("book");
  const rateFilm = document.getElementById("rate-film");
  const userMail = document.getElementById("email");

  // find empty p tags in dom
  const p1 = document.getElementById("fave-book");
  const p2 = document.getElementById("film-rate");
  const p3 = document.getElementById("email-inp");

  // replace the empty p tags with input values
  p1.innerHTML = "Favorite Isaac Asimov book: " + book.value;
  p2.innerHTML = "Rating of the film 'I, Robot': " + rateFilm.value;
  p3.innerHTML = "Email: " + email.value;
};
