const hambun = document.getElementById("bun");
const ul = document.querySelector("ul");

hambun.addEventListener("click", () => {
  ul.classList.toggle("ham_active");
  let = ham_child = bun.firstElementChild;

  if (ul.classList.contains("ham_active")) {
    ham_child.classList.replace("fa-burger", "fa-x");
  } 
  
  else ham_child.classList.replace("fa-x", "fa-burger");
  
});
