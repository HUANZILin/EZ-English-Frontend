import Title from "../components/Title";
import styled from "styled-components";
import FuncBar from "../components/FuncBar";
import VocabularyCard from "../components/UI/VocabularyCard";

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top: 5rem;
`;

const VocabularyListPage = () => {
    return(
        <Container>
            <Title title="單字列表"/>
            <FuncBar />
            <VocabularyCard/>
        </Container>
    );
}

export default VocabularyListPage;