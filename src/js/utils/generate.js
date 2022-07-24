import {LOTTO_MAX_VALUE, LOTTO_MIN_VALUE, LOTTO_RESULT_AMOUNT} from "../const/const.js"

export const generateLottoTicket = () => {
	const lottoNums = [];
	let i = 0;

	while(i < LOTTO_RESULT_AMOUNT) {
		let num = Math.floor(Math.random() * (LOTTO_MAX_VALUE - LOTTO_MIN_VALUE + 1)) + LOTTO_MIN_VALUE;
		if(lottoNums.every((value) => value != num )) {
			lottoNums.push(num);
			i++;
		}
	}
	
	return lottoNums;
} 