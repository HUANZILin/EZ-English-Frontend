import styled from "styled-components";
import ProgressBar from 'react-bootstrap/ProgressBar';
import OffCollection from './Collection/OffCollect.png';
import InCollection from './Collection/InCollect.png';
import { useState } from "react";


const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    flex-direction: row;
    background-color: #e2e4dd;
    border-radius: 1rem;
    color: #314543;
    padding: 0.5rem;
    margin: 1rem;
`;

const Button = styled.button`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding:0;
`;

const VocabularyCard = (props) => {

    const [isCollected, setIsCollected] = useState(false);

    const clickHandler = (event) => {
        event.preventDefault();
        if(isCollected){
            setIsCollected(false);
        }else{
            setIsCollected(true);
        }
        
    };

    return(
        <Container>
            <Button onClick={clickHandler}><img src={`${isCollected ? InCollection : OffCollection}`} style={{width: '30px',height: '30px'}}/></Button>
            <h2 style={{fontSize: '2rem', color: '#af7a1f'}}>{props.word}</h2><h2>({props.pos})</h2>
            <h2 style={{paddingLeft : "10rem",paddingRight : "10rem"}}>{props.corr}</h2>
            <h2>{props.lp}</h2>
        </Container>
    );
};

export default VocabularyCard;