import { useState } from "react";
import { EnterOutlined } from "@ant-design/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 2rem;
`;
const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const TheInput = styled.input`
  width: 55vw;
  height: 4rem;
  border-radius: 30px;
  background-color: #e2e4dd;
  color: #314543;
  font-size: 1.5rem;
  font-weight: bold;
  text-indent: 10px;
  border: none;
  padding-left: 10px;
`;
const Button = styled.button`
  width: 4rem;
  height: 4rem;
  margin-left: 1rem;
  padding: 0;
`;

const StyledEnterOutlined = styled(EnterOutlined)`
  color: #314543;

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

let N = 1;
let J = 2;

const InputMessenge = (props) => {
  const [nowTexting, setNowTexting] = useState("");

  const inputChangeHandler = (e) => {
    setNowTexting(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    clearTimeout(noResponse);
    setNowTexting("");

    N += 1;
    J += 1;
    const temptData = {
      ID: "B0" + `${N}`,
      Speaker: "User",
      Messenge: nowTexting,
    };
    props.newText(temptData);

    var noResponse = setTimeout(() => {
      const temptData = {
        ID: "A0" + `${J}`,
        Speaker: "AI",
        Messenge:
          "！抱歉，服務因故出錯，請聯繫官方人員。Sorry, the service is experiencing issues. Please contact official personnel for assistance.",
      };
      props.newText(temptData);
    }, 1000);
  };

  return (
    <Container>
      <TheInput
        type="text"
        placeholder="請輸入訊息"
        value={nowTexting}
        onChange={inputChangeHandler}
      />
      <Button type="button" onClick={submitHandler}>
        <StyledEnterOutlined />
      </Button>
    </Container>
  );
};

export default InputMessenge;
