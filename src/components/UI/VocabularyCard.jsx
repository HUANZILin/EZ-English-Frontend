import styled from "styled-components";
import { Progress } from "antd";
import OffCollection from "./Collection/OffCollect.png";
import InCollection from "./Collection/InCollect.png";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  flex-direction: row;
  background-color: #e2e4dd;
  border-radius: 1rem;
  color: #314543;
  padding: 0.5rem;
  margin: 1rem;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0;
`;

const BarDiv = styled.div`
  display: flex;
  width: 20rem;
  justify-content: center;
`;

const VocabularyCard = (props) => {
  const [isCollected, setIsCollected] = useState(props.nowIsCollected);

  const clickHandler = (event) => {
    event.preventDefault();
    if (isCollected) {
      setIsCollected(false);
    } else {
      setIsCollected(true);
    }
  };

  return (
    <Container>
      <Button onClick={clickHandler}>
        <img
          src={`${isCollected ? InCollection : OffCollection}`}
          style={{ width: "30px", height: "30px" }}
        />
      </Button>
      <h2 style={{ fontSize: "2rem", color: "#af7a1f" }}>{props.word}</h2>
      <h2>({props.pos})</h2>
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
      <h2>{props.lp}</h2>
    </Container>
  );
};

export default VocabularyCard;
