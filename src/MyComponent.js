import React from "react";
import PropTypes from "prop-types";

const MyComponent = ({ name, children, favorateNumber }) => {
  return (
    <div>
      안녕하세요 제이름은 <b>{name}</b> 입니다<br></br>
      Children 값은 {children} 입니다
      <br />
      제가 좋아하는 숫자는 {favorateNumber} 입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본이름",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favorateNumber: PropTypes.number.isRequired,
};
export default MyComponent;
