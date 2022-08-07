const NOTICE_MESSAGES = {
  NAME: {
    EMPTY: "1000원 단위로 입력해주세요.",
    MAX_LENGTH: "이름은 5자 이하로 입력해주세요.",
		DUPPLICATE_WIN_NUMS: "중복된 당첨번호가 있습니다.",
  },
};
beforeEach(() => {
	cy.visit("http://localhost:8080")
})

describe("로또 Step1 && 구입 항목", () => {
	
	it("구입 금액이 비어있을 경우 예외처리", () => {
		const alertStub = cy.stub();
    cy.on("window:alert", alertStub);

    cy.get("#inputMoney").clear();
    cy.get("#submitLotto")
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith(
          NOTICE_MESSAGES.NAME.EMPTY
        );
      });
	})
	it("로또 구입 금액이 1000단위가 아닐 경우 예외처리", () => {
		const alertStub = cy.stub();
    cy.on("window:alert", alertStub);

    cy.get("#inputMoney").type(1001);
    cy.get("#submitLotto")
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith(
          NOTICE_MESSAGES.NAME.EMPTY
        );
      });
	})
	it("구입한 로또의 갯수가 다를 경우 예외처리", () => {
		const num = 5000;
		const alertStub = cy.stub();
		cy.on("window:alert", alertStub);
		cy.get("#inputMoney").type(num);
		cy.get("#submitLotto")
			.click()
			.then(() => {
				cy.get(".lotto-count-label").contains(num/1000)
			})
	})
})

describe("로또 Step2 && 당첨 항목", () => {
	it("당첨 번호를 중복되게 입력하여 에러메세지를 출력한다", () => {
		//중복된 당첨번호를 변수 배열에 저장한다.
		//변수 배열을 사용해 이벤트 위임으로 각 input 태그에 넣어준다.
		cy.inputWinngNumber([1,2,3,4,5,5], 6)
		
		//모달 출력 버튼을 클릭했을떄 중복 에러 alert을 발생한다.
		const alertStub = cy.stub();
		cy.on("window:alert", alertStub);
		// cy.showPrizeModal()
		cy.get('#prizeResultBtn')
			.submit()
			.then(() => {
				expect(alertStub.getCall(0)).to.be.calledWith(
          NOTICE_MESSAGES.NAME.DUPPLICATE_WIN_NUMS
        );
			})
	})

	it("결과 확인하기 버튼을 누르면 당첨 통계, 수익률을 모달로 확인할 수 있다.", () => {
		cy.showPrizeModal()
		cy.get('#prizeModal').should("be.visible");
	})

	// it("다시 시작하기 버튼을 누르면 당첨 통계 모달이 Off된다.", () => {
	// 	cy.restartLotto();
	// })
})