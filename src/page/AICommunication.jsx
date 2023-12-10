import { useState } from "react";

import styled from "styled-components";
import Title from "../components/Title";
import Messages from "../components/UI/Chat/Messages";
import InputMessage from "../components/UI/Chat/InputMessage";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 3rem 0rem;
`;

const ChatBlock = styled.div`
  background-color: #e2e4dd;
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  margin-bottom: 1rem;
  padding: 1rem 0rem;
  border: 1rem solid #e2e4dd;
  border-radius: 1rem;
  height: 80vh;
  width: 60vw;
  overflow-y: scroll;
`;

const DUMMY_Message = [
  {
    Speaker: "AI bot",
    Message:
      "歡迎進入AI對話學習，我是你的學習小助手！Welcome here, I am your AI learning Helper!",
  },
  {
    Speaker: "AI bot",
    Message:
      "請隨意輸入您想跟我聊的內容，我會及時糾正您的文法並回覆！Feel free to input any content you'd like to chat with me about. I'll promptly correct your grammar and provide a response!",
  },
];

const AICommunication = () => {
  const [MessagesData, setMessagesData] = useState(DUMMY_Message);

  const addNewText = (enteredText) => {
    setMessagesData((prevData) => {
      return [...prevData, enteredText];
    });
  };

  return (
    <Container>
      <Title title="AI對話" />
      <ChatBlock>
        {MessagesData.map((context, index) => (
          <Messages
            key={index}
            text={context.Message}
            speak={context.Speaker}
          />
        ))}
        {console.log(MessagesData)}
      </ChatBlock>
      <InputMessage newText={addNewText}></InputMessage>
    </Container>
  );
};

export default AICommunication;
