#### debounce와 throttle

DOM 이벤트를 기반으로 실행하는 자바스크립트를 성능상의 이유로 JS의 이벤트를 제어하는 방법이다.

쉽게말하면 성능을 개선시키기위해 이벤트를 제어하는것!

이벤트 핸들러가 많은 연산하는 경우에 대한 제약을 걸어 제어할수 있는 수준으로 이벤트를 발생시키는 것을 목표로 한다!

- debounce

  이벤트가 연속적으로 실행되어 이벤트 핸들러를 계속 호출하지만,
  이벤트 핸들러를 실행시키지 않고 있다가,
  이벤트가 끝나고 일정 시간이 흐르면 이벤트처리를 한번만 한다!

  순차적 이벤트 호출을 하나의 그룹으로 **그룹화**하는거!!

- throttle
  이벤트를 일정 주기마다 발생하도록 하는 기술이다.

  설정시간으로 1ms를 주게 되면 해당 이벤트는 1ms동안 최대 한번만 실행된다.

  **마지막 함수가 호출된 후 일정 시간이 지나기 전에 다시 호출되지 않도록 하는것**

- 차이점
  디바운싱과 스로틀의 차이점은 스로틀은 적어도 X 밀리 초마다 정기적으로 기능 실행을 보장한다.

  디바운스는 아무리 많은 이벤트가 발생해도 모두 무시하고 특정 시간사이에 어떤 이벤트도 발생하지 않을때 딱 한번만 이벤트를 발생시킨다.

- 작동예시

  - 우선 최적화 작업이 이루어 지지 않은 경우를 보면

    <p align="center"><img src="https://media.vlpt.us/images/dolarge/post/c84493fb-7349-461d-8a90-e1b540250f9d/ezgif.com-gif-maker%20(26).gif" /></p>

    글자를 입력할 때 마다 이벤트 핸들러가 실행되고,

    검색어를 보여주는 span의 text가 바로바로 업데이트되어서 나타난다.

  - debounce

    <p align="center"><img src="https://media.vlpt.us/images/dolarge/post/5f5fa5f1-32c4-407d-be92-d0bc51a4ed22/ezgif.com-gif-maker%20(27).gif" /></p>

    검색어 입력을 연속적으로 할 때는 이벤트가 이벤트처리가 바로바로 되지 않고,

    입력이 끝나고 0.5초동안 동일한 이벤트가 발생하지 않으면 이벤트처리를 한다.

    이벤트가 0.5초 안에 연속적으로 발생하게 된다면 이벤트처리를 하기전에 clearTimeout을 한다.

    ```js
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      console.log('debounce > ' + e.target.value);
      showText.innerHTML = e.target.value;
    }, 500);
    ```

  - throttle

    <p align="center"><img src="https://media.vlpt.us/images/dolarge/post/b61fac74-410c-40ed-9b78-d9c9e3c3923e/ezgif.com-gif-maker%20(28).gif" /></p>

    input에 값을 입력해도 바로바로 이벤트가 처리되는 것이 아니라, 2초 단위로 이벤트가 처리된다.

    쓰로틀에 타이머함수가 할당되었다면
    이벤트가 발생해도 아무런 처리가 되지 않는다.

    동일한 이벤트가 연속적으로 발생해도 2초뒤에 이벤트가 처리되어 throttle에 null이 할당되고 나서야 다시 이벤트처리를 타이머 함수에 할당할 수 있다.

    그래서 2초단위로 이벤트처리를 할 수 있는것이다.

    ```js
    if (throttle) {
      return false;
    }

    throttle = setTimeout(() => {
      console.log('thorottle > ' + e.target.value);
      showText.innerHTML = e.target.value;
      throttle = null;
    }, 2000);
    ```
