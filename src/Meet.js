import React from "react";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const StyledText = styled.Text`
  font-size: 30px;
`;

const Meet = () => {
  return (
    <Container>
      <StyledText>Meet</StyledText>
    </Container>
  );
};

export default Meet;
