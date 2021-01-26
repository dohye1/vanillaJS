# dark mode

- 다크모드와 라이트모드로 나누어 각 모드에 맞게 배경색과 글자색을 변경함

<p align="center"><img src="https://media.vlpt.us/images/dolarge/post/48eb50ee-26d6-402d-aba5-0204ac671570/ezgif.com-gif-maker%20(24).gif"/> </p>

# 구현 방법

- css와 classList.toggle을 사용해 모드변경버튼을 클릭시 classList에 dark값을 가지고 있다면 remove하고, 없으면 add를 해줌

# 알아두기

- classList에서 사용할 수 있는 메서드

  - add

    `add( String [, String [, ...]] )`

    지정한 클래스 값을 추가하고, 만약 추가하려는 클래스가 엘리먼트의 class 속성에 이미 존재한다면 무시한다.

  - remove

    `remove( String [, String [, ...]] )`

    지정한 클래스값을 삭제한다.

  - item

    `item( Number )`

    인덱스를 사용하여 클래스 값을 반환한다

  - toggle

    `toggle( String [, force] )`

    인수가 하나만 있으면 클래스값을 토글링한다.

    인수가 두개 있으면 두번째 인수가 true로 평가되면 지정한 클래스값을 추가하고, false로 평가되면 제거한다!

  - contains

    `contains( String ) `

    지정한 클래스 값이 엘리먼트의 class 속성에 존재하는지 확인한다!!!

  - replace

    ` replace( oldClass, newClass )`

    존재하는 클래스를 새로운 클래스로 교체한다.
