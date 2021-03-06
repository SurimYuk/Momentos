const form = document.querySelector(".js-greetingForm"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser"; //user local storage
const SHOWING_CN = "showing"; //showing class name

function saveName(text) {
  localStorage.setItem(USER_LS, text); //localStorage: based on URLs
}

function handleSubmit(event) {
  event.preventDefault(); //prevent automatical refreshing which is done by form event
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello, ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS); //string
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
