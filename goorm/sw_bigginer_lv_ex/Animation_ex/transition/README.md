# transition
- transitionrun / transition이 처음 생성될때 제일 처음 발생
- transitionstart / transition이 실제로 시작된 transition-delay이후 발생
- transitioncancel / 실행중 취소된 상황에 발생
- transitionend / 끝나면 발생

##
### 예제순서

마우스 올림 -> run -> start -> end -> 마우스내림 -> run -> start-> end
- 각 이벤트가 한번의 올림으로 두번씩 발생함
- 토글로 작성하였기 떄문
##
