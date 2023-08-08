//1~100까지 랜덤번호 지정
//유저가 번호 입력 => 버튼
//랜덤번호 > 입력번호  ==> 업!!
//랜덤번호 < 입력번호 ==> 다운!!
//    ===    ===> 정답!!
//reset 버튼
//5번의 기회  => 게임 over // 버튼 불능
// 범위 밖 숫자 입력 ==> 기회를 깎지 않는다, 범위내 숫자 입력 안내
// 이미 입력한 숫자 입력 ==> 기회를 깎지 않는다, 안내한다

//1. 랜덤번호 설정

let computerNumber = 0;
let userNumberForm = document.querySelector(".user_number_form");
let userNumberInput = document.querySelector(".user_number_form_input");
let userNumberSubmit = document.querySelector(".user_number_form_submit");
let resetbtn = document.querySelector(".reset");
let result = document.querySelector(".result");

function randomNumber() {
  computerNumber = Math.ceil(Math.random() * 100);
  console.log(computerNumber);
}

randomNumber();

function play(event) {
  event.preventDefault();
  let userNumber = userNumberInput.value;
  console.log(userNumber);
  if (userNumber == computerNumber) {
    result.textContent = "정답";
    userNumberInput.value = null;
    return randomNumber();
  }
  if (userNumber > 100 || userNumber < 1) {
    result.textContent = "1~100까지의 숫자 입력";
  } else if (userNumber > computerNumber) {
    result.textContent = "DOWN";
  } else if (userNumber < computerNumber) {
    result.textContent = "UP";
  }
  userNumberInput.value = null;
}

userNumberSubmit.addEventListener("click", play);

function resetfunc(event) {
  event.preventDefault();
  userNumberInput.value = "";
  randomNumber();
  result.textContent = "시작";
}

resetbtn.addEventListener("click", resetfunc);
