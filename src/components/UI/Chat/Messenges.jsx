import styled from "styled-components";

const AIBox = styled.div`
  background-color: ${(props) =>
    props.speaking == "User" ? "#58805e" : "#af7a1f"};
  border-radius: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: ${(props) => (props.speaking == "User" ? "10rem" : "2rem")};
  margin-right: ${(props) => (props.speaking == "User" ? "2rem" : "10rem")};
  padding: 1rem;
`;
const Messenge = styled.h2`
  font-size: 1.4rem;
  margin: 1rem;
  text-align: left;
  color: #e2e4dd;
`;

const Messenges = (props) => {
  return (
    <AIBox speaking={props.speak}>
      <Messenge>{props.text}</Messenge>
    </AIBox>
  );
};

export default Messenges;
