import { Card, Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styled from "styled-components";

import Container from "../components/UI/Container";

const StyledDiv = styled.div`
  width: 50%;
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
                    width="560"
                    height="315"
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
