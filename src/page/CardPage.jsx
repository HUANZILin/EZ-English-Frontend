import { useState } from "react";

import { Card, Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styled from "styled-components";

import Container from "../components/UI/Container";
import Modal from "../components/UI/Modal";

const StyledButton = styled.button`
  background-color: #e2e4dd;
  color: #314543;
  font-size: large;
  font-weight: bold;
  letter-spacing: 2px;
  width: fit-content;
`;

const GeneralButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: #e2e4dd;
  background-color: #314543;
  border-radius: 4px;
  font-weight: bold;
  text-decoration: none;
  margin-right: 10px;
`;

const AlertButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: #e2e4dd;
  background-color: #6d2134;
  border-radius: 4px;
  font-weight: bold;
  text-decoration: none;
`;

const StyledDiv = styled.div`
  width: 40%;
  align-self: center;
  margin: 10px 0px 50px 0px;

  .ant-carousel .slick-prev,
  .ant-carousel .slick-next,
  .ant-carousel .slick-prev:hover,
  .ant-carousel .slick-next:hover,
  .ant-carousel .slick-prev:focus,
  .ant-carousel .slick-next:focus {
    font-size: 36px;
    color: #e2e4dd !important;
  }
`;

const StyledCard = styled(Card)`
  background-color: #e2e4dd;
  margin: 40px 25px;
  padding: 0px 0px 32px 0px;
  text-align: center;

  h2 {
    color: #314543;
  }

  button {
    font-size: medium;
  }
`;

const CardPage = () => {
  const dummyVoc = [
    {
      id: 1,
      title: "Apple",
      translation: "蘋果",
      part: "noun.",
      explanation: "A kind of fruit.",
    },
    {
      id: 2,
      title: "Banana",
      translation: "香蕉",
      part: "noun.",
      explanation: "A kind of fruit.",
    },
    {
      id: 3,
      title: "Orange",
      translation: "橘子",
      part: "noun.",
      explanation: "A kind of fruit.",
    },
    {
      id: 4,
      title: "Pear",
      translation: "梨子",
      part: "noun.",
      explanation: "A kind of fruit.",
    },
  ];

  const [isDelete, setIsDelete] = useState(false);

  const deleteHandler = (e) => {
    e.preventDefault();
    setIsDelete(true);
  };

  const handleStartDelete = () => {
    // mutate({ id: params.id });
  };

  const handleStopDelete = () => {
    setIsDelete(false);
  };

  return (
    <Container>
      <h1
        style={{
          paddingTop: "100px",
          textAlign: "center",
          letterSpacing: "2rem",
        }}
      >
        &thinsp;單字卡
      </h1>
      <div
        style={{ display: "flex", justifyContent: "end", paddingRight: "10%" }}
      >
        <StyledButton>新增單字卡</StyledButton>
      </div>
      <hr width="80%" />
      <StyledDiv>
        <Carousel
          arrows
          prevArrow={<LeftOutlined />}
          nextArrow={<RightOutlined />}
        >
          {dummyVoc.map((voc) => {
            return (
              <div key={voc.id}>
                <StyledCard
                  // cover={
                  //   <div
                  //     style={{
                  //       height: "300px",
                  //       backgroundImage:
                  //         "url(" +
                  //         "https://th.bing.com/th/id/OIP.6yHdb5-e5s7VQKjdsBjBNgHaHd?pid=ImgDet&rs=1" +
                  //         ")",
                  //       backgroundSize: "cover",
                  //       backgroundPosition: "center",
                  //     }}
                  //   ></div>
                  // }
                  title={
                    <h2
                      style={{
                        color: "#af7a1f",
                        fontSize: "xx-large",
                        padding: "10px 0px",
                      }}
                    >
                      {voc.title}
                    </h2>
                  }
                  bordered={false}
                >
                  <h2>
                    {voc.translation}({voc.part})
                  </h2>
                  <h2>{voc.explanation}</h2>
                  <hr style={{ backgroundColor: "#314543", margin: "32px" }} />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0px 32px",
                    }}
                  >
                    <button
                      style={{ backgroundColor: "#58805e", color: "#e2e4dd" }}
                    >
                      收藏單字
                    </button>
                    <button
                      style={{ backgroundColor: "#6D2134", color: "#e2e4dd" }}
                      onClick={deleteHandler}
                    >
                      刪除卡片
                    </button>
                  </div>
                </StyledCard>
              </div>
            );
          })}
        </Carousel>
      </StyledDiv>
      {isDelete && (
        <Modal>
          <h2>確定要刪除嗎?</h2>
          <p>確定要刪除此單字卡?此動作無法回復</p>
          <div>
            <GeneralButton onClick={handleStopDelete}>取消</GeneralButton>
            <AlertButton onClick={handleStartDelete}>刪除</AlertButton>
          </div>
        </Modal>
      )}
    </Container>
  );
};

export default CardPage;
