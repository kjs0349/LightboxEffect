# LightboxEffect
자바스크립트를 이용해 라이트박스 효과를 만들어 보았습니다.

![LightboxEffect2](https://user-images.githubusercontent.com/61913417/105563609-17a80e80-5d62-11eb-8eeb-6ffa3e7d814e.gif)

### 구상 과정과 구현
1. 이미지 클릭시 그 이미지가 전체 화면 정가운데 뜨며 뒤에 어두운 배경이 생기게 하고 싶다!
 - 클릭 이벤트를 문서 전체에 주고 클릭 된 타겟을 알아낸다.
 - 알아낸 타겟이 'data-lightboximg' 속성을 가지고 있으면 #lightbox-overlay 에 visible 이라는 클래스를 추가해 준다.  
 (hasAttribute() : 속성을 가지고 있는지 확인해 준다)
---
> #lightbox-overlay는 0.8의 투명도를 가지고 있는 검은색 배경이 화면 전체를 덮고 있는 영역이다.  
     평소에는 opacity: 0; 값을 줘서 안보이게 만들어 주고  
     pointer-events: none; 값으로 클릭 이벤트를 방해하지 않게 해준다.  
     --> 여기에 visible 클래스를 추가하게 되면  
     opacity: 1; 값을 줘서 검은 배경을 만들어 주고  
     pointer-events: auto; 로 줘서 이제 클릭 이벤트가 먹도록 해준다.
     
---
- getAttribute 로 'data-lightboximg' 속성 값을 가져와서 newImage 변수 값에 넣어 준다.  
(getAttribute() : 속성 값을 가져온다)
- #lightbox-image 의 src 부분을 비워서 생성했는데 setAttribute 속성을 통해 newImage 에 담긴 값을 #lightbox-image 'src' 부분에 넣어준다.  
(setAttribute() : 속성 값을 넣어 준다)

2. 확대된 이미지를 클릭하든 검은 배경을 클릭하든 꺼지게 만들고 싶다!
- 검은 배경과 이미지는 #lightbox-overlay와 #lightbox-image 라는 아이디를 가지고 있으므로 이 아이디 값을 가지고 있다면!
- visible 클래스를 제거해줘서 다시 보이지 않게 해준다.
- 꺼진 다음에 다시 클릭할 시 전에 이미지가 잠깐 보이고 클릭한 이미지가 덮어지는 현상을 해결하기 위해 #lightbox-image의 'src' 속성을 다시 비워준다.
