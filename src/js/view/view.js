
const $lottoCountLabel = document.querySelector('.lotto-count-label')
const $lottoToggleBtn = document.querySelector('.lotto-numbers-toggle-button')
const $lottoHidden = document.querySelector('.lotto-hidden')
const $lottoTickets = document.getElementById('lotto-ticket-list');
let $lottoNums = document.getElementsByClassName('lotto-numbers');
const $resultTable = document.querySelector('.result-table');

export const displayLottoLabel = lottoCntLabel => {
	$lottoCountLabel.innerText = `총${lottoCntLabel}개의 복권을 구입했습니다.`
}

export const setViewResultTable = () => {
	console.log($resultTable.getElementsByTagName('tbody')[0])
}

export const lottoHidden = isHidden => {
	$lottoHidden.hidden = isHidden
}

export const displayToggleBtn = state => {
	if(state.lottoToggle) {
		setHiddenNumber(true)
	} else {
		setHiddenNumber(false)
	}
	
}
export const removeAllLottoTickets = () => {
	$lottoTickets.innerHTML = '';
}
export const resetToggleBtn = () => {
	$lottoToggleBtn.checked = false;
}

export const generateLottoTicketView = (lottoNums) => {
	const $icon = document.createElement('li');
	$icon.classList = 'mx-1 text-2xl';
	$icon.innerText = '🎟️';
	const $lottoNums = document.createElement('span');
	$lottoNums.classList = 'lotto-numbers hidden-number'
	$lottoNums.innerText = Array.from(lottoNums).join(',');

	$icon.appendChild($lottoNums)
	$lottoTickets.appendChild($icon)
	
	return $lottoTickets;
}

const setHiddenNumber = (hidden) => {
	Array.from($lottoNums).map(lottoNum => {
		if(!hidden) {
			lottoNum.classList.remove('hidden-number')
		}else {
			lottoNum.classList.add('hidden-number')
		}
	})
	
}
