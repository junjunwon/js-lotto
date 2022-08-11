const LOTTO_MAX_VALUE = 45
const LOTTO_MIN_VALUE = 1
const LOTTO_BALL_AMOUNT = 7 //6개를 추첨한 뒤
const LOTTO_RESULT_AMOUNT = 6 //6개를 추첨한 뒤
const LOTTO_RESULT_BONUS = 1 //그 후 보너스 1개를 추첨
const PRICE_FOR_ONE = 1_000 // 개당 금액

const RANK_RESULT = {
	FIRST : {
		COUNT : 6,
		MATCHCNT : '6개',
		PRIZE : '2,000,000,000'
	},
	SECOND : {
		COUNT : 5.5,
		MATCHCNT : '5개 + 보너스볼',
		PRIZE : '30,000,000'
	},
	THIRD : {
		COUNT : 5,
		MATCHCNT : '5개',
		PRIZE : '1,500,000'
	},
	FOURTH : {
		COUNT : 4,
		MATCHCNT : '4개',
		PRIZE : '50,000'
	},
	FIFTH : {
		COUNT : 3,
		MATCHCNT : '3개',
		PRIZE : '5,000'
	}
}

export {
	LOTTO_MAX_VALUE, LOTTO_MIN_VALUE, LOTTO_BALL_AMOUNT, 
	LOTTO_RESULT_AMOUNT, LOTTO_RESULT_BONUS, PRICE_FOR_ONE,
	RANK_RESULT
}

