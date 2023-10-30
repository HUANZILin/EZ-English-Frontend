import styled from "styled-components";
import { Collapse, Progress } from "antd";

const Container = styled(Collapse)`
  display: flex;
  align-items: center;
  background-color: #e2e4dd;
  border: none;
  color: #314543;
  margin: 1rem;

  h2 {
    color: #314543;
  }

  .ant-collapse-item {
    width: 100%;
  }

  .ant-collapse-content-box {
    background-color: #eff1e9;
  }

  .ant-collapse-item li {
    color: #314543;
    font-size: large;
  }

  .ant-collapse-expand-icon {
    padding-left: 2rem;
    margin-right: -2rem;
    align-self: center;
  }

  .ant-collapse-header,
  .ant-collapse-header-text {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;

const BarDiv = styled.div`
  display: flex;
  width: 20rem;
  justify-content: center;
  color: #314543;
`;

const Record = (props) => {
  return (
    <Container
      collapsible="header"
      defaultActiveKey={props.id}
      items={[
        {
          key: props.id,
          label: (
            <>
              <h2>{props.time}</h2>
              <h2>{props.type}</h2>
              <BarDiv>
                <Progress
                  strokeColor="#58805e"
                  percent={props.corr}
                  trailColor="#314543"
                  size={[300, 20]}
                  showInfo={false}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                ></Progress>
                <h2>{props.corr}%</h2>
              </BarDiv>
            </>
          ),
          children: (
            <ol>
              {props.word.map((word) => (
                <li key={Math.random()}>{word}</li>
              ))}
            </ol>
          ),
        },
      ]}
    />
  );
};

export default Record;
