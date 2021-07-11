import React from "react";
import styled from "styled-components";

const Recommend = () => {
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export default Recommend;
