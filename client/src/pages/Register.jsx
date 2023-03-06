import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://c4.wallpaperflare.com/wallpaper/564/324/1011/food-fish-black-background-caviar-wallpaper-preview.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background: white;
  ${mobile({ width: "80%" })}
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.div`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: 1px solid black;
  padding: 14px 20px;
  cursor: pointer;

  &:hover {
    background-color: teal;
    color: white;
  }
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Register</Title>
        <Form>
          <Input placeholder="name"></Input>
          <Input placeholder="lastname"></Input>
          <Input placeholder="username"></Input>
          <Input placeholder="email"></Input>
          <Input placeholder="password"></Input>
          <Input placeholder="confirm password"></Input>
        </Form>
        <Agreement>
          By create this account, I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>
        </Agreement>
        <Button>CREATE ACCOUNT</Button>
      </Wrapper>
    </Container>
  );
};

export default Register;
