// window.addEventListener("keydown", function (e) {
//   // console.log(e.keyCode);
//   // 속성 선택기.
//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//   if (!audio) return; // stop the dunction from running all together
//   // 다시 누르면 오디오의 처음부분으로 되돌아갈 필요가 잇음
//   audio.currentTime = 0;
//   audio.play();
//   key.classList.add("playing");
// });

function playSound(e) {
  // console.log(e.keyCode);
  // 속성 선택기.
  // 키를 누른 이벤트에서 keyCode값을 data-key값으로 부여 변수로 할당
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // stop the dunction from running all together
  // 다시 누르면 오디오의 처음부분으로 되돌아갈 필요가 잇음
  // 이벤트가 다시 발생하면 0으로 초기화된 상태에서 다시 실행
  audio.currentTime = 0;
  // audio 시작
  audio.play();
  // key 엘리먼트의 클래스 속성명에 해당 문자열을 추가시킨다
  // key -> key playing
  // playing되면 css scale up이 작동됨.
  key.classList.add("playing");
  // add, remove , toggle,contains, replace
}

function removeTransition(e) {
  // console.log(e);
  if (e.propertyName !== "transform") return; //skip it if it's not a transform
  // console.log(e.propertyName);
  this.classList.remove("playing");
  // this 는 e인 key
}

// key클래스 가진 애들 전부 keys에 할당.
const keys = document.querySelectorAll(".key");
// keys에 든 요소 각각에 eventListener 부여. transition이 끝나면 remove transform 시킴.(애니메이션을 끝냄.)
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
// 모든 keydown 이벤트에 대해 playsound를 부여
window.addEventListener("keydown", playSound);

// classList 메소드
// const div = document.createElement("div");
// div.className = "foo";

// // our starting state: <div class="foo"></div>
// console.log(div.outerHTML);

// // use the classList API to remove and add classes
// div.classList.remove("foo");
// div.classList.add("anotherclass");

// // <div class="anotherclass"></div>
// console.log(div.outerHTML);

// // if visible is set remove it, otherwise add it
// div.classList.toggle("visible");

// // add/remove visible, depending on test conditional, i less than 10
// div.classList.toggle("visible", i < 10);

// console.log(div.classList.contains("foo"));

// // add or remove multiple classes
// div.classList.add("foo", "bar", "baz");
// div.classList.remove("foo", "bar", "baz");

// // add or remove multiple classes using spread syntax
// const cls = ["foo", "bar"];
// div.classList.add(...cls);
// div.classList.remove(...cls);

// // replace class "foo" with class "bar"
// div.classList.replace("foo", "bar");
