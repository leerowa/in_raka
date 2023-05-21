### setTimeout(실행문,밀리초 단위의 시간);

 - 일정시간 뒤 실행문을 실행

### clearTimeout(timeoutID);
- setTimeout실행후 반환되는 숫자가 담긴 timeoutID를 이 함수에 전달하면 실행이 취소됨

### setInterval(실행문,밀리초 단위의 시간);

- 일정시간 뒤 실행문을 반복 무한 실행

### setInterval(timeoutID);
- setInterval 실행취소
<hr/>

## 두 함수는 화면 프레임 고려 없이 주어진 시간에 시행하고 페이지를 보이지 않은 시점에도 실행하기에 잘 안쓰임


### 대안으로 requestAnimationFrame 을 사용함
**나중에 공부필요**
