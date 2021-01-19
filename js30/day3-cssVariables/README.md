# JS CLASS 30 - css 변수 사용하기

<p align="center">
  <img src="https://user-images.githubusercontent.com/64346737/104996154-b4b92d80-5a6a-11eb-9142-b973478d1bef.gif" /> 
  </p>

# 알아두기

- 사용자 지정 css 속성 (변수)
  재사용할 값을 변수로 만들어 사용할 수 있다.

  사용 방법은 아래와 같이 변수로 만들고자 하는 값 앞에 (--)를 붙여준다.

  ```
  element {
    --main-color: black;
  }
  ```

  그리고 var() 함수를 사용해 접근할 수 있다.

  ```
  element{
    color: var(--main-color);
  }
  ```

  - 자주 사용하는 방식

    :root 의사 클래스에 선언해서 HTML문서 어디에서나 사용자가 지정한 속성에 접근할 수 있도록 구성

  - js파일에서도 사용자 속성값을 사용할 수 있다.

    ```js
    // 인라인 스타일에서 변수 얻기
    element.style.getPropertyValue('--my-var');

    // 어느 곳에서나 변수 얻기
    getComputedStyle(element).getPropertyValue('--my-var');

    // 인라인 스타일에 변수 설정하기
    element.style.setProperty('--my-var', jsVar + 4);
    ```

    위와 같은 메서드를 사용해서 js파일에서도 자유롭게 css 사용자 속성값에 접근할 수 있다.

- css 속성 중 filter

  흐림 효과나 색상 변형 등 그래칙 효과를 요소에 적용한다.

  보통 필터는 이미지, 배경, 테두리 렌더링을 조정하는데 사용한다.

  - 예시
    ```
    filter: blur(5px);
    filter: brightness(0.4);
    filter: contrast(200%);
    filter: drop-shadow(16px 16px 20px blue);
    ```
