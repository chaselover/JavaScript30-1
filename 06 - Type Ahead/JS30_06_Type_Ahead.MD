# Type Ahead

## input form

```html
    <form class="search-form">
      <input type="text" class="search" placeholder="City or State" />
      <ul class="suggestions">
        <li>Filter for a city</li>
        <li>or a state</li>
      </ul>
    </form>
```

* form 태그로 검색창을 만듭니다.

* 자동완성을 구현할 것임.
* filter로 DB에 있는 모든 검색어 중 일치하는 prefix를 가진 모든 문자열을 나열.



## cities DB

```js
const endpoint =     "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));
```

fetch로 endpoint에 있는 data를 받아와 변환합니다. blob뭉치를 jon()으로 변환하고 그 결과값을 data인자로 받아 ...data(파이썬의 unpack과 유사)러 cities배열에 push 해줍니다.



## events

```js
const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
```

* search클래스를 가진 input box가 변하거나 key가 눌릴때마다 displayMatches를 불러옵니다.





## displayMatch

```js
      function displayMatches() {
        // console.log(this.value);
        const matchArray = findMatches(this.value, cities);
        // console.log(matchArray);
        const html = matchArray
          .map((place) => {
            // 정규식에서 gi와 일치하는 값을
            const regex = new RegExp(this.value, "gi");
            // hl를 덧씌운 value값으로 대체한다.
            const cityName = place.city.replace(
              regex,
              `<span class="hl">${this.value}</span>`
            );
            const stateName = place.state.replace(
              regex,
              `<span class="hl">${this.value}</span>`
            );
            return `
            <li>
              <span class="name">${cityName}, ${stateName}</span>
              <span class="population">${numberWithCommas(
                place.population
              )}</span>
            </li>
          `;
          })
          .join("");
        suggestions.innerHTML = html;
      }
```

* findMatch로 받아온 매치된 문자열 배열에서 정규식을 통해 검색값과 일치하는 값을 span class hl이 들어간 태그로 변경시킵니다(강조를 위해)

* suggestions(suggestions class를 가진 태그) 에 innerhtml을 통해 새로 만든 html return 값을 주입시킵니다.



## findMatches

```js
      function findMatches(wordToMatch, cities) {
        // search된 것과 일치하는 것을 표시해야함.
        return cities.filter((place) => {
          const regex = new RegExp(wordToMatch, "gi");
          return place.city.match(regex) || place.state.match(regex);
        });
      }
      // fetch는 promise를 반환함.

      function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
```

* 매칭시킬 패턴인 wordTomatch와 cities에서 일치하는 요소들을 filter해 리턴합니다.

* RegExp는 정규표현식 객체를 생성합니다.
  * ```js
    let re = /\w+/
    let re = new RegExp('\\w+')
    ```

    

