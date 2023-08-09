//1~100까지 랜덤번호 지정
//유저가 번호 입력 => 버튼
//랜덤번호 > 입력번호  ==> 업!!
//랜덤번호 < 입력번호 ==> 다운!!
//    ===    ===> 정답!!
//reset 버튼
//5번의 기회  => 게임 over // 버튼 불능
// 범위 밖 숫자 입력 ==> 기회를 깎지 않는다, 범위내 숫자 입력 안내
// 이미 입력한 숫자 입력 ==> 기회를 깎지 않는다, 안내한다

let computerNumber = 0;
let chance = 5;
let gameOver = false;
let history = [];

let userNumberForm = document.querySelector(".user_number_form");
let userNumberInput = document.querySelector(".user_number_form_input");
let userNumberSubmit = document.querySelector(".user_number_form_submit");

let resetbtn = document.querySelector(".reset");
let chanceRest = document.querySelector(".chance__rest");
let result = document.querySelector(".result");

function randomNumber() {
  computerNumber = Math.ceil(Math.random() * 100);
  console.log(computerNumber);
}

randomNumber();

function play(event) {
  event.preventDefault();
  let userNumber = userNumberInput.value;

  if (userNumber > 100 || userNumber < 1) {
    result.textContent = "1~100까지의 숫자 입력";
    return;
  }

  if (history.includes(userNumber)) {
    result.textContent = "이미 입력한 숫자 입니다";
    return;
  }

  if (userNumber == computerNumber) {
    result.textContent = "정답";
    userNumberSubmit.disabled = true;
    return randomNumber();
  }

  if (userNumber > computerNumber) {
    result.textContent = "DOWN";
  } else if (userNumber < computerNumber) {
    result.textContent = "UP";
  }

  history.push(userNumber);

  chance--;
  chanceRest.innerText = chance;

  if (chance < 1) {
    gameOver = true;
  }
  if (gameOver == true) {
    userNumberSubmit.disabled = true;
  }
}

function resetfunc(event) {
  event.preventDefault();
  userNumberInput.value = "";
  randomNumber();
  result.textContent = "시작";
  userNumberSubmit.disabled = false;
  chance = 5;
  chanceRest.innerText = chance;
  history = [];
}

userNumberSubmit.addEventListener("click", play);

resetbtn.addEventListener("click", resetfunc);

userNumberInput.addEventListener("focus", function () {
  userNumberInput.value = null;
});
