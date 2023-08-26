var list = [
  "Apple", "Apricot", "Avocado", "Banana", "Blueberry", "Cherry", "Coconut",
  "Cranberry", "Durian", "Fig", "Grape", "Guava", "HoneyDew", "Lemon",
  "Lime", "Lychee", "Mango", "Nectarine"
];

function getFruitsForPage(pageNumber) {
  var fruitsPerPage = 4;
  var startIndex = (pageNumber - 1) * fruitsPerPage;
  var endIndex = startIndex + fruitsPerPage;
  
  return list.slice(startIndex, endIndex);
}

var pageNumber = 2; // Replace with the desired page number
var fruitsOnPage = getFruitsForPage(pageNumber);

console.log(`Fruits on page ${pageNumber}:`, fruitsOnPage);
