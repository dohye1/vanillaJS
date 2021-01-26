# JS CLASS 30 - typeahead

<p align="center">
  <img src="https://user-images.githubusercontent.com/64346737/105632162-23482200-5e95-11eb-9067-7980d3077c1a.gif" /> 
  </p>

# typeahead란?

- 컴퓨터나 소프트웨어의 기능으로 사용자는 프로그램이나 컴퓨터 작동에 관계없이 계속 입력 할 수 있습니다.
- 입력 필드에 타이핑을 하면 관련 정보를 보여주고 선택할 수 있는 기능

<img width="30%" src="https://cdn.cms-twdigitalassets.com/content/dam/blog-twitter/archive/twitter_typeaheadjsyouautocompleteme95.thumb.1280.1280.png" />

# 알아두기

- fetch
  데이터를 얻어오는 코드는 아래와 같다.

  ```js
  fetch(URL)
    .then((res) => res.json())
    .then((data) => cities.push(...data));
  ```

  이렇게 구성되어 있다.

  > [fetch](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Fetch%EC%9D%98_%EC%82%AC%EC%9A%A9%EB%B2%95)란?

  fetch API를 사용해 비동기 네트워크 통신을 할수있다.

  쉽게말하면 클리이언트가 서버에 비동기로 요청을 하는것이다!

  - fetch의 첫번째 인자로 통신을 할 URL을 넣어주고, 두번째 인자는 같이 전달할 값을 넣어줄 수 있다. (두번째는 옵션)
  - 주의해야 할 것
    fetch로 부터 반환되는 객체의 타입은 Promise이다. 그래서 위의 코드에서 볼 수 있듯이 `.then(~~)` 형식으로 사용하는 것이다.

    그리고 reponse의 body의 타입이 JSON이 아니다. 그래서 json()메서드를 사용해야 하는데, 그럼 json메서드는 무엇인가??!??

    > json()메서드는 Response 스트림을 가져와 스트림이 완료될때까지 읽는다. 그리고 다 읽은 body 텍스트를 Promise 형태로 반환한다.

# (더 작성해야함...)
