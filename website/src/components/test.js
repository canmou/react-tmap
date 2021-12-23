import { Component } from "react";

export class Test extends Component {
  static defaultProps = {
    tkey: "",
    libraries: "",
  };
  state = {
      a: 2,
  }
  render() {
    return <>test{this.state.a}cccccccccccccccccccccccccccccccc</>;
  }
}
