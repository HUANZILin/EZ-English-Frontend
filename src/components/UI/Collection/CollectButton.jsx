import { useState } from "react";
import styled from "styled-components";
import OffCollection from "../Collection/OffCollect.png";
import InCollection from "../Collection/InCollect.png";

const Button = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0;
`;

const CollectButton = (props) => {
  const [isCollected, setIsCollected] = useState(props.initState);

  const clickHandler = (event) => {
    event.preventDefault();
    if (isCollected) {
      setIsCollected(false);
    } else {
      setIsCollected(true);
    }
  };

  return (
    <Button onClick={clickHandler}>
      <img
        src={`${isCollected ? InCollection : OffCollection}`}
        style={{ width: "30px", height: "30px" }}
      />
    </Button>
  );
};

export default CollectButton;