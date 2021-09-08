# 09_Dev_Tools_Domination



## 1. Regular

```js
console.log("Hello");
```



## 2. Interpolated

```js
console.log("Hello I am a %s string!", "?");
```

* %s로 들어감

## 3. Styled

```js
console.log(
        "%c I am some great text",
        "font-size: 50px; background:red; text-shadow: 10px 10px 0 blue"
      );
```

* 스타일 적용됨



## 4. Warning, Error

```js
console.warn("OH NOOO");
console.error("Shit");
```



## 5. Info

```js
console.info("crocodiles eat 3-4 people per year");
```



## 6. Testing

```js
const p = document.querySelector("p");
console.assert(1 === 1, "That is wrong");
console.assert(p.classList.contains("ouch"), "That is wrong");
```

* if문처럼 써서 consol에 나타내줌.

## 7. clear

```js
console.clear();
```

* console 창 비워줌.



## 8. View DOM elements

```js
console.log(p);
console.dir(p); // dropdown으로 보여줌
```

* p태그의 요소를 보여줌
* dir은 DOM구조를 dropdown으로 내줌.



## 9. Group

```js
dogs.forEach((dog) => {
        console.group(`${dog.name}`);
        console.log(`This is ${dog.name}`);
        console.groupEnd(`${dog.name}`);
      });
```

* group부터 group 끝까지 묶어서 안의 컨텐츠를 내줌

## 10. Count

```js
console.count("Wes");
console.count("Wes");
console.count("Steve");
console.count("Wes");
console.count("Wes");
console.count("Wes");
```

* 나온 숫자만큼 카운팅해 표시해줌.



## 11. Timing

```js
console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
    .then((data) => data.json())
    .then((data) => {
    	console.timeEnd("fetching data");
        console.log(data);
    });

console.table();
```

* data를 받아서 가져오는데 걸린 시간을 출력. 말그대로 작업 타이머.

