const reviews = [
  {
    id: 1,
    name: "Rich K",
    Job: "Web Developer",
    img: "ric.jpg",
    text: "In follow up letter to CBC marketplace, Winners was able to verify every price for 20 out of the 21 items, by finding the items at the prices at comparable retailers. For the remaining item, Winners admitted that it was an error on their part and pledged to fix the mismatch.",
  },
  {
    id: 2,
    name: "Mira",
    Job: "Web Developer",
    img: "jos.jpg",
    text: "In follow up letter to CBC marketplace, Winners was able to verify every price for 20 out of the 21 items, by finding the items at the prices at comparable retailers. For the remaining item, Winners admitted that it was an error on their part and pledged to fix the mismatch.",
  },
  {
    id: 3,
    name: "Steph Kruger",
    Job: "Graphic Designer",
    img: "tam.jpg",
    text: "In follow up letter to CBC marketplace, Winners was able to verify every price for 20 out of the 21 items, by finding the items at the prices at comparable retailers. For the remaining item, Winners admitted that it was an error on their part and pledged to fix the mismatch.",
  },
  {
    id: 4,
    name: "Mike J",
    Job: "Web Designer",
    img: "mike.jpg",
    text: "In follow up letter to CBC marketplace, Winners was able to verify everyprice for 20 out of the 21 items, by finding the items at the prices at comparable retailers. For the remaining item, Winners admitted that it was an error on their part and pledged to fix the mismatch.",
  },
];

// selecting Items

const image = document.querySelector("#emp-img");
const author = document.querySelector("#author");
const job = document.querySelector("#job");
const info = document.querySelector("#info");
const prevBtnn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// set starting items

let currentItem = 3;

// Load Initial Items
window.addEventListener("DOMContentLoaded", () => {
  showEmploye(currentItem);
});

function showEmploye() {
  const item = reviews[currentItem];
  image.src = item.img;
  author.textContent = item.name;
  job.textContent = item.Job;
  info.textContent = item.text;
}

prevBtnn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }

  showEmploye(currentItem);
});
nextBtn.addEventListener("click", () => {
  currentItem++;

  if (currentItem >= reviews.length) {
    currentItem = 0;
  }
  showEmploye(currentItem);
});
