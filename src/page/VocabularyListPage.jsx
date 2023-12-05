import Title from "../components/Title";
import styled from "styled-components";
import FuncBar from "../components/FuncBar";
import VocabularyCard from "../components/UI/VocabularyCard";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 3rem 0rem;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 60rem;
`;

const Smalltit = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 60rem;
`;

const DUMMY_WORD = [
  {
    id: "T0",
    Vocabulary: "Apple",
    PartOfSpeech: "n.",
    Correct: "67",
    LatestPractice: "2023.04.19",
  },
  {
    id: "T1",
    Vocabulary: "Work",
    PartOfSpeech: "v.",
    Correct: "80",
    LatestPractice: "2023.05.19",
  },
  {
    id: "T2",
    Vocabulary: "Bee",
    PartOfSpeech: "n.",
    Correct: "44",
    LatestPractice: "2023.04.18",
  },
  {
    id: "T3",
    Vocabulary: "Banana",
    PartOfSpeech: "n.",
    Correct: "48",
    LatestPractice: "2023.07.18",
  },
];

const VocabularyListPage = () => {
  const [onPlaying, setOnPlaying] = useState(DUMMY_WORD);

  const NowSearchWord = (searchWord) => {
    setOnPlaying(
      DUMMY_WORD.filter((word) =>
        word.Vocabulary.toLowerCase().includes(searchWord)
      )
    );
  };

  const NowSorting = (isSorting) => {
    if (isSorting) {
      const sortedWords = [...onPlaying].sort((a, b) => {
        const nameA = a.Vocabulary.toLowerCase();
        const nameB = b.Vocabulary.toLowerCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      setOnPlaying(sortedWords);
    }
  };

  return (
    <Container>
      <Title title="單字列表" />
      <FuncBar isSearching={NowSearchWord} isSorting={NowSorting} />
      <Smalltit>
        <h2>單字(詞性)</h2>
        <h2 style={{ paddingLeft: "8rem" }}>正確率</h2>
        <h2>最後測驗時間</h2>
      </Smalltit>
      <Card>
        {onPlaying.map((word) => (
          <VocabularyCard
            key={word.id}
            word={word.Vocabulary}
            pos={word.PartOfSpeech}
            corr={word.Correct}
            lp={word.LatestPractice}
          />
        ))}
      </Card>
    </Container>
  );
};

export default VocabularyListPage;
