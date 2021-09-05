# Array Cardio

## 1. some

```js
const isAdult = people.some(
        (person) => new Date().getFullYear() - person.year >= 19
      );
```

* python 의 any랑 같은 메서드. 하나라도 true면 true



## 2. every

```js
const allAdults = people.every(
        (person) => new Date().getFullYear() - person.year >= 19
      );
```

* python의 all. 모두 true여야 true



## 3. find, findIndex

```js
const comment = comments.find((comment) => comment.id == 823423);
const index = comments.findIndex((comment) => comment.id === 823423);
```

* 조건에 맞는 객체를 필터링해 가져옴(가장 먼저 나오는)
* 혹은 인덱스를 반환한



## 4. slice

```js
const newComments = [
        ...comments.slice(0, index),
        ...comments.slice(index + 1)
      ];
```

* 파이썬 slice랑 똑같음. 대신 참조가 아니라 복사하기위해 앞에 ...붙여줌.

