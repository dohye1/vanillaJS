# Lazy Loading

<p align="center"><img src="https://media.vlpt.us/images/dolarge/post/59178f09-390f-47e8-9c47-3d706bc1f000/ezgif.com-gif-maker%20(23).gif" /></p>

- 초기 렌더링 시 상단의 3개의 img만 src값이 주어진다. 그래서 네트워크탭에서 브라우저가 받아온 파일을 보면 이미지가 3개있다.

- 이 3개의 img를 제외한 나머지 img는 src가 아닌 ★data-src에 이미지의 링크를 가지고 있다.★

- 스크롤 이벤트가 발생하면 스크롤의 높이에 따라 보여지게 되는 img의 src가 설정되면서 브라우저가 이미지 파일을 로드하게된다.

- 동적으로 이미지 파일을 받아오는 것을 Lazy Loading이라고 한다.

- 이 기법은 초기 렌더링 시 브라우저가 모든 데이터를 받아오지 않고 상단의 데이터만 받아와서 화면에 반영하면 되기때문에 초기 렌더링 속도를 개선할 수 있고, 메모리의 부담을 줄일 수 있다.

# 메인 아이디어

<p align="center"><img width="400px" src="https://media.vlpt.us/images/dolarge/post/c4bb1e75-f402-49ab-ad79-fa698a1e3f7b/Notes_210126_143416.jpg" /></p>

JavaScript코드에서 가장 중요하다고 생각하는 개념을 정리해 봤다.

```js
if (img.offsetTop < window.pageYOffset + window.innerHeight)
```

위의 코드가 img를 로드할지 결정하는 구문이다.

이미지 상단기준 Y축의 값과 (보여지는 화면의 총 높이 + 스크롤의 Y축 위치)의 값을 비교한다.

이 개념은 꼭 외우자..!

# 알아두기

- DOM Event

  - DOMContentLoaded
    초기 HTML문서를 완전히 불러오고 분석했을 때 발생하는 이벤트.
    스타일 시트, 이미지, 하위 프레임의 로딩은 기다리지 않는다.
  - resize
    도큐먼트 뷰가 리사이즈 되었을때 발생하는 이벤트.
  - orientationChange
    센서 이벤트의 일종으로, 장치의 방향이 바뀔때 호출되는 이벤트.

- window.pageYOffset

  - window 인터페이스의 읽기전용 속성으로, scrollY랑 같다!
  - 문서가 수직으로 얼마나 스크롤 되었는지 픽셀단위로 반환한다.

- img.offsetTop

  - 부모 엘리먼트의 상단에서 부터의 상대적인 픽셀값!
  - HTML구조상 img의 부모 엘리먼트는 body이다. 그래서 body의 top에서부터 img의 y축까지의 거리를 구한다.

- window.innerHeight or widnow.innerWidth
  - 창 틀을 뺀 내용과 스크롤을 포함한 크기
