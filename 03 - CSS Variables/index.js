// css 변수값을 컨트롤해보자.
// 자체 sass로 컴파일 되게함.
// QSA는 노드목록을 제공함./리스트는 아님.
const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  // dataset은 객체('data'라는 접두사를 포함하는 속성)
  const suffix = this.dataset.sizing || "";
  // 속성값을 조절. 이벤트를 달성하는 객체의 name값에 그 값에 suffix 변동값을 더해줌.
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
// 객체는 state를 나타내는 property와 동작을 나타내는 method를 하나의 논리적인 단위로 묶은 복합적인 자료구조.
