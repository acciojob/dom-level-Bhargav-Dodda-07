//your JS code here. If required.
// Function to calculate the DOM level of an element by ID
function calculateDOMLevelById(id) {
  const element = document.getElementById("level");
  
  if (!element) {
    alert("Element with ID not found.");
    return;
  }

  let domLevel = 1;
  let currentElement = element;

  while (currentElement !== document.documentElement) {
    currentElement = currentElement.parentElement;
    domLevel++;
  }

  alert(`The level of the element is: ${domLevel}`);
}

// Call the function with the ID "level"
calculateDOMLevelById("level");