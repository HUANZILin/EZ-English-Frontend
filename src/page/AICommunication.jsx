import styled from "styled-components";
import Title from "../components/Title";
import Messenges from "../components/UI/Chat/Messenges";
import InputMessenge from "../components/UI/Chat/InputMessenge";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding-top: 5rem;
`;

const ChatBlock = styled.div`
  background-color: #e2e4dd;
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  height: 80vh;
  width: 60vw;
  overflow-y: scroll;
`;

const DUMMY_Messenge = [
  {
    ID: "A01",
    Speaker: "AI",
    Messenge:
      "歡迎進入AI對話學習，我是你的學習小助手！Welcome here, I am your AI learning Helper!",
  },
  {
    ID: "A02",
    Speaker: "AI",
    Messenge:
      "請隨意輸入您想跟我聊的內容，我會及時糾正您的文法並回覆！Feel free to input any content you'd like to chat with me about. I'll promptly correct your grammar and provide a response!",
  },
  {
    ID: "B01",
    Speaker: "User",
    Messenge: "I am asking for something to eat, any advice?",
  },
];

const AICommunication = () => {
  const [MessengesData, setMessengesData] = useState(DUMMY_Messenge);

  const addNewText = (enteredText) => {
    setMessengesData((prevData) => {
      return [...prevData, enteredText];
    });
  };

  return (
    <Container>
      <Title title="AI對話" />
      <ChatBlock>
        {MessengesData.map((context) => (
          <Messenges
            key={context.ID}
            text={context.Messenge}
            speak={context.Speaker}
          />
        ))}
      </ChatBlock>
      <InputMessenge newText={addNewText}></InputMessenge>
    </Container>
  );
};

export default AICommunication;
