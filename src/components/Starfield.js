import React, { Component } from "react";
import styled from "styled-components";
import StarfieldAnimation from "react-starfield-animation";

export default class Starfield extends Component {
  render() {
    return (
      <Wrapper
        style={{
          background: "linear-gradient(to bottom right, #00172D, #00498D)", //  #150D30, #3E1740
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <StarfieldAnimation />
      </Wrapper>
    );
  }
}
const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  text-align: center;
  overflow: hidden;
`;
