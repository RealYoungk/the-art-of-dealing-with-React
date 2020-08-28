import React from "react";
// import Counter from "./Counter";
// import Say from "./Say";
// import EventPractice from "./EventPractice";
// import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";

class App extends React.Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBotton()}>맨밑으로</button>
      </div>
    );
  }
}

export default App;
