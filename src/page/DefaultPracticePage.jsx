import { Card, Carousel, Segmented, Collapse } from "antd";
import {
  CaretDownFilled,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

import Container from "../components/UI/Container";
import CollectButton from "../components/UI/Collection/CollectButton";

const StyledDiv = styled.div`
  width: 40%;
  align-self: center;
  margin-bottom: 50px;

  .ant-carousel .slick-next,
  .ant-carousel .slick-next:hover,
  .ant-carousel .slick-next:focus,
  .ant-carousel .slick-prev,
  .ant-carousel .slick-prev:hover,
  .ant-carousel .slick-prev:focus {
    font-size: 36px;
    color: #e2e4dd !important;
  }
`;

const StyledCard = styled(Card)`
  background-color: #e2e4dd;
  margin: 40px 25px;
  padding-bottom: 24px;
  text-align: center;

  h2 {
    color: #314543;
  }
`;

const StyledSegmented = styled(Segmented)`
  background-color: #314543;
  font-size: medium;

  .ant-segmented-item {
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #e2e4dd;
  }

  .ant-segmented-item-selected {
    background-color: #58805e;
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

  return (
    <Container>
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
                  title={
                    <h2 style={{ color: "#af7a1f", fontSize: "xx-large" }}>
                      {voc.title}
                    </h2>
                  }
                  bordered={false}
                >
                  <Collapse
                    items={[
                      {
                        key: voc.id,
                        label: (
                          <div style={{ paddingBottom: "17px" }}>
                            <h2 style={{ marginBottom: "-5px" }}>查看解釋</h2>
                            <CaretDownFilled style={{ color: "#314543" }} />
                          </div>
                        ),
                        children: (
                          <>
                            <h2>
                              {voc.translation}({voc.part})
                            </h2>
                            <p>{voc.explanation}</p>
                          </>
                        ),
                        showArrow: false,
                      },
                    ]}
                    bordered={false}
                  />
                  <hr style={{ backgroundColor: "#314543", margin: "32px" }} />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0px 32px",
                    }}
                  >
                    <CollectButton initState={false} />
                    <StyledSegmented
                      block
                      options={["陌生", "不確定", "熟悉"]}
                    />
                  </div>
                </StyledCard>
              </div>
            );
          })}
        </Carousel>
      </StyledDiv>
    </Container>
  );
};

export default DefaultPracticePage;
