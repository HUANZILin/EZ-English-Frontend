import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  position: fixed;
  display: flex;
  top: 0px;
  background-color: #e2e4dd;
  font-family: 微軟正黑體;
  align-items: center;
  z-index: 5;

  h1 {
    padding: 25px;
    text-align: center;
    background-color: #e2e4dd;
    color: #314543;
  }

  .logo {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background-color: #58805e;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 30px;
  }

  .logo #logo {
    font-size: 54px;
    color: #e2e4dd;
    font-weight: bold;
  }

  a {
    display: flex;
    width: 100px;
    margin: 0px 10px;
    font-size: 20px;
    text-decoration: none;
    font-weight: bold;
    color: #314543;
    justify-content: center;
    transition: 0.5s;
  }

  a:hover {
    color: #af7a1f;
  }

  .card_list .list {
    display: none;
    position: absolute;
    top: 50px;
    background-color: #e2e4dd;
  }

  .card_list .list a {
    padding: 20px 0px;
  }

  .card_list .list hr {
    margin: 0px;
  }

  .card_list:hover .list {
    display: block;
  }

  #member {
    position: absolute;
    right: 30px;
  }
`;

const MainNav = () => {
  return (
    <Nav>
      <div className="logo">
        <NavLink to={"/"} id="logo">
          EZ
        </NavLink>
      </div>
      <div className="card_list">
        <NavLink to={"vocabulary/list"}>單字列表</NavLink>
        <div className="list">
          <NavLink to={"vocabulary/card"} style={{ marginTop: "20px" }}>
            單字卡
          </NavLink>
          <hr />
          <NavLink to={"vocabulary/collection"}>收藏單字</NavLink>
          <hr />
          <NavLink to={"vocabulary/practice"}>單字練習</NavLink>
        </div>
      </div>
      <NavLink to={"video"}>影片推薦</NavLink>
      <NavLink to={"aicommunication"}>AI對話</NavLink>
      <div className="card_list">
        <NavLink to={"analysis"}>學習分析</NavLink>
        <div className="list">
          <NavLink to={"analysis/record"} style={{ marginTop: "20px" }}>
            練習紀錄
          </NavLink>
        </div>
      </div>
      <NavLink to={"member"} id="member" style={{ right: "140px" }}>
        會員資料
      </NavLink>
      <a href="#" id="member">
        登出
      </a>
    </Nav>
  );
};

export default MainNav;
