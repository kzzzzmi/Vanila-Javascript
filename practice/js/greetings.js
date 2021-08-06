const mainForm = document.querySelector(".main-form");
const allNumber = document.querySelector("#allNumber");
const assignNumber = document.querySelector("#assignNumber");

const playingWindow = document.querySelector(".playingWindow");
const currentText = document.querySelector(".playingWindow span");
const resultText = document.querySelector(".playingWindow h3");

mainForm.addEventListener("submit", handleSubmitMainForm);

function handleSubmitMainForm(event) {
  event.preventDefault();
  const settingNum = allNumber.value;
  const goalNumber = parseInt(assignNumber.value);
  let randomNum = Math.floor(Math.random() * settingNum);
  currentText.innerText = `You chose : ${goalNumber}, the machine chose : ${randomNum}`;

  if (goalNumber === randomNum) {
    resultText.innerText = "You won!";
  } else {
    resultText.innerText = "You lost!";
  }

  playingWindow.classList.remove("hidden");
}
