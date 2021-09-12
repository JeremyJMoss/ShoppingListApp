let form = document.querySelector("form");
let shoppingList = document.querySelector(".shoppingList");

form.addEventListener("submit", function (ev) {
  /*prevent page from reloading*/
  ev.preventDefault();
  /*accessing the input using ev.target*/
  const shoppingItem = ev.target[0].value;
  if (shoppingItem === "") {
    return alert("The shopping item shouldn't be empty");
  }
  addShoppingItem(shoppingItem);
  /*removing value from input field before adding new item*/
  ev.target[0].value = "";
});

function addShoppingItem(item) {
  let div = document.createElement("div");
  div.classList.add("shopping_item");

  let p = document.createElement("p");
  p.innerText = item;

  let input = document.createElement("input");
  input.classList.add("editInput", "hide");
  input.value = item;

  let editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.classList.add("editBtn");
  editBtn.addEventListener("click", function () {
    input.classList.toggle("show");
    p.classList.toggle("hide");
  });

  input.addEventListener("keydown", function (ev) {
    if (ev.key === "Enter") {
      p.innerText = ev.target.value;
      input.classList.toggle("show");
      p.classList.toggle("hide");
    }
  });

  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", function (ev) {
    ev.target.parentNode.remove();
  });

  div.appendChild(p);
  div.appendChild(input);
  div.appendChild(editBtn);
  div.appendChild(deleteBtn);
  shoppingList.appendChild(div);
}
