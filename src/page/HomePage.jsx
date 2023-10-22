import { Col, Row } from "antd";
import styled from "styled-components";

const StyledHomePic = styled.div`
  background-image: url("https://github.com/HUANZILin/EZ-English-Frontend/blob/main/src/assets/%E9%A6%96%E9%A0%81%E5%A4%A7%E5%9C%96.jpg");
  width: 100%;
  height: 50%;
`;

const StyledSection = styled.button`
  width: 100%;
  font-size: xx-large;
  letter-spacing: 2px;
  align-content: center;
  border: none;
  border-radius: 0%;
  padding: 60px;
`;

const HomePage = () => {
  return (
    <>
      <Row>
        <StyledHomePic />
      </Row>
      <Row>
        <Col span={14}>
          <StyledSection>單字卡</StyledSection>
        </Col>
        <Col span={10}>
          <StyledSection>影片推薦</StyledSection>
        </Col>
      </Row>
      <Row>
        <Col span={10}>
          <StyledSection>AI對話</StyledSection>
        </Col>
        <Col span={14}>
          <StyledSection>學習分析</StyledSection>
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
