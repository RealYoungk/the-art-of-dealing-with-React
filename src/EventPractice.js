import React, { useState } from "react";

const EventPractice = () => {
  // 스테이트 선언
  const [form, setForm] = useState({
    username: "",
    message: "",
  });

  // 스테이트를 가져오고
  const { username, message } = form;

  // 이벤트 핸들링 함수
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ": " + message);
    setForm({
      username: "",
      message: "",
    });
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>Event Practice</h1>
      <input
        type="text"
        name="username"
        placeholder="input username"
        value={username}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <input
        type="text"
        name="message"
        placeholder="input anything"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;

// import React, { Component } from "react";

// export default class EventPractice extends Component {
//   state = {
//     username: "",
//     message: "",
//   };

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   handleClick = (e) => {
//     alert(this.state.username + ": " + this.state.message);
//     this.setState({
//       username: "",
//       message: "",
//     });
//   };

//   handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       this.handleClick();
//     }
//   };

//   render() {
//     return (
//       <div>
//         <h1>Event Practice</h1>
//         <input
//           type="text"
//           name="username"
//           placeholder="input username"
//           value={this.state.username}
//           onChange={this.handleChange}
//           onKeyPress={this.handleKeyPress}
//         />
//         <input
//           type="text"
//           name="message"
//           placeholder="input anything"
//           value={this.state.message}
//           onChange={this.handleChange}
//           onKeyPress={this.handleKeyPress}
//         />
//         <button onClick={this.handleClick}>확인</button>
//       </div>
//     );
//   }
// }
