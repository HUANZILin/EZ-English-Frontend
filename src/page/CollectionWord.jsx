import styled from "styled-components";
import Title from "../components/Title";
import VocabularyCard from "../components/UI/VocabularyCard";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    padding-top: 5rem;
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

const DUMMY_WORD = [
    {
        isCollected : true,
        id : "T0",
        Vocabulary : "Apple",
        PartOfSpeech : "n.",
        Correct : "67",
        LatestPractice : "2023.04.19"
    },
    {
        isCollected : true,
        id : "T1",
        Vocabulary : "Work",
        PartOfSpeech : "v.",
        Correct : "80",
        LatestPractice : "2023.05.19"
    },
]

const CollectionWord = () => {

    return(
        <Container>
            <Title title="收藏單字"/>
            <Smalltit>
            <h2>單字(詞性)</h2>
            <h2 style={{paddingLeft : "8rem"}}>正確率</h2>
            <h2>最後測驗時間</h2>
            </Smalltit>
            <Card>
            {DUMMY_WORD.map((word) => (
            <VocabularyCard nowIsCollected={word.isCollected} key={word.id} word={word.Vocabulary} pos={word.PartOfSpeech} corr={word.Correct} lp={word.LatestPractice}/>))}
            </Card>
        </Container>
    );
};

export default CollectionWord;