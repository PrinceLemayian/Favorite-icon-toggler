const btns = document.querySelectorAll(".favorite-icon");

function addClass(btn) {
  // btn.classList.toggle("filled");
  if (!btn.classList.contains("filled")) {
    btn.classList.add("filled");
    btn.innerHTML = "&#10084;";
  } else {
    btn.classList.remove("filled");
    btn.innerHTML = "&#9825;";
  }
}

btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    addClass(btn);
  })
);
