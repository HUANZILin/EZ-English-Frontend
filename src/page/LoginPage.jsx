import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { Link } from "react-router-dom";

import { Alert } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import Container from "../components/UI/Container";
import Title from "../components/Title";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 2rem;

  label {
    font-size: 1.5rem;
    padding: 10px;
    margin-top: 10px;
  }

  input {
    height: 2.5rem;
    width: 20vw;
    text-align: center;
    line-height: 2.5rem;
    color: #314543;
    background-color: #e2e4dd;
    border: 0px;
    border-radius: 2rem;
    float: right;
    outline: none;
  }

  input::placeholder {
    color: #314543;
    opacity: 0.6;
  }

  button {
    margin: 60px 10px 40px 10px;
    height: 2.5rem;
    font-size: 1rem;
    color: #e2e4dd;
    background-color: #314543;
    border: none;
    border-radius: 30px;
    padding: 10px 40px;
  }
`;

const LoginPage = () => {
  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(loginForm);
    if (formData) {
      alert("登入成功！");
      navigate("/");
    }

    // mutate(formData);
  };

  return (
    <Container>
      <Title title="會員登入" />
      <StyledForm id="loginForm" onSubmit={loginHandler}>
        <label htmlFor="account">帳號/Email</label>
        <input id="email" type="email" name="account" required />
        <label htmlFor="password">密碼</label>
        <input
          id="password"
          type="password"
          name="password"
          minlength="8"
          maxlength="12"
          required
        />

        <button type="submit">登入</button>
      </StyledForm>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "center",
          marginBottom: "20px",
        }}
      >
        <p style={{ paddingRight: "0.5rem" }}>還沒有帳號嗎？</p>
        <Link
          to="../register"
          style={{
            textDecorationLine: "underline",
            color: "#314543",
            paddingRight: "1rem",
          }}
        >
          註冊
        </Link>
        <p style={{ paddingRight: "0.5rem" }}>忘記密碼？</p>
        <Link
          to="../forgetpassword"
          style={{ textDecorationLine: "underline", color: "#314543" }}
        >
          點擊這裡
        </Link>
      </div>
    </Container>
  );
};

export default LoginPage;
