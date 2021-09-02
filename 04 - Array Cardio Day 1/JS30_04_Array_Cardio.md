# Array_Cardio

## 1. filter

```javascript
const fifteen = inventors.filter(
    (inventor) => inventor.year >= 1500 && inventor.year < 1600
      );
console.table(fifteen);
```

* if 조건문에 맞는 요소들만 필터링

<br>

## 2. map

```js
const fullNames = inventors.map(
    (inventor) => `${inventor.first} ${inventor.last}`
      );
console.log(fullNames);
```

* 요소들을 원하는 대로 가공해서 재생산.

<br>

## 3.sort

```js
const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
console.table(ordered);
```

* 1,-1을 통해 오름차순, 내림차순 정렬 가능

<br>

## 4. reduce

```js
const totalYears = inventors.reduce(
    (total, inventor) => total + (inventor.passed - inventor.year),
        0
      );
console.log(totalYears);
```

* 반복문 누적계산

<br>

## 5. 조건에따른 sort

```js
const oldest = inventors.sort((a, b) => {
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
    return lastGuy > nextGuy ? -1 : 1;
});
```

* 정렬 조건을 가공해서 줌.

<br>

## 6. Array.from

```js
const category = document.querySelector(".mw-category");
// Array.from으로 감싸는거랑 똑같음.
const links = [...category.querySelectorAll("a")];

const de = links
.map((link) => link.textContent)
.filter((streetName) => streetName.includes("de"));
```

* category에 대해 다른 요소로 한번 더 선택자를 거름.

<br>

## 7. 가공한 sort

```js
const alpha = people.sort((lastOne, nextOne) => {
    const [alast, afirst] = lastOne.split(", ");
    const [blast, bfirst] = NextOne.split(", ");
    return alast > blast ? 1 : -1;
});
console.log(alpha);
```

<br>

## 8. 카운터

```js
const transportation = data.reduce((obj, item) => {
    console.log(item);
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});
```

* reduce로 돌면서 카운팅.

