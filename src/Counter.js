import React, { Component } from "react";

export default class Counter extends Component {
  //   constructor(props) {
  //     super(props);
  //     //state의 초기값 설정
  //     this.state = {
  //       number: 0,
  //       fixedNumber: 0,
  //     };
  //   }

  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state; // state 조회시 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정
          onClick={() => {
            // this.setState({ number: number + 1 });
            // this.setState({ number: number + 1 });

            this.setState((prevState, props) => {
              return { number: prevState.number + 1 };
            });
            this.setState((prevState, props) => {
              return { number: prevState.number + 1 };
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}
