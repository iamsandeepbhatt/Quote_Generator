let quote = document.querySelector(".quote");
let person = document.querySelector(".person");
let btn = document.querySelector("#new-quote");

const quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    person: "Oscar Wilde",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    person: "Albert Einstein",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    person: "Mae West",
  },
  {
    quote:
      "Friendship ... is born at the moment when one man says to another, What! You too? I thought that no one but myself . . .",
    person: "C.S. Lewis, The Four Loves",
  },
  {
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    person: "Mahatma Gandhi",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    person: "Mahatma Gandhi",
  },
  {
    quote:
      "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    person: "Martin Luther King Jr",
  },
  {
    quote: "Without music, life would be a mistake.",
    person: "Friedrich Nietzsche",
  },
  {
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    person: "Ralph Waldo Emerson",
  },
  {
    quote:
      "If you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    person: "Marilyn Monroe",
  },
];

btn.addEventListener("click", function () {
  let num = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[num].quote;
  person.innerHTML = quotes[num].person;
});
