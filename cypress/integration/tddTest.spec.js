const NOTICE_MESSAGES = {
  NAME: {
    EMPTY: "이름을 입력해주세요.",
    MAX_LENGTH: "이름은 5자 이하로 입력해주세요.",
  },
};

describe("레이싱 어플리케이션 스펙", () => {
  beforeEach(() => {
    cy.visit("../../index.html");
  });

  it("ui적으로 input과 button이 렌더링되어서 보이는지 먼저 체크를 한다.", () => {
    cy.get("input").should("be.visible");
    cy.get("button").should("be.visible");
  });

  it("이름이 비어있을 경우 alert메시지를 '이름을 입력해주세요.' 띄워준다", () => {
    const alertStub = cy.stub();
    cy.on("window:alert", alertStub);

    cy.get("input").clear();
    cy.get("button")
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith(
          NOTICE_MESSAGES.NAME.EMPTY
        );
      });
  });

  it("이름이 5자가 넘어갔을 경우 alert메시지를 '이름은 5자 이하로 입력해주세요.' 띄워준다.", () => {
    const alertStub = cy.stub();
    cy.on("window:alert", alertStub);

    cy.get("input").type("yunseo");
    cy.get("button")
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith(
          NOTICE_MESSAGES.NAME.MAX_LENGTH
        );
      });
  });

  it("쉼표를 기준으로 이름을 나누어 할당함", () => {
    cy.get("input").type("현찬, 수진");
    cy.get("button").click();

    const names = ["현찬", "수진"];
    names.map((name, index) => {
      cy.get(".car-player").eq(index).contains(name);
    });
  });
});