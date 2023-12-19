import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchVideo } from "../util/http";

import { Card, Carousel, Alert } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

import Container from "../components/UI/Container";
import LoadingIndicator from "../components/UI/LoadingIndicator";
import ErrorBlock from "../components/UI/ErrorBlock";

const StyledDiv = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
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
  let content;
  const [videoList, setVideoList] = useState([
    {
      id: 0,
      title: "data[0].snippet.title",
      path: `https://www.youtube.com/embed/8jPQjjsBbIc?}`,
    },
    {
      id: 1,
      title: "data[1].snippet.title",
      path: `https://www.youtube.com/embed/8jPQjjsBbIc?}`,
    },
    {
      id: 2,
      title: "data[2].snippet.title",
      path: `https://www.youtube.com/embed/8jPQjjsBbIc?}`,
    },
    {
      id: 3,
      title: "data[3].snippet.title",
      path: `https://www.youtube.com/embed/8jPQjjsBbIc?}`,
    },
  ]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["videoData"],
    queryFn: fetchVideo,
  });

  if (data) {
    setVideoList([
      {
        id: data[0].id.videoId,
        title: data[0].snippet.title,
        path: `https://www.youtube.com/embed/${data[0].id.videoId}?`,
      },
      {
        id: data[1].id.videoId,
        title: data[1].snippet.title,
        path: `https://www.youtube.com/embed/${data[1].id.videoId}?`,
      },
      {
        id: data[2].id.videoId,
        title: data[2].snippet.title,
        path: `https://www.youtube.com/embed/${data[2].id.videoId}?`,
      },
      {
        id: data[3].id.videoId,
        title: data[3].snippet.title,
        path: `https://www.youtube.com/embed/${data[3].id.videoId}?`,
      },
    ]);

    content = (
      <Carousel
        arrows
        prevArrow={<LeftOutlined />}
        nextArrow={<RightOutlined />}
      >
        {videoList.map((video) => {
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
    );
  }

  if (isLoading) {
    content = (
      <>
        <h2
          style={{ fontSize: "28px", alignSelf: "center", marginTop: "2rem" }}
        >
          Loading...
        </h2>
        <LoadingIndicator />
      </>
    );
  }

  if (isError) {
    content = (
      <ErrorBlock
        title={"發生錯誤"}
        message={"取得資料時發生錯誤，請確認網路連線或於片刻後重整頁面。"}
        style={{ width: "65%" }}
      />
    );
  }

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
        {content}
      </StyledDiv>
    </Container>
  );
};

export default VideoPage;
