import styled from "styled-components";

const AIBox = styled.div`
  background-color: ${(props) =>
    props.speaking == "User" ? "#58805e" : "#af7a1f"};
  border-radius: 1rem;
  margin: 1.5rem;
  padding: 1rem;
`;
const Messenge = styled.h2`
  font-size: 1.5rem;
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
