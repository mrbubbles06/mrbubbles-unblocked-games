/*function darkModeToggle() {
  var element = document.body;
  var textElement = document.getElementById("darkmodeswitch");
  element.classList.toggle("opposite");

  if (textElement.innerHTML == "dark mode?") {
    textElement.innerHTML = "light mode?";
  } else if (textElement.innerHTML == "light mode?") {
    textElement.innerHTML = "dark mode?";
  }
}*/
function load() {
  let darkModeState = false;

  const button = document.querySelector(".darkmodeswitch");

  // MediaQueryList object
  const useDark = window.matchMedia("(prefers-color-scheme: dark)");

  // Toggles the "dark-mode" class
  function toggleDarkMode(state) {
    document.documentElement.classList.toggle("dark-mode", state);
    darkModeState = state;
    var textElement = document.querySelector(".darkmodeswitch");
    if (darkModeState == true) {
      textElement.innerHTML = "light mode?";
    } else if (darkModeState == false) {
      textElement.innerHTML = "dark mode?";
    }
  }

  // Sets localStorage state
  function setDarkModeLocalStorage(state) {
    localStorage.setItem("dark-mode", state);
  }

  // Initial setting
  toggleDarkMode(localStorage.getItem("dark-mode") == "true");

  if (localStorage.getItem("dark-mode") == null) {
    toggleDarkMode(useDark.matches);
  }
  // Listen for changes in the OS settings.
  // Note: the arrow function shorthand works only in modern browsers, 
  // for older browsers define the function using the function keyword.
  useDark.addListener((evt) => toggleDarkMode(evt.matches));

  // Toggles the "dark-mode" class on click and sets localStorage state
  button.addEventListener("click", () => {
    darkModeState = !darkModeState;

    toggleDarkMode(darkModeState);
    setDarkModeLocalStorage(darkModeState);
  });
}

window.addEventListener("DOMContentLoaded", load);