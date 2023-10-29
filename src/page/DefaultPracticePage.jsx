import { useState } from "react";

import { Card, Carousel } from "antd";
import { RightOutlined } from "@ant-design/icons";
import styled from "styled-components";

import Container from "../components/UI/Container";
import Modal from "../components/UI/Modal";

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

  .ant-carousel .slick-next,
  .ant-carousel .slick-next:hover,
  .ant-carousel .slick-next:focus {
    font-size: 36px;
    color: #e2e4dd !important;
  }
`;

const StyledCard = styled(Card)`
  background-color: #e2e4dd;
  margin: 40px 25px;
  text-align: center;

  h2 {
    color: #314543;
  }

  button {
    font-size: medium;
  }
`;

const DefaultPracticePage = () => {
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

  const handleStopDelete = () => {
    setIsDelete(false);
  };

  return (
    <Container>
      <StyledDiv>
        <Carousel arrows nextArrow={<RightOutlined />}>
          {dummyVoc.map((voc) => {
            return (
              <div key={voc.id}>
                <StyledCard
                  cover={
                    <div
                      style={{
                        height: "300px",
                        backgroundImage:
                          "url(" +
                          "https://th.bing.com/th/id/OIP.6yHdb5-e5s7VQKjdsBjBNgHaHd?pid=ImgDet&rs=1" +
                          ")",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                  }
                  title={
                    <h2 style={{ color: "#af7a1f", fontSize: "xx-large" }}>
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
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <button
                      style={{ backgroundColor: "#58805e", color: "#e2e4dd" }}
                    >
                      收藏單字
                    </button>
                    <button
                      style={{ backgroundColor: "#af7a1f", color: "#e2e4dd" }}
                    >
                      熟悉程度
                    </button>
                    <button
                      style={{ backgroundColor: "#6D2134", color: "#e2e4dd" }}
                      onClick={deleteHandler}
                    >
                      查看解釋
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
            <GeneralButton onClick={handleStopDelete}>返回</GeneralButton>
          </div>
        </Modal>
      )}
    </Container>
  );
};

export default DefaultPracticePage;
