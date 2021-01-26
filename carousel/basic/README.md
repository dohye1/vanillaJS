# Carousel Basic

<p align="center">
  <img src="https://media.vlpt.us/images/dolarge/post/60248863-7ee1-430a-95e2-73f341976205/ezgif.com-gif-maker%20(13).gif" />
  </p>

# 구현 방법
- prev, next 버튼을 누르면 slideList가 보여지는 시작점을 변경한다.

  slideList가 보여질 좌표를 변경하는 방법은 css속성인 tranform을 사용했다. 
  
  자세한 내용은 아래에 있음!


- 5에서 1로 넘어갈때 동작이 자연스럽지가 않다.

  5에서 next를 누르면 4, 3 ,2 를 거쳐서 1로 이동한다.
  이문제를 어떻게 해결할까..?

  5 뒤에 1을 보여주는 박스를 추가해서
  5 에서 next를 누르면 페이지 하나가 넘어가는데에 걸리는 시간인 300ms동안은 5 뒤에 추가된 1을 
  300ms동안 보여주고,
  300ms가 지나면 0ms만에 복사된 1이 아닌 실제 1이 있는 위치로 이동한다.

  1에서 prev버튼을 누를때도 마찬가지로 1의 오른쪽에 5를 복사해서 붙여서 
  1에서 prev를 눌렀을때 자연스럽게 작동하도록 만들 수 있다.


# 알아두기
- dom과 관련된 메서드 
  - cloneNode
    
    이 메서드를 호출한 Node 의 복제된 Node를 반환한다.
    ```js
    var dupNode = node.cloneNode(deep);
    ```
    node는 복제할 대상이 되는 node이고, dupNode는 복제된 새로운 node이다. 

    그리고 deep은 boolean값을 인수로 받는데, true를 넣으면 해당 node의 children까지 복제하고, false를 넣으면 해당 node만 복제한다
  
  - appendChild
    
    한 노드를 특정 부모 노드의 자식 노드 리스트 중 마지막 자식으로 붙이는 메서드이다.
     
     5의 뒤에 1을 붙이기 위해 slideList의 맨 끝에 1을 복제한 node를 추가하기 위해 appendChild를 사용했다.
    ```js
    // 새로운 단락 요소를 생성하고 문서에 있는 바디 요소의 끝에 붙입니다.
    var p = document.createElement("p");
    document.body.appendChild(p);
    ```
    위와 같은 방식으로, 부모노드의 맨 마지막 자식으로 붙일때 사용한다!
    
  - insertBefore
    
    첫 번째 인수로 전달받은 노드를 두 번째 인수로 전달받은 노드 앞에 삽입한다.
    ```js
    var insertedNode = parentNode.insertBefore(newNode, referenceNode);
    ```
    ----
- css
  - transform
      요소에 회전, 크기 조절, 기울이기, 이동 효과를 부여할 수 있다.
      transform은 CSS 시각적 서식 모델의 좌표 공간을 변경하기 때문에, 애니메이션을 구현하는 것이 가능하다. 
      ```js
      transform: matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0);
      transform: rotate(0.5turn);
      transform: rotate3d(1, 2.0, 3.0, 10deg);
      transform: translate(12px, 50%);
      transform: translate3d(12px, 50%, 3em);
      transform: scale(2, 0.5);
      transform: scaleX(2);
      ```
      위와 같이 사용할 수 있는데, 
      
      carousel은 translate3d를 사용해서 구현했다.
      
      translate3d는 요소를 3D공간상에 재배치할 수 있고,
      아래와 같이 재 배치할 x, y, z 좌표를 인수로 설정해 줘야한다.
      
      ```js
      translate3d(tx, ty, tz)
      ```
