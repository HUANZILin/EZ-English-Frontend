import styled from "styled-components";
import Title from "../components/Title";
import VocabularyCard from "../components/UI/VocabularyCard";
import { useState, useEffect } from "react";
import LoadingIndicator from "../components/UI/LoadingIndicator";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 3rem 0rem;
`;

const Smalltit = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 60rem;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 60rem;
`;

const CollectionWord = () => {
  const [theCollectedList, setTheCollectedList] = useState([]);
  const [nowLoading, setNowLoading] = useState(true);
  useEffect(() => {
    const url = "https://jybluega.com/ez-backend/collection";
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJtX2lkIjoiNCIsIm1fYWNjb3VudCI6InRlc3QifQ.1TMkD1UIvZDPAdv64e8wLYp4F7rkBYgrYre9yQ8s33A";
    async function fetchData() {
      const response = await fetch(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const resData = await response.json();
      setTheCollectedList(resData.data.wordsData);
      setNowLoading(false);
    }
    try {
      fetchData();
    } catch (error) {
      console.log("The error occuered! :", error.message);
    }
  }, []);

  if (nowLoading) {
    return (
      <Container>
        <Title title="收藏單字" />
        <>
          <h2
            style={{ fontSize: "28px", alignSelf: "center", marginTop: "2rem" }}
          >
            Loading...
          </h2>
          <LoadingIndicator />
        </>
      </Container>
    );
  }

  return (
    <Container>
      <Title title="收藏單字" />
      {theCollectedList.length == 0 ? (
        ""
      ) : (
        <Smalltit>
          <h2>單字(詞性)</h2>
          <h2 style={{ paddingLeft: "8rem" }}>正確率</h2>
          <h2>最後測驗時間</h2>
        </Smalltit>
      )}
      <Card>
        {theCollectedList.length == 0 ? (
          <h3 style={{ color: "yellow" }}>Oops！你沒有收藏的單字</h3>
        ) : (
          theCollectedList.map((word) => (
            <VocabularyCard
              nowIsCollected={word.collect}
              key={word.w_id}
              word={word.w_word}
              pos={word.w_part_of_speech}
              lp={word.latest_datetime}
              collected={word.collect}
              theID={word.w_id}
            />
          ))
        )}
      </Card>
    </Container>
  );
};

export default CollectionWord;
