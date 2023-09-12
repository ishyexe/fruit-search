const input = document.querySelector("#fruit");
const suggestionsList = document.querySelector(".suggestions ul");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function search(str) {
  str = str.toLowerCase();
  return fruit.filter((val) => val.toLowerCase().includes(str));
} // i made the string filer through the fruit array to accept lower case fruit values/letters that the user includes

function searchHandler(e) {
  const inputVal = e.target.value;
  const results = search(inputVal);
  showSuggestions(results, inputVal);
} // the results will show what's in the inputVal (what the user put into the search bar)

function showSuggestions(results, inputVal) {
  suggestionsList.innerText = ""; // this is so that the results are reset when this function is run (because the user didn't submit what they entered?)

  results.forEach(function (result) {
    let li = document.createElement("li");
    li.classList.add("has-suggestions");
    li.setAttribute("onclick", "useSuggestion(`" + result + "`)"); // ?

    let bold = "<b>" + result.substr(0, inputVal.length) + "</b>"; // ?
    let word = result.substr(inputVal.length); // ?

    li.innerHTML = bold + word;
    suggestionsList.appendChild(li);
  });
} // each time a user enters a key that's included in the string this function should show the results for each value within an li element

function useSuggestion(e) {
  const chosenFruit = e.target.textContent; // ?
  input.value = chosenFruit;
  suggestionsList.innerText = "";
}

input.addEventListener("input", searchHandler); // event listener for when the user presses their key in the search bar
suggestionsList.addEventListener("click", useSuggestion); // event listener for when the user clicks on the predicted suggestion so that it's diplayed in the search bar
