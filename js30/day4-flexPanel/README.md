# JS CLASS 30 - css 변수 사용하기

<p align="center">
  <img src="https://user-images.githubusercontent.com/64346737/105286229-38088980-5bf9-11eb-9374-9fe4ac401fa4.gif" /> 
  </p>

# 알아두기

- 가상요소(Pseudo-Element)
  존재하지 않는 요소를 존재하는 것처럼 부여하여 문서의 특정부분 선택을 가능하게 한다.

  - 자주 사용하는 가상요소

    1. `::first-line` : 요소의 텍스트에서 첫 줄에 스타일을 적용한다.
    2. `::first-letter` : 요소의 첫 번째 글자에 스타일을 적용한다.
    3. `::before` : 요소의 컨텐츠 시작부부에 생성된 콘텐츠를 추가한다.
    4. `::after-letter` : 요소의 컨텐츠 끝부분에 생성된 콘텐츠를 추가한다.
    5. `::selection` : 요소의 텍스트에서 사용자에 의해 선택된 영역의 속성을 변경한다.
    6. `::placeholder` : Input 필드에 힌트 텍스트에 스타일을 적용한다.

  - ::before와 ::after

    - ::before는 실제내용 바로 앞에서 생성되는 자식요소이고, ::after는 실제내용 바로 뒤에서 생성되는 자식요소이다.
    - 이 두개의 요소를 사용할 때는 content 속성을 설정해 줘야햔다.
    - content속성은 가짜 속성인데, HTML문서에 정보로 포함되지 않은 요소를 CSS에서 새롭게 생성시켜준다.

      ```
        <ul> class="test">
          <li>a</li>
          <li>b</li>
          <li>c</li>
        </ul>
      ```

      ```
      .test li::after{
        padding-left:5px;
        content:"|"
      }
      ```

      출력예시
      `a | b | c`

- tranisition 속성값

  - transition-property, transition-duration, transition-timing-function 과 transition-delay를 위한 단축 속성
  - transition의 속성에 넣어줄수 있는 값 순서는 아래와 같다.
  - 프로퍼티이름, 지속시간, 효과, delay를 순서대로 넣어주면 된다. (꼭 다 채워야 하는건 아니다.)
  - property name | duration | timing function | delay
  - 여러 속성을 설정해줄 경우 쉼표로 구분한다.

  - 실제 코드에서 사용된 방법

  ```
  transition: font-size 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11),
    flex 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11), background 0.2s;
  ```

- CSS3 Flexible Box

  flex는 요소의 크기가 불분명하거나 동적인 경우에도, 각 요소를 정렬할 수 있는 효율적인 방법을 제공한다.

  - flex는 Container와 Itmes의 개념으로 생각하면된다.
  - Container에는 display를 flex로 설정하고, align-items, justify-contents 등의 속성을 사용한다.
  - Items에는 flex, align-self등의 속성을 사용할 수 있다.

  ***

  - 이 예시에서는 Items에 flex속성을 동적으로 할당해서 애니메이션을 구현했다.

    panel클래스의 flex에 1을 설정하고, panel-open이 되면 flex를 3으로 설정한다.

    flex란 flex-grow, flex-shrink, flex-basis의 단축 속성인데, Items의 너비(증가, 감소, 기본)을 설정하는 단축속성이다.

    `flex : 증가너비 감소너비 기본너비`

    위와 같은 방식으로 설정하면 된다.

    flex의 속성을 하나면 주게되면 flex-grow처럼 작동하게 되는데, 이 속성은 Items의 증가 너비 비율을 설정한다.

    숫자가 크면 더 많은 너비를 가지게 되는데, 이 예시를 보면 클릭된 panel의 flex값이 1에서 3으로 변한다.

    그래서 다른 panel보다 너비가 넓어지는 효과가 발생하는 것이다.
