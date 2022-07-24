import Component from "./core/Component.js";
import InputValue from "./components/InputValue.js";
import ItemToggle from "./components/ItemToggle.js";
import {validationFor1000Unit} from "./utils/validation.js";
import {generateLottoTicket} from "./utils/generate.js";
import {PRICE_FOR_ONE} from './const/const.js';
import {resetToggleBtn, displayLottoLabel, displayToggleBtn, lottoHidden, generateLottoTicketView, removeAllLottoTickets} from './view/view.js';

export default class App extends Component{

	setup() {
		this.$state = {
			inputValue : 0,
			lottoCnt : 0,
			lottoToggle : false,
			lottoList : []
		}
	}

	setEvent() {
		const { setItemToggle } = this
		const $inputMoneyForm = this.$target.querySelector('#input-money-form')
		const $lottoToggleBtn = document.querySelector('.lotto-numbers-toggle-button')

		/**
		 * @todo : 별도의 함수로 빼서 addEventListener에 함수 등록하기.
		 */
		$inputMoneyForm.addEventListener('submit', event => {
			event.preventDefault();
			/**
			 * @todo : 값을 입력하는 부분 분리
			 */
			const $inputValue = event.target['inputMoney'].valueAsNumber;
			const isUnit1000 = validationFor1000Unit($inputValue);
			if(!isUnit1000) {
				alert('1000원 단위로 입력해주세요.');
				return;
			}

			if(this.$state.lottoList.length > 0 ) {
				this.initLottoTickets();
			}
			
			this.setLottoCntInputValue($inputValue);
			displayLottoLabel(this.$state.lottoCnt);
			lottoHidden(false);

			//generate lottoTicket and View
			this.setLottoTicketAndView();			
		})

		new ItemToggle($lottoToggleBtn, {
			setItemToggle : setItemToggle.bind(this)
		})
	}

	setLottoCntInputValue (inputValue) {
		const lottoCnt = inputValue / PRICE_FOR_ONE;
		this.setState({ lottoCnt : lottoCnt });
		this.setState({ inputValue: inputValue });
	}

	setItemToggle (target) {
		const setToggle = !target.checked;
		this.setState({lottoToggle: setToggle});
		displayToggleBtn(this.$state);
	}
	
	initLottoTickets () {
		removeAllLottoTickets();
		resetToggleBtn();
	}

	setLottoTicketAndView() {
		let i = 0;
		while(i < this.$state.lottoCnt) {
			const lottoNums = generateLottoTicket();
			generateLottoTicketView(lottoNums);
			this.$state.lottoList.push(lottoNums);
			i++;
		}
		
	}
} 
