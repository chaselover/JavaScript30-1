# Image_Gallary

## script

```js
    <script>
      const panels = document.querySelectorAll(".panel");

      function toggleOpen() {
        this.classList.toggle("open");
      }

      function toggleActive(e) {
        console.log(e.propertyName);
        if (e.propertyName.includes("flex")) {
          this.classList.toggle("open-active");
        }
      }
      panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
      panels.forEach((panel) =>
        panel.addEventListener("transitionend", toggleActive)
      );
    </script>
```

* 각 panel들을 가져와 각각에 click event 나 transition 이벤트가 끝났을 떄 특정한 함수를 실행시켜 claa를 부여, 선택자를 동적으로 선택할 생각입니다. 

## css

```css
      /* Flex Children */
      .panel > * {
        margin: 0;
        width: 100%;
        transition: transform 0.5s;
        /* border: 1px solid red; */
        flex: 1 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .panel > *:first-child {
        transform: translateY(-100%);
      }

      .panel.open-active > *:first-child {
        transform: translateY(0);
      }

      .panel > *:last-child {
        transform: translateY(100%);
      }

      .panel.open-active > *:last-child {
        transform: translateY(0);
      }

```

* panel에 open-active를 주면 child들이 제자리로 돌아오게 끔 할 예정입니다.

## HTML

```html
    <div class="panels">
      <div class="panel panel1">
        <p>Hey</p>
        <p>Let's</p>
        <p>Dance</p>
      </div>
```

패널의 각 자식 요소들의 위치를 transform을 이용해 동적 효과를 줄 예정입니다.
