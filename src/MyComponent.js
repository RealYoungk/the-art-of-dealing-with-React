import PropTypes from "prop-types";
import React, { Component } from "react";

class MyComponent extends Component {
  static defaultProps = {
    name: "기본이름",
  };

  static propTypes = {
    name: PropTypes.string,
    favorateNumber: PropTypes.number.isRequired,
  };

  render() {
    const { name, children, favorateNumber } = this.props;
    return (
      <div>
        안녕하세요 제이름은 <b>{name}</b> 입니다<br></br>
        Children 값은 {children} 입니다
        <br />
        제가 좋아하는 숫자는 {favorateNumber} 입니다.
      </div>
    );
  }
}

export default MyComponent;
