import { Card, Carousel, Alert } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

import Container from "../components/UI/Container";

const StyledDiv = styled.div`
  width: 55%;
  align-self: center;
  margin: 2rem 0px 50px 0px;

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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #e2e4dd;
  margin: 40px 25px;
  padding-bottom: 24px;

  .ant-card-head-title {
    white-space: normal;
  }

  h2 {
    color: #314543;
    font-size: x-large;
    padding: 10px 0px;
  }
`;

const VideoPage = () => {
  const dummyVideo = [
    {
      id: 1,
      title: "Tim Urban: Inside the mind of a master procrastinator",
      path: "https://www.youtube.com/embed/arj7oStGLkU?si=D4ZlWjbFCnXmlrS3",
    },
    {
      id: 2,
      title: "How to speak so that people want to listen",
      path: "https://www.youtube.com/embed/eIho2S0ZahI?si=Ew2lifsBRj_JjYPz",
    },
    {
      id: 3,
      title: "Bill Gates: The next outbreak? We’re not ready",
      path: "https://www.youtube.com/embed/6Af6b_wyiwI?si=Ly9NaiNkFIPZN3yP",
    },
    {
      id: 4,
      title: "Tom Thum: The orchestra in my mouth",
      path: "https://www.youtube.com/embed/DFjIi2hxxf0?si=8epXrTEmdwm90SWt",
    },
  ];

  return (
    <Container>
      <h1
        style={{
          paddingTop: "100px",
          textAlign: "center",
          letterSpacing: "2rem",
        }}
      >
        &thinsp;影片推薦
      </h1>
      <hr width="80%" />
      <StyledDiv>
        <Alert
          message={
            <h3 style={{ color: "#314543", margin: "0", paddingLeft: "12px" }}>
              關於推薦機制
            </h3>
          }
          description={
            <p
              style={{
                color: "#314543",
                margin: "0",
                paddingLeft: "12px",
                fontSize: "1rem",
              }}
            >
              影片推薦根據使用者最新的<strong>AI對話紀錄</strong>
              進行關鍵字擷取，並推薦最相關的TED演講影片，希望讓使用者透過感興趣的話題快樂學英文:)
            </p>
          }
          type="success"
          icon={<InfoCircleOutlined />}
          showIcon
          closeIcon
        />
        <Carousel
          arrows
          prevArrow={<LeftOutlined />}
          nextArrow={<RightOutlined />}
        >
          {dummyVideo.map((video) => {
            return (
              <div key={video.id}>
                <StyledCard title={<h2>{video.title}</h2>} bordered={false}>
                  <iframe
                    width="620"
                    height="360"
                    src={video.path}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </StyledCard>
              </div>
            );
          })}
        </Carousel>
      </StyledDiv>
    </Container>
  );
};

export default VideoPage;
