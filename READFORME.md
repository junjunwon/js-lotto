 ## tc36?에 대해 알기 es6는 사실 이제는 es2015라 부른다.

 - 주석으로 표현하지 말고 코드로 표현하자!
 - 주석으로 어떤 글을 남길 경우 목적을 작성하고 JSDOC을 검색해서 필요한걸 검색하기도 한다
   - todo 주석으로 남기면 동료들과 협업할때 중요하고 기술부채를 하나씩 줄여나갈 수 있다.
   - //TODO :로도 쓸 수 있고
   - /**
   - * TODO 와 같이 사용할 수도 있다.
   - */

## N회 렌더링
- n회 렌더링 되는 코드가 있으면 다 지워야한다.
- 주로 반복문이나 렌더링하는 코드 사이에서 문제가 발생한다.
  - 반복문 안에 렌더링이 있는 경우로 프론트엔드 면접준비할때
    - reflow, repaint가 n회 일어나고 있어 성능이 안좋다.
    - 페이지 크기를 빠르게 줄이고 늘릴때 일어나는 문제
  - 몇회 돌지 모르기때문에 뻥날 수도 있다. 
```
lottoList.forEach((lottoNums) => {
	const lottoComp = generateLottoTicketComponent(lottoNums);
	lottoTicketsWrapper.appendChild(lottoComp); //appendChild -> dom을 지지고 볶는 작업 (rendering)
})
```
- 렌더링하는 방법은 크게 두가지가 있다
  1. DOM 요소를 만들어서 요소간에 ㅏㅂ입하거나 추가하거나 삭제하는 방법
  2. 문자열부터 만들고 그 문자열을 치환해서 DOM 으로 만들어 삽입하는 형태
     1. innerHTML : 문자열을 dom으로 바꿔서 rendering해주는 형태
```
const lottoElement = `<span>lotto</span>`
const Lotto = lottoContainer.innerHTML = `<div>${lottoElement}</div>`
```
- n의 렌더링을 없애려면? dom을 먼저 모으고 마지막에 한번만 렌더링하자!
  - 



## CSS 추상화
- 아래는 css추상화의 좋은 예로 css를 몰라도 showmodal을 출력하는 것만으로 modal을 사용할 수 잇게 만들어준다.
```
export const showModal = function(modalElement) {
	modalElement.classList.add('open');
}
```

## 코드를 항상 알기 쉽게!
기존 코드
```
 if(priceInput < 1000) {
	alert("1000원 이상 입력해주세요");
		return;
 }
```
신규 코드
```
	const isUnder1000 = priceInput < 1000	
	if(isUnder1000) {
		alert("1000원 이상 입력해주세요");
		return;
	}
```

##  부정 조건문 다시보기


## 도메인에 종속된 역할
- 도메인은 무엇인가? 서비스로직이자 비즈니스, controller에 묶여있으면 안되는.
- 무엇이 종속되었다고 할 수 있는가?

## 사용자를 위한 에러 처리 고민하기


## 표준 API 확인하기
- "_"변수명의 경우 비공개 함수이므로 조심히 사용하자? 
  - 비공개 함수란 뭐지..


## Prototype 접근 지양하기
```
	Element.prototype.appendElement = function(element) {
		this.appendChild(element);
		return this;
	}
```
- 자바스크립트는 몽키패칭에 대한 특성을 가진 언어이기 때문에 런타임에서 동작하는 언어를 사용자가 건드릴 수 있는 상태 -> 상당히 위험함
- 특히나 element를 건드리는건 더욱 더 위험하다.
- 다른 사람이 가져다썻을때 코드 자체를 뒤덮을 수도 있다.
- 현재는 js가 발전했기 때문에 prototype은 사용하면 안된다.

## 배열에는 어떻게 접근해야할까?
```
const $purchaseFormInput = e.target[0];
```
- 위와 같은 접근도 지양하자.
- 아래와 같이 사용할 수 있다. 0번째 index value를 뜻하나?
```
const [$purchaseFormInput] = e.target;
```


## 매직 넘버 덜어내기
- 서비스에 대한 나이제한을 세울 경우 20이라고 하면 다른 개발자가 알지 못하지만 SERVICE_FOR_20과 같이 작업하면 이해할 수 있다.
- 정책이라고도 한다.
- 항상 매직넘버로 따로 빼서 관리하자! const!

## 명시적으로 표현하기
- 그리고 정규식도 따로 빼놓자
```
export const LOTTO_NUMBER_REGEX = /((\d{1,2},?)\s?){6}/;
```
- 혹시 정규식을 퍼오는 경우
- jsdoc에 @link를 넣어서 관리한다.

## 블랙박스에 가려진 함수
- 블랙박스는 까만 박스에 뭐가 들어있는지 알 수 없다는 것을 뜻한다.
- 즉, 
```
function SomeComponent() : void {
	const onClick = () => {
		// ...Some Code
	}
	return <div onClick="{onClick}"></div>
}
//or

$lottoSectionToggleInput.addEventListener("click", handleToogleClicked); //여기서 블랙박스 부분은 handleToogleClicked로 무슨 코드인지 모르겠는 상황
```
- 위의 예시가 블랙박스에 가려진 코드이다.
- Why? 

# 4주차 강의
- TDD 함께
- dom element에서 javascript로 가져오는 경우 변수명 앞에 달러($)표시를 붙힌다.
- 실패하는 테스트코드를 작성하고, 실패한 테스트코드가 성공하도록 기능을 구현한다
  - 이거였네..

## 로또 1단계 테스트 요구사항 정리
로또 구입 금액을 입력하면, 금액에 해당하는 로또를 발급해야 한다.
로또 1장의 가격은 1,000원이다.
소비자는 자동 구매를 할 수 있어야 한다.
복권 번호는 번호보기 토글 버튼을 클릭하면, 볼 수 있어야 한다.

# 로또 구입 금액에 대한 테스트
- ui적으로 input과 button이 렌더링되어서 보이는지 먼저 체크한다.
- 구입 금액이 비어있을 경우 예외처리
  - '' => alert()
- 로또 구입 금액이 1000단위가 아닐 경우 예외처리
  - '1001' => alert()
- 구입한 로또의 갯수가 다를 경우 예외처리

# 자동 구매의 경우
- 구입버튼을 클릭하면 몇개의 복권을 구매했는지 

# 복권 번호는 번호보기 토글 버튼을 클릭하면, 볼 수 있어야 한다.
- ui적으로 번호보기 토글 버튼을 클릭하면 번호가 보이는지 체크한다.
- 토글 버튼을 off하면 번호가 hidden처리되었는지 체크한다.

자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
전진하는 조건은 0에서 9 사이에서 random 값을 구한 후 random 값이 4 이상일 경우 전진하고, 3 이하의 값이면 멈춘다.
# 자동차 이름에 대한 테스트
- ui적으로 input과 button이 렌더링되어서 보이는지 먼저 체크를 한다.
- 이름이 5자가 넘어갔을 경우 예외 처리
  - 'yunseo' => alert()
- 이름이 비어있을 경우
  - '' => alert()
- 쉼표를 기준으로 이름을 나누는 기능
  - '현찬,수진' => '현찬', '수진'
- 이름이 중복되는 경우
  - '현찬,현찬' => alert()

# 자동차 몇 번 이동할 것인지 시도할 횟수에 대한 테스트
- ui적으로 input과 button이 렌더링되어서 보이는지 먼저 체크를 한다.
- 숫자가 아닌 값을 입력한 경우 alert()
  - 'a' => alert()
- 0이 입력된 경우 alert()
  - 0 => alert()
- 음수가 입력된 경우 alert()
  - -1 => alert()
- 비어있는 값이 입력된 경우 alert()
  - '' => alert()
- 최댓값(100)을 초과하는 경우 alert()
  - 101 => alert()

"