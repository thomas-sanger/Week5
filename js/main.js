document.addEventListener("DOMContentLoaded", function () {
  const items = [
    "Passport",
    "Tickets",
    "Sunglasses",
    "Camera",
    "Guidebook",
    "Clothes",
    "Toiletries",
    "Electronics",
    "Snacks",
  ];

  const divList = document.getElementById("div-list");
  const tallySpan = document.getElementById("tally");

  items.forEach((item) => {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = item;

    const label = document.createElement("label");
    label.htmlFor = item;
    label.textContent = item;

    const divItem = document.createElement("div");
    divItem.appendChild(checkbox);
    divItem.appendChild(label);

    divList.appendChild(divItem);

    checkbox.addEventListener("change", updateTally);
  });

  function updateTally() {
    const checkedItems = document.querySelectorAll("#div-list input:checked");
    tallySpan.textContent = `Total items checked: ${checkedItems.length}`;
  }
});
