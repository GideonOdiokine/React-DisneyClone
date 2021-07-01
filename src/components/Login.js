import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="./images/cta-logo-one.svg" alt="" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon with a Disney+
            subscription. As of 03/26/21, the price of Disney+ and The Disney
            Bundle will increase by $1
          </Description>
          <CTALogoTwo src="./images/cta-logo-two.png" alt="" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;
const BgImage = styled.div`
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

const CTA = styled.div`
  margin-bottom: 2vh;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0;
  align-item: center;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
`;
const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  display: block;
  width: 100%;
  min-height: 1px;
`;

const SignUp = styled.a`
  background-color: #0063e5;
  color: #fff;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  font-weight: bold;
  margin-bottom: 12px;
  letter-spacing: 1.5px;
  width: 100%;
  font-size: 18px;

  &:hover {
    background-color: #0483ee;
  }
`;
const Description = styled.p`
  text-align: center;
  font-size: 14px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;
const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display:inline-block;
  vertical-align:bottom;
  width:100%;
`;
export default Login;
