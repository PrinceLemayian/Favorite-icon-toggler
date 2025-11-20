# Emoji Heart Reactor

A simple interactive web project where users can "like" items by clicking on heart buttons. Each heart toggles between empty (♡) and filled (♥) states.

---

## Features

- Clickable heart buttons to "like" items
- Each button toggles independently between empty and filled
- Real-time visual feedback with a color change and heart symbol swap
- Reusable JavaScript function for handling toggle logic

---

## How It Works

- Each button has the class `.favorite-icon`
- JavaScript `addClass` function checks if a button has the `filled` class

  - If not, it adds the class and updates the inner HTML to a filled heart (`♥`)
  - If it does, it removes the class and updates back to empty heart (`♡`)

- Event listeners are attached to all buttons using `forEach`
- CSS handles the visual styles for empty and filled hearts

---

## Technologies Used

- HTML
- CSS
- JavaScript (vanilla)

---

## Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/emoji-heart-reactor.git
   ```

2. Open `index.html` in your browser
3. Click on any heart button to toggle its state

---

## CSS Example

```css
.favorite-icon {
  font-size: 2rem;
  background: none;
  border: none;
  color: #aaa; /* empty heart color */
  cursor: pointer;
}
.favorite-icon.filled {
  color: red; /* filled heart color */
}
```

---

## JavaScript Example

```js
const btns = document.querySelectorAll(".favorite-icon");

function addClass(btn) {
  if (!btn.classList.contains("filled")) {
    btn.classList.add("filled");
    btn.innerHTML = "&#10084;";
  } else {
    btn.classList.remove("filled");
    btn.innerHTML = "&#9825;";
  }
}

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    addClass(btn);
  });
});
```

---

## Author

Lemayian Prince – (https://github.com/PrinceLemayian)
