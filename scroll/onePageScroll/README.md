# One Page - 마우스 휠 한번에 한 영역씩 이동하기

<p align="center"><img src="https://media.vlpt.us/images/dolarge/post/0c63187b-b73c-47a5-96f1-99fa251f2522/ezgif.com-gif-maker%20(25).gif" /></p>

    마우스 휠 이벤트가 한번 동작하면 휠이 돌아간 방향에 맞게 한 구역씩 이동한다.

# 구현 방법

- wheel로 이동시

  - wheel 이벤트를 사용해 사용자가 마우스 휠을 한번 작동시키면 이벤트가 발생함.
  - 이벤트발생시 wheelDeltaY 값을 통해 마우스 휠을 아래방향으로 작동시켰는지, 위쪽 방향으로 작동시켰는지 알 수 있음.

  - window.innerHeight값은 보여지는 화면의 세로 높이고, window.scrollY는 스크롤의 Y축 픽셀값이다.

    이 두값을 사용해 몇번째 박스를 보여줄지 정할 수 있다.

    이 코드는 마우스 휠을 아래쪽 방향으로 작동 시켰을때 target을 정하는 코드인데

    ```js
    Math.ceil((window.scrollY + 1) / window.innerHeight);
    ```

    만약 지금 3번째 박스를 보여주는 화면이라면

    window.scrollY는 (1번째 박스+2번째 박스 = 200vh)의 높이가 될것이고,

    window.innerHeight(100vh)는 화면에 보여지는 높이이다.

    그러면 window.scrollY에 1을 더한 값을 화면의 높이로 나누어 올림한 값을 target에 할당해 주면 target은 3이 될것이다.

    3번째 박스가 보여지는 상태에서 마우스 휠을 아래로 내렸을때 4번째 박스가 보여져야 한다.

    ***

    어느 박스로 이동할 지(target) 구했다면 실제로 이동을 시키는 코드는 아래 코드이다.

    ```js
    window.scrollTo({ top: window.innerHeight * target, behavior: 'smooth' });
    ```

    top으로 주어진 값으로 스크롤이 이동하게 된다.

    그래서 4번째 박스로 이동할 때는 target이 3이고,

    window.innerHeight \* 3 = (100vh \* 3)으로 스크롤이 이동한다.

    박스 하나의 높이가 100vh이기 때문에 300vh로 스크롤이 이동하면 4번째 박스가 보여지게 되는것이다.

- 페이지 버튼으로 이동시
  - 각 li에 대해 클릭 이벤트를 부여해준다.
  - forEach문에서 콜백함수의 두번째 인자로 index를 같이 넘겨주고 그 인덱스를 이벤트 핸들러 함수에 넘겨준다.
  - 이벤트 핸들러 함수에서 인수로 받은 index를 사용해 window.scrollTo메서드를 사용해 스크롤을 이동시킨다.
