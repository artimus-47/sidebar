let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let light = document.querySelector("#light")

btn.onclick = function() {
  sidebar.classList.toggle("active");
}

light.addEventListener("click", () => {
  sidebar.classList.toggle("light");
});