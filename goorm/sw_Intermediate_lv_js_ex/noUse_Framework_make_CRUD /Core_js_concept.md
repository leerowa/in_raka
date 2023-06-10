## 바인딩과 this
### 바인딩
* 함수 혹은 메서드를 호출한 대상에 실제 함수를 연결해주는 것.   
 
  ```javascript
  구름예제
  var myObj = {
      name: 'jack',
      sayName: function(){
      alert(this.name);
      }
   }
  var yourObj{
  name='sora'
  }
  
  yourObj.sayName = myObj.sayName;
  
  myobj.sayname(); //jack
  yourobj.sayname(); //sora
  ```
  + myobj.sayname();에서 sayname 은 myObj에 바인딩되어있다.
  + 그리고 yourobj.sayname();에서의 sayname은 yourname에 바인딩되어있다고 할 수 있다.

### this
 * 일반함수를 호출시의 this는 전역개체를 가리킨다. (this.asdf == window.asdf)
   + 함수의 안과 밖에 같은 이름의 변수가 선언되어있으면 밖의 변수값을 사용한다.
* 메서드 내부 코드에서 사용된 this는 그 메서드를 호출한 객체에 바인딩된다.
* 생성자함수에서 this는 그 생성자함수로 생성된 객체에 바인딩된다.
  ```javascript
  생성자함수 예제
  var Person = function(name){
  this.name = name;
  }
  
  //boy 객체생성
  var boy = new person('민철');
  console.log(boy.name); //민철
  ```
  
  1. person('민철') 로 Person함수에 민철이 들어가게 됨    
  3. boy.name는 person.name이란것이고
     + var boy = function(name) {this.name = name;}
  4. boy.name 안에 this.name는 민철이 들어가 있으므로 민철이 출력된다.
  
  


## js로 html 다루기

* dom(document object model)
  + HTML 문서를 객체로 표현한 것
  + HTML 요소와 js연결을 위해 사용

* 접근메서드 목록
  + document.getElementById(id)
  + 보통 하나. HTML의 id속성값 기준으로 접근

* document.getElementsByClassName(className)
  + class 속성 기준으로 해당요소 모두 선택
  + 같은 클래스를 가진 모든 요소가 담긴 유사배열 HTMLCollection반환

* document.getElementByTagName(tagName)
  + 태그이름으로 요소를 선택함

* document.querySelector(cssSelector)
  + 보통 하나. CSS의 선택자 기준으로 접근
  + 선택자를 쓰는 여러 요소가 있어도 하나만 적용

* document.querySelectorAll(cssSelector)
  + 일치하는 모든요소를 선택하여 가져온다.
 
