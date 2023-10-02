import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

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
    background-color: #e2e4dd;
    border: 0px;
    border-radius: 2rem;
    float: right;
    outline: none;
  }

  input::placeholder {
    color: #314543;
    opacity: 1;
  }

  button {
    margin: 60px 10px 100px 10px;
    height: 2.5rem;
    font-size: 1rem;
    color: #e2e4dd;
    background-color: #314543;
    border: none;
    border-radius: 30px;
    padding: 10px 40px;
  }
`;

const MemberPage = () => {
  const [isEdit, setIsEdit] = useState(false);

  const memberData = {
    id: "#1234",
    account: "abc@gmail.com",
    password: "123abc",
  };

  const editHandler = (e) => {
    e.preventDefault();
    setIsEdit(true);
  };

  const saveHandler = (e) => {
    e.preventDefault();
    setIsEdit(false);
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    window.alert("確定要刪除帳號嗎？注意：此動作不可回復");
    setIsEdit(false);
  };

  return (
    <Container>
      <h1
        style={{
          paddingTop: "100px",
          textAlign: "center",
          letterSpacing: "1rem",
        }}
      >
        會員資料
      </h1>
      <hr width="80%" />
      <StyledForm action="">
        <label htmlFor="userId">UID</label>
        <input type="text" placeholder={memberData.id} disabled />
        <label htmlFor="account">帳號/Email</label>
        {isEdit ? (
          <input id="account" type="email" />
        ) : (
          <input type="email" placeholder={memberData.account} disabled />
        )}
        <label htmlFor="password">密碼</label>
        {isEdit ? (
          <input id="password" type="text" />
        ) : (
          <input type="text" placeholder="*********" disabled />
        )}
        <div>
          {!isEdit && <button onClick={editHandler}>修改資料</button>}
          {isEdit && <button onClick={saveHandler}>儲存</button>}
          {isEdit && (
            <button
              style={{
                backgroundColor: "#6d2134",
              }}
              onClick={deleteHandler}
            >
              刪除帳號
            </button>
          )}
        </div>
      </StyledForm>
    </Container>
  );
};

export default MemberPage;
