// 랜덤숫자설정
// 유저 숫자 입력
// 버튼 -> 숫자 비교 함수
//   up down 정답 안내
//   범위 밖 숫자 입력 -> 안내

let randomNumber;

function randomNumbermake() {
  randomNumber = Math.ceil(Math.random() * 100);
  console.log(randomNumber);
}

randomNumbermake();

let userNumber;
let chance = 5;
let history = [];

let userNumberInput = document.querySelector(".user-number__input");
let userNumberBtn = document.querySelector(".user-number__Btn");
let userNumberReset = document.querySelector(".user-number__reset");
let arrow = document.querySelector(".arrow");

let result = document.querySelector(".result");
let restChance = document.querySelector(".chance");

function getUserNumber(event) {
  event.preventDefault();

  userNumber = userNumberInput.value;

  console.log(userNumber);
  if (userNumber == null || userNumber == undefined) {
    result.textContent = "Input Number";
    return;
  }

  if (userNumber < 1 || userNumber > 100) {
    result.textContent = "Input 1~100";
    return;
  }

  if (history.includes(userNumber)) {
    result.textContent = `${userNumber} is used`;
    return;
  }

  if (userNumber > randomNumber) {
    result.textContent = "DOWN!!";
    arrow.className = "arrow-down";
  } else if (userNumber < randomNumber) {
    result.textContent = "UP!!";
    arrow.className = "arrow-up";
  } else {
    result.textContent = "Correct!!";
    userNumberBtn.disabled = true;
    return;
  }

  history.push(userNumber);

  ChanceMinus();
  if (chance < 1 && userNumber !== randomNumber) {
    userNumberBtn.disabled = true;
    result.textContent = "실패";
    return;
  }
}

function ChanceMinus() {
  chance--;
  restChance.textContent = `Chance ${chance}`;
}

function setUp(event) {
  event.preventDefault();
  randomNumbermake();
  chance = 5;
  restChance.textContent = `Chance ${chance}`;
  result.textContent = "Start!!";
  userNumberBtn.disabled = false;
  history = [];
  if (arrow.className === "arrow-up") {
    arrow.className = "arrow-up-to-reset";
  } else if (arrow.className === "arrow-down") {
    arrow.className = "arrow-down-to-reset";
  }
}

userNumberBtn.addEventListener("click", getUserNumber);
userNumberReset.addEventListener("click", setUp);
userNumberInput.addEventListener("focus", function () {
  userNumberInput.value = null;
  if (arrow.className === "arrow-up") {
    arrow.className = "arrow-up-to-reset";
  } else if (arrow.className === "arrow-down") {
    arrow.className = "arrow-down-to-reset";
  }
});
