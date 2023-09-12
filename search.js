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
  let results = [];
  let added = new Set();

  fruit.forEach(function (val) {
    const lowerCaseVal = val.toLowerCase();
    if (lowerCaseVal.includes(str.toLowerCase()) && !added.has(lowerCaseVal)) {
      results.push(val);
      added.add(lowerCaseVal);
    }
  });
  return results;
}

function searchHandler(e) {
  const inputVal = e.target.value;
  const results = search(inputVal);
  showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
  suggestionsList.innerHTML = "";

  results.forEach(function (result) {
    const li = document.createElement("li");
    li.classList.add("has-suggestions");
    li.setAttribute("onclick", "useSuggestion(`" + result + "`)");

    let bold = "<b>" + result.substr(0, inputVal.length) + "</b>";
    let word = result.substr(inputVal.length);

    li.innerHTML = bold + word;
    suggestionsList.appendChild(li);
  });
}

function useSuggestion(e) {
  const chosenFruit = e.target.textContent;
  input.value = chosenFruit;
  suggestionsList.innerHTML = "";
}

input.addEventListener("input", searchHandler);
suggestionsList.addEventListener("click", useSuggestion);
