import styled from "styled-components";
import Container from "../components/UI/Container";
import Record from "../components/UI/Record";
import LoadButton from "../components/UI/LoadButton";

const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 60%;
  padding: 0% 20%;
`;

const Smalltit = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 60%;
  padding: 0% 20%;
`;

const PracticeRecordPage = () => {
  const DUMMY_Record = [
    {
      id: "T0",
      practiceTime: "2023.04.19",
      type: "隨機",
      Correct: "67",
      Vocabulary: ["Apple", "Work", "Bee", "Banana"],
    },
    {
      id: "T1",
      practiceTime: "2023.05.19",
      type: "收藏",
      Correct: "80",
      Vocabulary: ["Apple", "Work", "Bee", "Banana"],
    },
    {
      id: "T2",
      practiceTime: "2023.04.18",
      type: "隨機",
      Correct: "44",
      Vocabulary: ["Apple", "Work", "Bee", "Banana"],
    },
    {
      id: "T3",
      practiceTime: "2023.07.18",
      type: "收藏",
      Correct: "48",
      Vocabulary: ["Apple", "Work", "Bee", "Banana"],
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
        &thinsp;練習紀錄
      </h1>
      <hr width="80%" />
      <Smalltit>
        <h2 style={{ paddingLeft: "2.5rem" }}>測驗時間</h2>
        <h2 style={{ paddingRight: "6rem" }}>測驗類型</h2>
        <h2 style={{ paddingRight: "10rem" }}>正確率</h2>
      </Smalltit>
      <Card>
        {DUMMY_Record.map((record) => (
          <Record
            key={record.id}
            type={record.type}
            word={record.Vocabulary}
            corr={record.Correct}
            time={record.practiceTime}
          />
        ))}
      </Card>
      <LoadButton>Load More</LoadButton>
    </Container>
  );
};

export default PracticeRecordPage;
